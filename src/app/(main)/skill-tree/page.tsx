'use client';

import { motion } from 'framer-motion';
import { Lock, CheckCircle, Circle, TreePine, TrendingUp, Target } from 'lucide-react';

export default function SkillTreePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const skillPaths = [
    {
      name: 'Push Path',
      icon: '💪',
      skills: [
        { name: 'Push-up', status: 'available', requirement: 'None' },
        { name: 'Diamond Push-up', status: 'available', requirement: '10 Push-ups' },
        { name: 'Pike Push-up', status: 'locked', requirement: '20 Push-ups' },
        { name: 'Handstand', status: 'locked', requirement: '15 Pike Push-ups' },
        { name: 'Handstand Push-up', status: 'locked', requirement: '30s Handstand Hold' },
        { name: 'Planche Lean', status: 'locked', requirement: '10 Handstand Push-ups' },
        { name: 'Tuck Planche', status: 'locked', requirement: '30s Planche Lean' },
        { name: 'Full Planche', status: 'locked', requirement: '10s Tuck Planche' }
      ]
    },
    {
      name: 'Pull Path',
      icon: '🏋️',
      skills: [
        { name: 'Australian Pull-up', status: 'available', requirement: 'None' },
        { name: 'Pull-up', status: 'locked', requirement: '15 Australian Pull-ups' },
        { name: 'Chin-up', status: 'locked', requirement: '10 Pull-ups' },
        { name: 'Muscle-up', status: 'locked', requirement: '15 Pull-ups + 10 Dips' },
        { name: 'Front Lever Tuck', status: 'locked', requirement: '20 Pull-ups' },
        { name: 'Advanced Front Lever', status: 'locked', requirement: '15s Front Lever Tuck' },
        { name: 'Full Front Lever', status: 'locked', requirement: '10s Adv. Front Lever' },
        { name: 'One-Arm Pull-up', status: 'locked', requirement: '20 Pull-ups' }
      ]
    },
    {
      name: 'Core & Static Path',
      icon: '🎯',
      skills: [
        { name: 'Plank', status: 'available', requirement: 'None' },
        { name: 'L-Sit Progression', status: 'available', requirement: '30s Plank' },
        { name: 'Tuck L-Sit', status: 'locked', requirement: '15s L-Sit Progression' },
        { name: 'Full L-Sit', status: 'locked', requirement: '10s Tuck L-Sit' },
        { name: 'V-Sit', status: 'locked', requirement: '15s Full L-Sit' },
        { name: 'Manna', status: 'locked', requirement: '10s V-Sit' }
      ]
    },
    {
      name: 'Legs Path',
      icon: '🦵',
      skills: [
        { name: 'Squat', status: 'available', requirement: 'None' },
        { name: 'Jump Squat', status: 'available', requirement: '20 Squats' },
        { name: 'Pistol Squat Progression', status: 'locked', requirement: '30 Squats' },
        { name: 'Assisted Pistol Squat', status: 'locked', requirement: '15 Jump Squats' },
        { name: 'Pistol Squat', status: 'locked', requirement: '10 Assisted Pistol Squats (each leg)' },
        { name: 'Shrimp Squat', status: 'locked', requirement: '10 Pistol Squats (each leg)' }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-success" />;
      case 'available':
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
        return 'border-primary/50 bg-primary/5 hover:border-primary';
      case 'locked':
        return 'border-border bg-card/50 opacity-60';
      default:
        return 'border-border bg-card';
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Skill Tree
        </h1>
        <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
          Track your calisthenics progression through interactive skill paths. Complete prerequisites to unlock new skills.
        </p>
      </motion.div>

      {/* Info Box */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-6 bg-card border border-border rounded-xl"
      >
        <div className="flex items-start gap-4">
          <TreePine className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold mb-2">How the Skill Tree Works</h3>
            <p className="text-foreground/70 mb-4">
              The skill tree shows your progression path in calisthenics. Each skill has prerequisites that must be completed 
              before you can attempt the next level. As you log workouts and achieve milestones, skills will unlock automatically.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <Circle className="w-4 h-4 text-primary" />
                <span>Available to Train</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-foreground/30" />
                <span>Locked - Complete Prerequisites</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skill Paths */}
      <div className="space-y-12">
        {skillPaths.map((path, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{path.icon}</span>
              <h2 className="text-3xl font-bold">{path.name}</h2>
            </div>

            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-border" />

              {/* Skills */}
              <div className="space-y-4">
                {path.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    className={`relative p-4 border rounded-lg transition-all duration-200 ml-12 ${getStatusColor(skill.status)}`}
                  >
                    {/* Connection Dot */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary" />

                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        {getStatusIcon(skill.status)}
                        <div>
                          <h3 className="text-lg font-bold mb-1">{skill.name}</h3>
                          <p className="text-sm text-foreground/60">
                            <span className="font-medium">Requirement:</span> {skill.requirement}
                          </p>
                        </div>
                      </div>
                      {skill.status === 'available' && (
                        <button className="px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg transition-all text-sm font-medium">
                          Start Training
                        </button>
                      )}
                      {skill.status === 'completed' && (
                        <div className="px-4 py-2 bg-success/10 text-success rounded-lg text-sm font-medium">
                          Completed ✓
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Your Progress Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-card rounded-xl">
            <Target className="w-12 h-12 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold mb-1">0/28</div>
            <div className="text-foreground/70">Skills Completed</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl">
            <TrendingUp className="w-12 h-12 text-secondary mx-auto mb-3" />
            <div className="text-3xl font-bold mb-1">4</div>
            <div className="text-foreground/70">Skills Available</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl">
            <TreePine className="w-12 h-12 text-accent mx-auto mb-3" />
            <div className="text-3xl font-bold mb-1">0%</div>
            <div className="text-foreground/70">Overall Completion</div>
          </div>
        </div>
        <p className="text-center text-foreground/60 mt-6 text-sm">
          Sign in to track your progress and unlock skills
        </p>
      </motion.section>
    </div>
  );
}
