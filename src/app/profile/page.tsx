'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Flame, Trophy, Calendar, Plus, X, Save, LogIn } from 'lucide-react';
import { getCurrentUser, getProfile, getUserStats } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ProfilePage() {
  const router = useRouter();
  const [showWorkoutForm, setShowWorkoutForm] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserData = async () => {
      const currentUser = await getCurrentUser();
      
      if (!currentUser) {
        router.push('/login');
        return;
      }

      setUser(currentUser);

      try {
        const [profileData, statsData] = await Promise.all([
          getProfile(currentUser.id),
          getUserStats(currentUser.id)
        ]);
        
        setProfile(profileData);
        setStats(statsData);
      } catch (error) {
        console.error('Error loading user data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-foreground/70">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!user || !stats) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <LogIn className="w-16 h-16 text-foreground/30 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Please sign in</h2>
          <p className="text-foreground/70 mb-6">You need to be logged in to view your profile</p>
          <Link
            href="/login"
            className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg transition-all font-medium inline-block"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  const displayName = profile?.username || user.email?.split('@')[0] || 'User';

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center text-4xl font-bold text-primary">
            {displayName[0].toUpperCase()}
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl font-bold mb-2">{displayName}</h1>
            <p className="text-foreground/60 mb-3">{user.email}</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="px-4 py-2 bg-card rounded-lg">
                <div className="text-sm text-foreground/60">Rank</div>
                <div className="font-bold text-primary">{stats.rank || 'Bronze I'}</div>
              </div>
              <div className="px-4 py-2 bg-card rounded-lg">
                <div className="text-sm text-foreground/60">XP</div>
                <div className="font-bold">{stats.xp || 0}</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 bg-card border border-border rounded-xl"
        >
          <Flame className="w-8 h-8 text-orange-500 mb-3" />
          <div className="text-3xl font-bold mb-1">{stats.current_streak || 0} 🔥</div>
          <div className="text-sm text-foreground/60">Current Streak</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 bg-card border border-border rounded-xl"
        >
          <Trophy className="w-8 h-8 text-yellow-500 mb-3" />
          <div className="text-3xl font-bold mb-1">{stats.longest_streak || 0}</div>
          <div className="text-sm text-foreground/60">Longest Streak</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 bg-card border border-border rounded-xl"
        >
          <Calendar className="w-8 h-8 text-primary mb-3" />
          <div className="text-3xl font-bold mb-1">{stats.total_workouts || 0}</div>
          <div className="text-sm text-foreground/60">Total Workouts</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 bg-card border border-border rounded-xl"
        >
          <div className="text-3xl font-bold mb-1 text-success">{stats.consistency_percentage || 0}%</div>
          <div className="text-sm text-foreground/60">Consistency</div>
        </motion.div>
      </div>

      {/* Reminder */}
      {stats.last_workout_date && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-4 bg-warning/10 border border-warning/30 rounded-lg"
        >
          <p className="text-warning text-sm">
            Don't forget to log your workout or rest day at least once per day to maintain your streak! 
            Your last log was on {new Date(stats.last_workout_date).toLocaleDateString()}. Streak resets at 4 AM daily.
          </p>
        </motion.div>
      )}

      {/* Workout Log Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="p-8 bg-card border border-border rounded-2xl"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Workout Log</h2>
          <button
            onClick={() => setShowWorkoutForm(!showWorkoutForm)}
            className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg transition-all flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            New Workout
          </button>
        </div>

        {!showWorkoutForm ? (
          <div className="text-center py-12 text-foreground/60">
            <p>No workouts logged yet. Click "+ New Workout" to start.</p>
            <div className="mt-4 text-sm">
              <p>Not sure how to structure your workout? Check out the</p>
              <a href="/training" className="text-primary hover:underline">beginner training guide</a>
              {' '}or{' '}
              <a href="/training" className="text-primary hover:underline">intermediate training guide</a>
            </div>
          </div>
        ) : (
          <WorkoutForm onClose={() => setShowWorkoutForm(false)} userId={user.id} />
        )}
      </motion.section>

      {/* Rank Progress */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="p-8 bg-card border border-border rounded-2xl"
      >
        <h2 className="text-2xl font-bold mb-6">Rank Progress</h2>
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <span className="font-medium">{stats.rank || 'Bronze I'}</span>
            <span className="text-foreground/60">{stats.xp || 0} / 1000 XP</span>
          </div>
          <div className="h-3 bg-background rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500" 
              style={{ width: `${Math.min(((stats.xp || 0) % 1000) / 10, 100)}%` }} 
            />
          </div>
        </div>
        <p className="text-sm text-foreground/60">
          Complete workouts and achieve skills to earn XP and rank up!
        </p>
      </motion.section>
    </div>
  );
}

function WorkoutForm({ onClose, userId }: { onClose: () => void; userId: string }) {
  const [workoutData, setWorkoutData] = useState({
    date: new Date().toISOString().split('T')[0],
    category: 'push'
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Log New Workout</h3>
        <button onClick={onClose} className="text-foreground/60 hover:text-foreground">
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Date</label>
          <input
            type="date"
            value={workoutData.date}
            onChange={(e) => setWorkoutData({...workoutData, date: e.target.value})}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <select
            value={workoutData.category}
            onChange={(e) => setWorkoutData({...workoutData, category: e.target.value})}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none"
          >
            <option value="push">Push</option>
            <option value="pull">Pull</option>
            <option value="legs">Legs</option>
            <option value="core">Core</option>
            <option value="full-body">Full Body</option>
          </select>
        </div>
      </div>

      {/* Exercise Sections */}
      <ExerciseSection title="Warm-up" subtitle="Examples: shoulder rotations, scapular pulls" maxExercises={2} />
      <ExerciseSection title="Main Skill" subtitle="e.g., planche attempts, handstand practice" maxExercises={2} />
      <ExerciseSection title="Secondary" subtitle="e.g., planche leans, tuck planche holds" maxExercises={3} />
      <ExerciseSection title="Volume / Accessory" subtitle="Examples: push-ups, tricep extensions, core work" maxExercises={3} />

      <div className="flex gap-3 pt-4">
        <button
          onClick={onClose}
          className="flex-1 px-6 py-3 border border-border hover:border-primary rounded-lg transition-all"
        >
          Cancel
        </button>
        <button className="flex-1 px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg transition-all font-medium flex items-center justify-center gap-2">
          <Save className="w-5 h-5" />
          Save Workout
        </button>
      </div>

      <p className="text-sm text-foreground/60 text-center">
        Not sure how to structure your workout? Check out the{' '}
        <a href="/training" className="text-primary hover:underline">beginner guide</a>
        {' '}or{' '}
        <a href="/training" className="text-primary hover:underline">intermediate guide</a>
      </p>
    </div>
  );
}

function ExerciseSection({ title, subtitle, maxExercises }: { title: string; subtitle: string; maxExercises: number }) {
  const [exercises, setExercises] = useState([{ name: '', sets: '', reps: '', notes: '' }]);

  const addExercise = () => {
    if (exercises.length < maxExercises) {
      setExercises([...exercises, { name: '', sets: '', reps: '', notes: '' }]);
    }
  };

  return (
    <div className="p-4 bg-background border border-border rounded-lg">
      <div className="mb-3">
        <h4 className="font-bold">{title}</h4>
        <p className="text-sm text-foreground/60">{subtitle}</p>
        <p className="text-xs text-foreground/50">Maximum {maxExercises}</p>
      </div>
      <div className="space-y-3">
        {exercises.map((ex, index) => (
          <div key={index} className="grid grid-cols-12 gap-2">
            <input
              type="text"
              placeholder="Exercise name"
              className="col-span-12 md:col-span-4 px-3 py-2 border border-border rounded-lg bg-card text-sm"
            />
            <input
              type="number"
              placeholder="Sets"
              className="col-span-4 md:col-span-2 px-3 py-2 border border-border rounded-lg bg-card text-sm"
            />
            <input
              type="text"
              placeholder="Reps / Hold (s)"
              className="col-span-4 md:col-span-3 px-3 py-2 border border-border rounded-lg bg-card text-sm"
            />
            <input
              type="text"
              placeholder="Notes (optional)"
              className="col-span-4 md:col-span-3 px-3 py-2 border border-border rounded-lg bg-card text-sm"
            />
          </div>
        ))}
      </div>
      {exercises.length < maxExercises && (
        <button
          onClick={addExercise}
          className="mt-3 text-sm text-primary hover:underline"
        >
          + Add Exercise
        </button>
      )}
    </div>
  );
}
