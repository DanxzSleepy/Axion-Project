export interface Exercise {
  id: string;
  name: string;
  category: ExerciseCategory;
  difficulty: DifficultyRank;
  learningTime: string;
  description: string;
  musclesWorked: string[];
  highTensionAreas: string[];
  steps: string[];
  mainExercises: string[];
  accessoryExercises: string[];
  progression: ProgressionChain;
  executionTips?: string[];
  commonMistakes?: string[];
  prerequisites?: string[];
  imageUrl?: string;
}

export type ExerciseCategory = 
  | 'horizontal-push'
  | 'vertical-push'
  | 'horizontal-pull'
  | 'vertical-pull'
  | 'legs'
  | 'core-misc';

export type DifficultyRank = 'F' | 'D' | 'C' | 'B' | 'A' | 'S' | 'SS';

export interface ProgressionChain {
  regression: string;
  current: string;
  progression: string;
  target: string;
}

export interface SkillGuide {
  id: string;
  title: string;
  category: string;
  content: string;
}

export interface WorkoutLog {
  id: string;
  date: string;
  category: string;
  warmup: ExerciseEntry[];
  mainSkill: ExerciseEntry[];
  secondary: ExerciseEntry[];
  volume: ExerciseEntry[];
  notes?: string;
}

export interface ExerciseEntry {
  name: string;
  sets: number;
  repsOrHold: string;
  notes?: string;
}

export interface UserProfile {
  id: string;
  username: string;
  avatar?: string;
  streak: number;
  longestStreak: number;
  totalWorkouts: number;
  totalRestDays: number;
  consistency: number;
  xp: number;
  rank: string;
  lastWorkoutDate?: string;
}

export type RankTier = 
  | 'Bronze' 
  | 'Iron' 
  | 'Silver' 
  | 'Gold' 
  | 'Platinum' 
  | 'Diamond' 
  | 'Master' 
  | 'Grandmaster';
