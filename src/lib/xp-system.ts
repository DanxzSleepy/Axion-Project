import { supabase } from './supabase';

// XP Configuration
export const XP_REWARDS = {
  WORKOUT_LOG: 50,
  FIRST_WORKOUT: 100,
  STREAK_7_DAYS: 100,
  STREAK_14_DAYS: 150,
  STREAK_30_DAYS: 200,
  SKILL_UNLOCK: 100,
  PROFILE_COMPLETE: 75,
  GUIDE_COMPLETE: 25
} as const;

export const RANK_TIERS = [
  { tier: 'F', minXP: 0, label: 'Beginner', color: 'from-gray-500 to-gray-600' },
  { tier: 'D', minXP: 200, label: 'Novice', color: 'from-green-500 to-green-600' },
  { tier: 'C', minXP: 500, label: 'Apprentice', color: 'from-blue-500 to-blue-600' },
  { tier: 'B', minXP: 1000, label: 'Practitioner', color: 'from-yellow-500 to-yellow-600' },
  { tier: 'A', minXP: 2500, label: 'Athlete', color: 'from-orange-500 to-orange-600' },
  { tier: 'S', minXP: 5000, label: 'Master', color: 'from-purple-500 to-purple-600' },
  { tier: 'SS', minXP: 10000, label: 'Grandmaster', color: 'from-pink-500 to-pink-600' }
] as const;

export function calculateLevel(xp: number): number {
  return Math.floor(xp / 100) + 1;
}

export function calculateRank(xp: number): string {
  for (let i = RANK_TIERS.length - 1; i >= 0; i--) {
    if (xp >= RANK_TIERS[i].minXP) {
      return RANK_TIERS[i].tier;
    }
  }
  return 'F';
}

export function getNextRank(xp: number) {
  const currentRank = calculateRank(xp);
  const currentIndex = RANK_TIERS.findIndex(r => r.tier === currentRank);
  
  if (currentIndex < RANK_TIERS.length - 1) {
    const nextRank = RANK_TIERS[currentIndex + 1];
    return {
      tier: nextRank.tier,
      label: nextRank.label,
      xpNeeded: nextRank.minXP - xp,
      color: nextRank.color
    };
  }
  
  return null; // Max rank achieved
}

export function getProgressToNextLevel(xp: number): { current: number; needed: number; percentage: number } {
  const currentLevel = calculateLevel(xp);
  const currentLevelXP = (currentLevel - 1) * 100;
  const nextLevelXP = currentLevel * 100;
  const progress = xp - currentLevelXP;
  
  return {
    current: progress,
    needed: 100,
    percentage: (progress / 100) * 100
  };
}

// Profile management
export async function updateProfile(userId: string, updates: {
  display_name?: string;
  nickname?: string;
  bio?: string;
  avatar_url?: string;
  favorite_exercises?: string[];
  saved_guides?: string[];
  social_links?: Record<string, string>;
  is_public?: boolean;
}) {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function toggleFavoriteExercise(userId: string, exerciseId: string) {
  const { data: profile } = await supabase
    .from('profiles')
    .select('favorite_exercises')
    .eq('id', userId)
    .single();

  const favorites = profile?.favorite_exercises || [];
  const isFavorite = favorites.includes(exerciseId);
  
  const newFavorites = isFavorite
    ? favorites.filter((id: string) => id !== exerciseId)
    : [...favorites, exerciseId];

  return updateProfile(userId, { favorite_exercises: newFavorites });
}

export async function toggleSaveGuide(userId: string, guideSlug: string) {
  const { data: profile } = await supabase
    .from('profiles')
    .select('saved_guides')
    .eq('id', userId)
    .single();

  const saved = profile?.saved_guides || [];
  const isSaved = saved.includes(guideSlug);
  
  const newSaved = isSaved
    ? saved.filter((slug: string) => slug !== guideSlug)
    : [...saved, guideSlug];

  return updateProfile(userId, { saved_guides: newSaved });
}

export async function awardXP(userId: string, amount: number, reason: string) {
  const { data, error } = await supabase.rpc('award_xp', {
    p_user_id: userId,
    p_xp_amount: amount,
    p_reason: reason
  });

  if (error) throw error;
  return data;
}

export async function getUserLeaderboard(limit: number = 50) {
  const { data, error } = await supabase
    .from('leaderboard')
    .select('*')
    .limit(limit);

  if (error) throw error;
  return data;
}
