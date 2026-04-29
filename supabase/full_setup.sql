-- AXION - Full Database Setup
-- Run this in Supabase SQL Editor to set up everything at once

-- 1. PROFILES
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  display_name TEXT,
  nickname TEXT UNIQUE,
  avatar_url TEXT,
  bio TEXT,
  role TEXT DEFAULT 'user',
  level INTEGER DEFAULT 1,
  favorite_exercises TEXT[] DEFAULT '{}',
  saved_guides TEXT[] DEFAULT '{}',
  social_links JSONB DEFAULT '{}',
  is_public BOOLEAN DEFAULT true,
  joined_community BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. USER STATS
CREATE TABLE IF NOT EXISTS public.user_stats (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL UNIQUE,
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  total_workouts INTEGER DEFAULT 0,
  total_rest_days INTEGER DEFAULT 0,
  consistency_percentage DECIMAL(5,2) DEFAULT 0,
  xp INTEGER DEFAULT 0,
  rank_tier TEXT DEFAULT 'F',
  milestones_achieved TEXT[] DEFAULT '{}',
  skills_unlocked INTEGER DEFAULT 0,
  community_reputation INTEGER DEFAULT 0,
  last_workout_date DATE,
  last_log_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. WORKOUT LOGS
CREATE TABLE IF NOT EXISTS public.workout_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  workout_date DATE NOT NULL DEFAULT CURRENT_DATE,
  category TEXT NOT NULL CHECK (category IN ('push', 'pull', 'legs', 'core', 'full-body')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. WORKOUT EXERCISES
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

-- 5. SKILL PROGRESS
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

-- 6. FEEDBACK
CREATE TABLE IF NOT EXISTS public.feedback (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  email TEXT,
  type TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS POLICIES
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workout_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workout_exercises ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skill_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

-- (Policies simplified for setup)
CREATE POLICY "Public profiles are viewable" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can view own stats" ON public.user_stats FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can view own workouts" ON public.workout_logs FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Admins can view all" ON public.profiles FOR SELECT USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));
CREATE POLICY "Feedback insert" ON public.feedback FOR INSERT WITH CHECK (true);

-- FUNCTIONS & TRIGGERS

-- Handle new user
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
  default_username TEXT;
BEGIN
  default_username := split_part(NEW.email, '@', 1);
  
  INSERT INTO public.profiles (id, username, display_name, nickname)
  VALUES (NEW.id, default_username, default_username, default_username || '_' || substr(md5(random()::text), 1, 4));
  
  INSERT INTO public.user_stats (user_id)
  VALUES (NEW.id);
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- LEADERBOARD VIEW
DROP VIEW IF EXISTS public.leaderboard;
CREATE VIEW public.leaderboard AS
SELECT 
  p.id, p.username, p.display_name, p.nickname, p.avatar_url, p.level,
  us.xp, us.rank_tier, us.current_streak, us.total_workouts
FROM public.profiles p
JOIN public.user_stats us ON p.id = us.user_id
WHERE p.is_public = true
ORDER BY us.xp DESC;

-- Set initial admin (Email corrected)
UPDATE public.profiles SET role = 'admin' WHERE id IN (
  SELECT id FROM auth.users WHERE email = 'wolfdangalaxy2@gmail.com'
);

