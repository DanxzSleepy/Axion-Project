-- Create profiles table (extends auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create workout_logs table
CREATE TABLE IF NOT EXISTS public.workout_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  workout_date DATE NOT NULL DEFAULT CURRENT_DATE,
  category TEXT NOT NULL CHECK (category IN ('push', 'pull', 'legs', 'core', 'full-body')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create workout_exercises table
CREATE TABLE IF NOT EXISTS public.workout_exercises (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  workout_id UUID REFERENCES public.workout_logs(id) ON DELETE CASCADE NOT NULL,
  section TEXT NOT NULL CHECK (section IN ('warmup', 'main-skill', 'secondary', 'volume')),
  exercise_name TEXT NOT NULL,
  sets INTEGER,
  reps_or_hold TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create skill_progress table
CREATE TABLE IF NOT EXISTS public.skill_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  skill_name TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('locked', 'available', 'in-progress', 'completed')),
  progress_percentage INTEGER DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, skill_name)
);

-- Create user_stats table (for streaks, XP, rankings)
CREATE TABLE IF NOT EXISTS public.user_stats (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL UNIQUE,
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  total_workouts INTEGER DEFAULT 0,
  total_rest_days INTEGER DEFAULT 0,
  consistency_percentage DECIMAL(5,2) DEFAULT 0,
  xp INTEGER DEFAULT 0,
  rank TEXT DEFAULT 'Bronze I',
  last_workout_date DATE,
  last_log_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create RLS (Row Level Security) policies
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workout_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workout_exercises ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skill_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_stats ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone"
  ON public.profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- Workout logs policies
CREATE POLICY "Users can view their own workout logs"
  ON public.workout_logs FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own workout logs"
  ON public.workout_logs FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own workout logs"
  ON public.workout_logs FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own workout logs"
  ON public.workout_logs FOR DELETE
  USING (auth.uid() = user_id);

-- Workout exercises policies
CREATE POLICY "Users can view their own workout exercises"
  ON public.workout_exercises FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM public.workout_logs
    WHERE workout_logs.id = workout_exercises.workout_id
    AND workout_logs.user_id = auth.uid()
  ));

CREATE POLICY "Users can insert their own workout exercises"
  ON public.workout_exercises FOR INSERT
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.workout_logs
    WHERE workout_logs.id = workout_exercises.workout_id
    AND workout_logs.user_id = auth.uid()
  ));

CREATE POLICY "Users can update their own workout exercises"
  ON public.workout_exercises FOR UPDATE
  USING (EXISTS (
    SELECT 1 FROM public.workout_logs
    WHERE workout_logs.id = workout_exercises.workout_id
    AND workout_logs.user_id = auth.uid()
  ));

CREATE POLICY "Users can delete their own workout exercises"
  ON public.workout_exercises FOR DELETE
  USING (EXISTS (
    SELECT 1 FROM public.workout_logs
    WHERE workout_logs.id = workout_exercises.workout_id
    AND workout_logs.user_id = auth.uid()
  ));

-- Skill progress policies
CREATE POLICY "Users can view their own skill progress"
  ON public.skill_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own skill progress"
  ON public.skill_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own skill progress"
  ON public.skill_progress FOR UPDATE
  USING (auth.uid() = user_id);

-- User stats policies
CREATE POLICY "Users can view their own stats"
  ON public.user_stats FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own stats"
  ON public.user_stats FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own stats"
  ON public.user_stats FOR UPDATE
  USING (auth.uid() = user_id);

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username)
  VALUES (NEW.id, NEW.email);
  
  INSERT INTO public.user_stats (user_id)
  VALUES (NEW.id);
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_skill_progress_updated_at
  BEFORE UPDATE ON public.skill_progress
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_user_stats_updated_at
  BEFORE UPDATE ON public.user_stats
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
