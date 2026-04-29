'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getUserLeaderboard, updateProfile } from '@/lib/xp-system';
import { getCurrentUser, getProfile } from '@/lib/auth';
import { useLanguage } from '@/contexts/LanguageContext';
import { Trophy, Users, Star, TrendingUp, Flame, Loader2, UserPlus, Globe } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

export default function CommunityPage() {
  const { t } = useLanguage();
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [joining, setJoining] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getCurrentUser();
        setCurrentUser(user);

        // Fetch leaderboard separately to prevent one failure from blocking everything
        try {
          const leaderboardData = await getUserLeaderboard(20);
          setLeaderboard(leaderboardData || []);
        } catch (err) {
          console.warn('Leaderboard could not be loaded:', err);
          setLeaderboard([]);
        }

        if (user) {
          try {
            const profileData = await getProfile(user.id);
            setProfile(profileData);
          } catch (err) {
            console.warn('User profile could not be loaded:', err);
          }
        }
      } catch (error) {
        console.error('Critical error fetching community data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleJoinCommunity = async () => {
    if (!currentUser) return;
    setJoining(true);
    try {
      const updated = await updateProfile(currentUser.id, { is_public: true });
      setProfile(updated);
      // Refresh leaderboard
      const leaderboardData = await getUserLeaderboard(20);
      setLeaderboard(leaderboardData);
      toast.success(t.common.success);
    } catch (error: any) {
      console.error('Error joining community:', error);
      toast.error(error.message || 'Failed to join community');
    } finally {
      setJoining(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {t.community.title}
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          {t.community.subtitle}
        </p>
      </motion.div>

      {/* Join Community CTA */}
      {!loading && currentUser && (!profile?.is_public) && (
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-2xl text-center"
        >
          <UserPlus className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">{t.community.joinTitle}</h2>
          <p className="text-foreground/70 mb-6 max-w-lg mx-auto">
            {t.community.joinDesc}
          </p>
          <button
            onClick={handleJoinCommunity}
            disabled={joining}
            className="px-8 py-3 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold transition-all transform hover:scale-105 disabled:opacity-50 flex items-center gap-2 mx-auto"
          >
            {joining ? <Loader2 className="w-5 h-5 animate-spin" /> : <Globe className="w-5 h-5" />}
            {t.community.joinButton}
          </button>
        </motion.section>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Leaderboard */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-500" />
              {t.community.leaderboard}
            </h2>
          </div>

          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            {loading ? (
              <div className="p-12 text-center">
                <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
                <p className="text-foreground/60">{t.common.loading}</p>
              </div>
            ) : leaderboard.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-muted/50 text-foreground/60 text-sm uppercase">
                      <th className="px-6 py-4 font-bold">{t.community.rank}</th>
                      <th className="px-6 py-4 font-bold">{t.community.athlete}</th>
                      <th className="px-6 py-4 font-bold text-center">{t.community.level}</th>
                      <th className="px-6 py-4 font-bold text-right">{t.community.xp}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {leaderboard.map((athlete, index) => (
                      <tr 
                        key={athlete.id}
                        className={`hover:bg-primary/5 transition-colors ${athlete.id === currentUser?.id ? 'bg-primary/10' : ''}`}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            {index === 0 && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />}
                            <span className={`font-bold ${index < 3 ? 'text-lg text-primary' : 'text-foreground/60'}`}>
                              #{index + 1}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold overflow-hidden border border-border">
                              {athlete.avatar_url ? (
                                <img src={athlete.avatar_url} alt={athlete.display_name} className="w-full h-full object-cover" />
                              ) : (
                                (athlete.display_name?.[0] || '?').toUpperCase()
                              )}
                            </div>
                            <div>
                              <div className="font-bold">{athlete.display_name}</div>
                              <div className="text-xs text-foreground/50">@{athlete.nickname}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm font-bold">
                            Lvl {athlete.level}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="font-bold text-primary">{athlete.xp.toLocaleString()}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-12 text-center text-foreground/50">
                <Users className="w-12 h-12 mx-auto mb-4 opacity-20" />
                <p>No athletes have joined the leaderboard yet.</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar / Extra Info */}
        <div className="space-y-8">
          {/* Top 3 Stats */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="p-6 bg-card border border-border rounded-2xl"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-success" />
              {t.community.topAthletes}
            </h3>
            <div className="space-y-4">
              {leaderboard.slice(0, 3).map((athlete, index) => (
                <div key={athlete.id} className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl border border-border/50">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    index === 0 ? 'bg-yellow-500 text-black' : 
                    index === 1 ? 'bg-gray-300 text-black' : 
                    'bg-amber-600 text-white'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold truncate">{athlete.display_name}</div>
                    <div className="text-xs text-foreground/50">{athlete.xp.toLocaleString()} XP</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Activity Feed Placeholder */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.1 }}
            className="p-6 bg-card border border-border rounded-2xl"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-500" />
              {t.community.recentActivity}
            </h3>
            <div className="space-y-4 text-sm text-foreground/60">
              <p className="italic text-center py-4">Activity feed coming soon!</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
