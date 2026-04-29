'use client';

import { motion } from 'framer-motion';
import { Lock, CheckCircle, Circle, TreePine, TrendingUp, Target, Loader2 } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { getCurrentUser, getSkillProgress } from '@/lib/auth';
import { useLanguage } from '@/contexts/LanguageContext';
import { unlockSkill } from '@/lib/xp-system';
import { getSkillPaths } from '@/lib/skills-data';
import { toast } from 'sonner';

export default function SkillTreePage() {
  const { t } = useLanguage();
  const [user, setUser] = useState<any>(null);
  const [progress, setProgress] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [unlockingSkill, setUnlockingSkill] = useState<string | null>(null);

  const skillPaths = useMemo(() => getSkillPaths(t), [t]);

  useEffect(() => {
    const fetchData = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
      if (currentUser) {
        const skillProgress = await getSkillProgress(currentUser.id);
        setProgress(skillProgress);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const getSkillStatus = (
    skillId: string
  ): 'locked' | 'available' | 'completed' => {
    // Find skill in progress data
    const userSkill = progress.find(p => p.skill_name === skillId || p.skill_id === skillId);

    if (userSkill && userSkill.status === 'completed') {
      return 'completed';
    }

    // Find skill definition to check prerequisites
    let currentSkill: any = null;
    for (const path of skillPaths) {
      currentSkill = path.skills.find(s => s.id === skillId);
      if (currentSkill) break;
    }

    if (!currentSkill) return 'locked';

    // If no prerequisite, it's available
    if (!currentSkill.prerequisiteId || currentSkill.requirement === 'None') {
      return 'available';
    }

    // Check if prerequisite is completed
    const prereqStatus = getSkillStatus(currentSkill.prerequisiteId);
    return prereqStatus === 'completed' ? 'available' : 'locked';
  };

  const handleUnlockSkill = async (skill: any) => {
    if (!user) {
      toast.error(t.skillTree.signInToTrack);
      return;
    }

    const status = getSkillStatus(skill.id);
    if (status === 'locked') {
      toast.error(t.skillTree.prerequisiteNotMet);
      return;
    }

    if (status === 'completed') return;

    setUnlockingSkill(skill.id);
    try {
      await unlockSkill(user.id, skill.name, skill.xpReward);
      
      // Refresh progress
      const updatedProgress = await getSkillProgress(user.id);
      setProgress(updatedProgress);
      
      toast.success(t.skillTree.unlockSuccess, {
        description: `+${skill.xpReward} XP`
      });
    } catch (error) {
      console.error('Error unlocking skill:', error);
      toast.error(t.skillTree.unlockError);
    } finally {
      setUnlockingSkill(null);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-success" />;
      case 'available':
      case 'in-progress':
        return <Circle className="w-5 h-5 text-primary" />;
      case 'locked':
        return <Lock className="w-5 h-5 text-foreground/30" />;
      default:
        return <Circle className="w-5 h-5 text-foreground/30" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-success/50 bg-success/5';
      case 'available':
      case 'in-progress':
        return 'border-primary/50 bg-primary/5 hover:border-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]';
      case 'locked':
        return 'border-border bg-card/50 opacity-60 grayscale';
      default:
        return 'border-border bg-card';
    }
  };

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
      </div>
    );
  }

  const completedSkillsCount = progress.filter(p => p.status === 'completed').length;
  const availableSkillsCount = skillPaths.reduce((acc, path) => {
    return acc + path.skills.filter(s => getSkillStatus(s.id) === 'available').length;
  }, 0);
  const totalSkills = skillPaths.reduce((acc, path) => acc + path.skills.length, 0);
  const completionPercentage = totalSkills > 0 ? Math.round((completedSkillsCount / totalSkills) * 100) : 0;

  return (
    <div className="container mx-auto px-4 py-12 space-y-16 max-w-7xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          {t.skillTree.title}
        </h1>
        <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
          {t.skillTree.subtitle}
        </p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          whileHover={{ y: -5 }}
          className="p-6 bg-card border border-border rounded-2xl flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center text-success">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold">{completedSkillsCount}/{totalSkills}</div>
            <div className="text-sm text-foreground/60">{t.skillTree.skillsCompleted}</div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="p-6 bg-card border border-border rounded-2xl flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold">{availableSkillsCount}</div>
            <div className="text-sm text-foreground/60">{t.skillTree.available}</div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="p-6 bg-card border border-border rounded-2xl flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold">{completionPercentage}%</div>
            <div className="text-sm text-foreground/60">{t.skillTree.overallCompletion}</div>
          </div>
        </motion.div>
      </div>

      {/* Skill Paths */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
        {skillPaths.map((path, pathIndex) => (
          <motion.section
            key={pathIndex}
            initial={{ opacity: 0, x: pathIndex % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl p-3 bg-card border border-border rounded-2xl shadow-lg">{path.icon}</span>
              <h2 className="text-3xl font-bold">{path.name}</h2>
            </div>

            <div className="relative pl-8">
              {/* Connection Line */}
              <div className="absolute left-4 top-4 bottom-4 w-1 bg-gradient-to-b from-primary via-secondary to-border rounded-full opacity-30" />

              <div className="space-y-6">
                {path.skills.map((skill, skillIndex) => {
                  const status = getSkillStatus(skill.id);
                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 }}
                      className={`relative group p-6 border-2 rounded-2xl transition-all duration-300 ${getStatusColor(status)}`}
                    >
                      {/* Node Dot */}
                      <div className={`absolute -left-[22px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 bg-background z-10 transition-colors ${status === 'completed' ? 'border-success bg-success' :
                          status === 'available' ? 'border-primary bg-primary animate-pulse' :
                            'border-border'
                        }`} />

                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-lg ${status === 'completed' ? 'bg-success/10' :
                              status === 'available' ? 'bg-primary/10' :
                                'bg-muted'
                            }`}>
                            {getStatusIcon(status)}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{skill.name}</h3>
                            <p className="text-sm text-foreground/50">
                              <span className="font-medium">{t.profile.rank}:</span> {skill.requirement}
                            </p>
                          </div>
                        </div>

                        {status === 'available' && (
                          <button 
                            onClick={() => handleUnlockSkill(skill)}
                            disabled={unlockingSkill === skill.id}
                            className="px-5 py-2 bg-primary hover:bg-primary-hover text-white rounded-xl text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                          >
                            {unlockingSkill === skill.id ? (
                              <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                {t.common.loading}
                              </>
                            ) : (
                              t.skillTree.startTraining
                            )}
                          </button>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {!user && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center p-12 bg-card/50 border border-border rounded-3xl backdrop-blur-sm"
        >
          <Lock className="w-12 h-12 mx-auto mb-4 text-foreground/20" />
          <p className="text-xl text-foreground/70">{t.skillTree.signInToTrack}</p>
        </motion.div>
      )}
    </div>
  );
}
