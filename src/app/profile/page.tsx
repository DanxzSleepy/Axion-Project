'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getCurrentUser, getProfile, getUserStats } from '@/lib/auth';
import { updateProfile, toggleFavoriteExercise, calculateLevel, calculateRank, getNextRank, getProgressToNextLevel, RANK_TIERS } from '@/lib/xp-system';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Flame, Trophy, Calendar, Edit2, Save, X, Camera, Heart, 
  BookMarked, Share2, Settings, LogIn, Star, TrendingUp, Target
} from 'lucide-react';

export default function EnhancedProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [editForm, setEditForm] = useState({
    display_name: '',
    nickname: '',
    bio: ''
  });
  const [saving, setSaving] = useState(false);

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
        setEditForm({
          display_name: profileData?.display_name || '',
          nickname: profileData?.nickname || '',
          bio: profileData?.bio || ''
        });
      } catch (error) {
        console.error('Error loading user data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, [router]);

  const handleSaveProfile = async () => {
    if (!user) return;
    
    setSaving(true);
    try {
      const updated = await updateProfile(user.id, editForm);
      setProfile(updated);
      setEditMode(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile');
    } finally {
      setSaving(false);
    }
  };

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
          <Link href="/login" className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg transition-all font-medium inline-block">
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  const currentXP = stats.xp || 0;
  const currentLevel = calculateLevel(currentXP);
  const currentRank = calculateRank(currentXP);
  const nextRank = getNextRank(currentXP);
  const levelProgress = getProgressToNextLevel(currentXP);
  const rankTier = RANK_TIERS.find(r => r.tier === currentRank);

  // Safe display name with fallback
  const getDisplayName = () => {
    if (editMode) {
      return editForm.display_name || 'Your Name';
    }
    return profile?.display_name || profile?.username || user.email?.split('@')[0] || 'User';
  };

  const displayName = getDisplayName();
  const avatarLetter = displayName && displayName.length > 0 ? displayName[0].toUpperCase() : '?';

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl space-y-8">
      {/* Profile Header with Edit */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl"
      >
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Avatar */}
          <div className="relative group">
            <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center text-5xl font-bold text-primary">
              {profile?.avatar_url ? (
                <img src={profile.avatar_url} alt="Avatar" className="w-full h-full rounded-full object-cover" />
              ) : (
                avatarLetter
              )}
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* User Info */}
          <div className="flex-1">
            {editMode ? (
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-foreground/60">Display Name</label>
                  <input
                    type="text"
                    value={editForm.display_name}
                    onChange={(e) => setEditForm({ ...editForm, display_name: e.target.value })}
                    className="w-full p-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm text-foreground/60">Nickname</label>
                  <input
                    type="text"
                    value={editForm.nickname}
                    onChange={(e) => setEditForm({ ...editForm, nickname: e.target.value })}
                    className="w-full p-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm text-foreground/60">Bio</label>
                  <textarea
                    value={editForm.bio}
                    onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                    rows={3}
                    className="w-full p-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none resize-none"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={handleSaveProfile}
                    disabled={saving}
                    className="px-6 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg transition-all flex items-center gap-2 disabled:opacity-50"
                  >
                    <Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Save'}
                  </button>
                  <button
                    onClick={() => setEditMode(false)}
                    className="px-6 py-2 border border-border hover:border-primary rounded-lg transition-all flex items-center gap-2"
                  >
                    <X className="w-4 h-4" /> Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold">{displayName}</h1>
                  <button
                    onClick={() => setEditMode(true)}
                    className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                  >
                    <Edit2 className="w-4 h-4 text-foreground/60" />
                  </button>
                </div>
                {profile?.nickname && (
                  <p className="text-foreground/60 mb-2">@{profile.nickname}</p>
                )}
                {profile?.bio && (
                  <p className="text-foreground/70 mb-4 max-w-2xl">{profile.bio}</p>
                )}
                
                <div className="flex flex-wrap gap-4">
                  {/* Rank Badge */}
                  <div className="px-4 py-2 bg-card rounded-lg">
                    <div className="text-sm text-foreground/60">Rank</div>
                    <div className={`font-bold text-2xl bg-gradient-to-r ${rankTier?.color} bg-clip-text text-transparent`}>
                      {currentRank}
                    </div>
                  </div>
                  
                  {/* Level */}
                  <div className="px-4 py-2 bg-card rounded-lg">
                    <div className="text-sm text-foreground/60">Level</div>
                    <div className="font-bold text-2xl text-primary">{currentLevel}</div>
                  </div>
                  
                  {/* XP */}
                  <div className="px-4 py-2 bg-card rounded-lg">
                    <div className="text-sm text-foreground/60">XP</div>
                    <div className="font-bold text-2xl">{currentXP.toLocaleString()}</div>
                  </div>

                  {/* Streak */}
                  <div className="px-4 py-2 bg-card rounded-lg">
                    <div className="text-sm text-foreground/60">Streak</div>
                    <div className="font-bold text-2xl flex items-center gap-1">
                      <Flame className="w-5 h-5 text-orange-500" />
                      {stats.current_streak || 0}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* XP Progress Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="p-6 bg-card border border-border rounded-xl"
      >
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold">Progress to Next Level</h3>
          <span className="text-sm text-foreground/60">
            {levelProgress.current}/{levelProgress.needed} XP
          </span>
        </div>
        <div className="w-full h-4 bg-background rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${levelProgress.percentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-primary to-secondary"
          />
        </div>
        {nextRank && (
          <p className="text-sm text-foreground/60 mt-2">
            {nextRank.xpNeeded.toLocaleString()} XP needed for <span className={`font-bold bg-gradient-to-r ${nextRank.color} bg-clip-text text-transparent`}>{nextRank.tier} - {nextRank.label}</span>
          </p>
        )}
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <div className="p-6 bg-card border border-border rounded-xl">
          <Calendar className="w-8 h-8 text-primary mb-3" />
          <div className="text-3xl font-bold mb-1">{stats.total_workouts || 0}</div>
          <div className="text-sm text-foreground/60">Total Workouts</div>
        </div>

        <div className="p-6 bg-card border border-border rounded-xl">
          <Flame className="w-8 h-8 text-orange-500 mb-3" />
          <div className="text-3xl font-bold mb-1">{stats.longest_streak || 0}</div>
          <div className="text-sm text-foreground/60">Longest Streak</div>
        </div>

        <div className="p-6 bg-card border border-border rounded-xl">
          <TrendingUp className="w-8 h-8 text-success mb-3" />
          <div className="text-3xl font-bold mb-1">{stats.consistency_percentage?.toFixed(1) || 0}%</div>
          <div className="text-sm text-foreground/60">Consistency</div>
        </div>

        <div className="p-6 bg-card border border-border rounded-xl">
          <Trophy className="w-8 h-8 text-accent mb-3" />
          <div className="text-3xl font-bold mb-1">{stats.skills_unlocked || 0}</div>
          <div className="text-sm text-foreground/60">Skills Unlocked</div>
        </div>
      </motion.div>

      {/* Favorite Exercises & Saved Guides */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Favorite Exercises */}
        <div className="p-6 bg-card border border-border rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold">Favorite Exercises</h3>
          </div>
          {profile?.favorite_exercises && profile.favorite_exercises.length > 0 ? (
            <div className="space-y-2">
              {profile.favorite_exercises.map((exercise: string, index: number) => (
                <div key={index} className="p-3 bg-background rounded-lg flex items-center justify-between">
                  <span className="text-foreground/80">{exercise}</span>
                  <Star className="w-4 h-4 text-accent fill-accent" />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-foreground/60">
              <Heart className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>No favorite exercises yet</p>
              <Link href="/tutorials" className="text-primary hover:underline text-sm mt-2 inline-block">
                Browse exercises →
              </Link>
            </div>
          )}
        </div>

        {/* Saved Guides */}
        <div className="p-6 bg-card border border-border rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <BookMarked className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold">Saved Guides</h3>
          </div>
          {profile?.saved_guides && profile.saved_guides.length > 0 ? (
            <div className="space-y-2">
              {profile.saved_guides.map((guide: string, index: number) => (
                <Link
                  key={index}
                  href={`/training/${guide}`}
                  className="p-3 bg-background rounded-lg flex items-center justify-between hover:border-primary transition-colors block"
                >
                  <span className="text-foreground/80">{guide}</span>
                  <BookMarked className="w-4 h-4 text-primary" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-foreground/60">
              <BookMarked className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>No saved guides yet</p>
              <Link href="/training" className="text-primary hover:underline text-sm mt-2 inline-block">
                Browse guides →
              </Link>
            </div>
          )}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-6 bg-card border border-border rounded-xl"
      >
        <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/training"
            className="p-4 bg-background border border-border rounded-lg hover:border-primary transition-all text-center"
          >
            <Target className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="font-medium">Start Training</div>
          </Link>
          
          <Link
            href="/tutorials"
            className="p-4 bg-background border border-border rounded-lg hover:border-primary transition-all text-center"
          >
            <BookMarked className="w-8 h-8 text-secondary mx-auto mb-2" />
            <div className="font-medium">Browse Exercises</div>
          </Link>
          
          <Link
            href="/skill-tree"
            className="p-4 bg-background border border-border rounded-lg hover:border-primary transition-all text-center"
          >
            <Trophy className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="font-medium">View Skill Tree</div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
