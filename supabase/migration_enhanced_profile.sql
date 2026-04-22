-- Migration: Enhanced Profile & XP System
-- Run this in Supabase SQL Editor to upgrade your database

-- Add new columns to profiles table
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS display_name TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS nickname TEXT UNIQUE;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS level INTEGER DEFAULT 1;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS favorite_exercises TEXT[] DEFAULT '{}';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS saved_guides TEXT[] DEFAULT '{}';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS social_links JSONB DEFAULT '{}';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS is_public BOOLEAN DEFAULT true;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS joined_community BOOLEAN DEFAULT false;

-- Add new columns to user_stats for XP system
ALTER TABLE public.user_stats ADD COLUMN IF NOT EXISTS rank_tier TEXT DEFAULT 'F';
ALTER TABLE public.user_stats ADD COLUMN IF NOT EXISTS milestones_achieved TEXT[] DEFAULT '{}';
ALTER TABLE public.user_stats ADD COLUMN IF NOT EXISTS skills_unlocked INTEGER DEFAULT 0;
ALTER TABLE public.user_stats ADD COLUMN IF NOT EXISTS community_reputation INTEGER DEFAULT 0;

-- Update the handle_new_user function to use email prefix as default username
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
  default_username TEXT;
  default_nickname TEXT;
BEGIN
  -- Extract username from email (part before @)
  default_username := split_part(NEW.email, '@', 1);
  default_nickname := default_username || '_' || substr(md5(random()::text), 1, 4);
  
  INSERT INTO public.profiles (id, username, display_name, nickname)
  VALUES (NEW.id, default_username, default_username, default_nickname);
  
  INSERT INTO public.user_stats (user_id)
  VALUES (NEW.id);
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to calculate rank based on XP
CREATE OR REPLACE FUNCTION public.calculate_rank(xp INTEGER)
RETURNS TEXT AS $$
BEGIN
  IF xp >= 10000 THEN RETURN 'SS';
  ELSIF xp >= 5000 THEN RETURN 'S';
  ELSIF xp >= 2500 THEN RETURN 'A';
  ELSIF xp >= 1000 THEN RETURN 'B';
  ELSIF xp >= 500 THEN RETURN 'C';
  ELSIF xp >= 200 THEN RETURN 'D';
  ELSE RETURN 'F';
  END IF;
END;
$$ LANGUAGE plpgsql;

-- Create function to calculate level from XP
CREATE OR REPLACE FUNCTION public.calculate_level(xp INTEGER)
RETURNS INTEGER AS $$
BEGIN
  RETURN FLOOR(xp / 100) + 1;
END;
$$ LANGUAGE plpgsql;

-- Create function to award XP
CREATE OR REPLACE FUNCTION public.award_xp(
  p_user_id UUID,
  p_xp_amount INTEGER,
  p_reason TEXT
)
RETURNS VOID AS $$
DECLARE
  new_xp INTEGER;
  new_rank TEXT;
  new_level INTEGER;
BEGIN
  -- Update XP
  UPDATE public.user_stats
  SET xp = xp + p_xp_amount,
      updated_at = NOW()
  WHERE user_id = p_user_id;
  
  -- Get new XP total
  SELECT xp INTO new_xp FROM public.user_stats WHERE user_id = p_user_id;
  
  -- Calculate new rank and level
  new_rank := public.calculate_rank(new_xp);
  new_level := public.calculate_level(new_xp);
  
  -- Update rank and level
  UPDATE public.user_stats SET rank_tier = new_rank WHERE user_id = p_user_id;
  UPDATE public.profiles SET level = new_level WHERE id = p_user_id;
  
  -- Log the XP award (you can create an xp_logs table later)
  RAISE NOTICE 'Awarded % XP to user % for %', p_xp_amount, p_user_id, p_reason;
END;
$$ LANGUAGE plpgsql;

-- Create function to update streak on workout log
CREATE OR REPLACE FUNCTION public.update_streak_on_workout()
RETURNS TRIGGER AS $$
DECLARE
  last_workout DATE;
  current_streak INTEGER;
  xp_to_award INTEGER := 50; -- Base XP for logging workout
BEGIN
  -- Get last workout date
  SELECT last_workout_date INTO last_workout FROM public.user_stats WHERE user_id = NEW.user_id;
  
  -- Get current streak
  SELECT current_streak INTO current_streak FROM public.user_stats WHERE user_id = NEW.user_id;
  
  -- Update streak logic
  IF last_workout IS NULL THEN
    -- First workout
    UPDATE public.user_stats 
    SET current_streak = 1, 
        longest_streak = 1,
        total_workouts = 1,
        last_workout_date = NEW.workout_date,
        last_log_date = CURRENT_DATE
    WHERE user_id = NEW.user_id;
    
    xp_to_award := 100; -- Bonus XP for first workout
  ELSIF last_workout = CURRENT_DATE - 1 THEN
    -- Consecutive day
    UPDATE public.user_stats 
    SET current_streak = current_streak + 1,
        longest_streak = GREATEST(longest_streak, current_streak + 1),
        total_workouts = total_workouts + 1,
        last_workout_date = NEW.workout_date,
        last_log_date = CURRENT_DATE
    WHERE user_id = NEW.user_id;
    
    -- Bonus XP for streaks
    IF current_streak + 1 >= 30 THEN
      xp_to_award := 200; -- 30+ day streak
    ELSIF current_streak + 1 >= 14 THEN
      xp_to_award := 150; -- 14+ day streak
    ELSIF current_streak + 1 >= 7 THEN
      xp_to_award := 100; -- 7+ day streak
    END IF;
  ELSIF last_workout < CURRENT_DATE - 1 THEN
    -- Streak broken
    UPDATE public.user_stats 
    SET current_streak = 1,
        total_workouts = total_workouts + 1,
        last_workout_date = NEW.workout_date,
        last_log_date = CURRENT_DATE
    WHERE user_id = NEW.user_id;
  END IF;
  
  -- Award XP
  PERFORM public.award_xp(NEW.user_id, xp_to_award, 'Workout logged');
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for workout logging
CREATE TRIGGER on_workout_logged
  AFTER INSERT ON public.workout_logs
  FOR EACH ROW
  EXECUTE FUNCTION public.update_streak_on_workout();

-- Create function to update consistency percentage
CREATE OR REPLACE FUNCTION public.update_consistency()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE public.user_stats
  SET consistency_percentage = (
    SELECT 
      CASE 
        WHEN CURRENT_DATE - MIN(workout_date) > 0 THEN
          (COUNT(*)::DECIMAL / (CURRENT_DATE - MIN(workout_date))) * 100
        ELSE 0
      END
    FROM public.workout_logs
    WHERE user_id = NEW.user_id
    AND workout_date >= CURRENT_DATE - INTERVAL '30 days'
  ),
  updated_at = NOW()
  WHERE user_id = NEW.user_id;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for consistency calculation
CREATE TRIGGER on_workout_for_consistency
  AFTER INSERT OR UPDATE ON public.workout_logs
  FOR EACH ROW
  EXECUTE FUNCTION public.update_consistency();

-- Add RLS policies for new community features
CREATE POLICY "Public profiles viewable when is_public is true"
  ON public.profiles FOR SELECT
  USING (is_public = true OR auth.uid() = id);

-- Create view for public leaderboard (future community feature)
CREATE OR REPLACE VIEW public.leaderboard AS
SELECT 
  p.id,
  p.username,
  p.display_name,
  p.nickname,
  p.avatar_url,
  p.level,
  us.xp,
  us.rank_tier,
  us.current_streak,
  us.total_workouts,
  us.consistency_percentage
FROM public.profiles p
JOIN public.user_stats us ON p.id = us.user_id
WHERE p.is_public = true
ORDER BY us.xp DESC;
