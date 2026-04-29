'use client';

import { motion } from 'framer-motion';
import { Lock, CheckCircle, Circle, TreePine, TrendingUp, Target, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getCurrentUser, getSkillProgress } from '@/lib/auth';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SkillTreePage() {
  const { t } = useLanguage();
  const [user, setUser] = useState<any>(null);
  const [progress, setProgress] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const skillPaths = [
    {
      name: t.skillTree.pushPath,
      icon: '💪',
      skills: [
        { name: 'Push-up', requirement: 'None' },
        { name: 'Diamond Push-up', requirement: '10 Push-ups' },
        { name: 'Pike Push-up', requirement: '20 Push-ups' },
        { name: 'Handstand', requirement: '15 Pike Push-ups' },
        { name: 'Handstand Push-up', requirement: '30s Handstand Hold' },
        { name: 'Planche Lean', requirement: '10 Handstand Push-ups' },
        { name: 'Tuck Planche', requirement: '30s Planche Lean' },
        { name: 'Full Planche', requirement: '10s Tuck Planche' }
      ]
    },
    {
      name: t.skillTree.pullPath,
      icon: '🏋️',
      skills: [
        { name: 'Australian Pull-up', requirement: 'None' },
        { name: 'Pull-up', requirement: '15 Australian Pull-ups' },
        { name: 'Chin-up', requirement: '10 Pull-ups' },
        { name: 'Muscle-up', requirement: '15 Pull-ups + 10 Dips' },
        { name: 'Front Lever Tuck', requirement: '20 Pull-ups' },
        { name: 'Advanced Front Lever', requirement: '15s Front Lever Tuck' },
        { name: 'Full Front Lever', requirement: '10s Adv. Front Lever' },
        { name: 'One-Arm Pull-up', requirement: '20 Pull-ups' }
      ]
    },
    {
      name: t.skillTree.corePath,
      icon: '🎯',
      skills: [
        { name: 'Plank', requirement: 'None' },
        { name: 'L-Sit Progression', requirement: '30s Plank' },
        { name: 'Tuck L-Sit', requirement: '15s L-Sit Progression' },
        { name: 'Full L-Sit', requirement: '10s Tuck L-Sit' },
        { name: 'V-Sit', requirement: '15s Full L-Sit' },
        { name: 'Manna', requirement: '10s V-Sit' }
      ]
    },
    {
      name: t.skillTree.legsPath,
      icon: '🦵',
      skills: [
        { name: 'Squat', requirement: 'None' },
        { name: 'Jump Squat', requirement: '20 Squats' },
        { name: 'Pistol Squat Progression', requirement: '30 Squats' },
        { name: 'Assisted Pistol Squat', requirement: '15 Jump Squats' },
        { name: 'Pistol Squat', requirement: '10 Assisted Pistol Squats (each leg)' },
        { name: 'Shrimp Squat', requirement: '10 Pistol Squats (each leg)' }
      ]
    }
  ];

  const getSkillStatus = (skillName: string) => {
    const userSkill = progress.find(p => p.skill_name === skillName);
    if (userSkill) return userSkill.status;
    
    // Default logic if no progress record exists
    // Find path and index
    for (const path of skillPaths) {
      const index = path.skills.findIndex(s => s.name === skillName);
      if (index !== -1) {
        if (index === 0) return 'available';
        const prevSkill = path.skills[index - 1];
        const prevStatus = getSkillStatus(prevSkill.name);
        return prevStatus === 'completed' ? 'available' : 'locked';
      }
    }
    return 'locked';
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
    return acc + path.skills.filter(s => getSkillStatus(s.name) === 'available').length;
  }, 0);
  const totalSkills = skillPaths.reduce((acc, path) => acc + path.skills.length, 0);
  const completionPercentage = Math.round((completedSkillsCount / totalSkills) * 100);

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
                  const status = getSkillStatus(skill.name);
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
                      <div className={`absolute -left-[22px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 bg-background z-10 transition-colors ${
                        status === 'completed' ? 'border-success bg-success' : 
                        status === 'available' ? 'border-primary bg-primary animate-pulse' : 
                        'border-border'
                      }`} />

                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-lg ${
                            status === 'completed' ? 'bg-success/10' : 
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
                          <button className="px-5 py-2 bg-primary hover:bg-primary-hover text-white rounded-xl text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
                            {t.skillTree.startTraining}
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
