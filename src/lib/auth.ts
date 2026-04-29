import { supabase } from './supabase';

// Sign up with email and password
export async function signUp(email: string, password: string, username: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
      },
    },
  });

  if (error) {
    throw error;
  }

  return data;
}

// Sign in with email and password
export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  return data;
}

// Sign out
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw error;
  }
}

// Get current user
export async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) {
    // If getUser fails, try getSession as a fallback for the browser
    const { data: { session } } = await supabase.auth.getSession();
    return session?.user || null;
  }
  return user;
}

// Get current session
export async function getCurrentSession() {
  const { data: { session }, error } = await supabase.auth.getSession();
  if (error) return null;
  return session;
}

// Sign in with Google
export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  });

  if (error) {
    throw error;
  }

  return data;
}

// Update user profile
export async function updateProfile(userId: string, updates: { username?: string; avatar_url?: string; bio?: string }) {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId);

  if (error) {
    throw error;
  }

  return data;
}

// Get user profile
export async function getProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

// Get user stats
export async function getUserStats(userId: string) {
  const { data, error } = await supabase
    .from('user_stats')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

// Update user stats
export async function updateUserStats(userId: string, updates: {
  current_streak?: number;
  longest_streak?: number;
  total_workouts?: number;
  total_rest_days?: number;
  consistency_percentage?: number;
  xp?: number;
  rank?: string;
  last_workout_date?: string;
  last_log_date?: string;
}) {
  const { data, error } = await supabase
    .from('user_stats')
    .update(updates)
    .eq('user_id', userId);

  if (error) {
    throw error;
  }

  return data;
}

// Create workout log
export async function createWorkoutLog(userId: string, category: string, date: string) {
  const { data, error } = await supabase
    .from('workout_logs')
    .insert({
      user_id: userId,
      category,
      workout_date: date,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

// Add exercise to workout
export async function addWorkoutExercise(workoutId: string, section: string, exerciseName: string, sets?: number, repsOrHold?: string, notes?: string) {
  const { data, error } = await supabase
    .from('workout_exercises')
    .insert({
      workout_id: workoutId,
      section,
      exercise_name: exerciseName,
      sets,
      reps_or_hold: repsOrHold,
      notes,
    });

  if (error) {
    throw error;
  }

  return data;
}

// Get user workouts
export async function getUserWorkouts(userId: string, limit = 10) {
  const { data, error } = await supabase
    .from('workout_logs')
    .select(`
      *,
      workout_exercises (*)
    `)
    .eq('user_id', userId)
    .order('workout_date', { ascending: false })
    .limit(limit);

  if (error) {
    throw error;
  }

  return data;
}

// Get skill progress
export async function getSkillProgress(userId: string) {
  const { data, error } = await supabase
    .from('skill_progress')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: true });

  if (error) {
    throw error;
  }

  return data;
}

// Update skill progress
export async function updateSkillProgress(userId: string, skillName: string, updates: {
  status?: string;
  progress_percentage?: number;
}) {
  const { data, error } = await supabase
    .from('skill_progress')
    .update(updates)
    .eq('user_id', userId)
    .eq('skill_name', skillName);

  if (error) {
    throw error;
  }

  return data;
}
