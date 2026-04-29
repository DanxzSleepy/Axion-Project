'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Bot, BookOpen, Dumbbell, Heart, Brain, Scale, Clock, Target, Flame } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TrainingPage() {
  const { t } = useLanguage();
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const guides = [
    {
      category: t.training.categories.fundamentals,
      icon: <Dumbbell className="w-6 h-6" />,
      items: [
        { id: 'calisthenics-fundamentals', label: t.training.items['calisthenics-fundamentals'] },
        { id: 'progressive-overload', label: t.training.items['progressive-overload'] },
        { id: 'gymnastics-vs-calisthenics', label: t.training.items['gymnastics-vs-calisthenics'] },
        { id: 'full-body-vs-split', label: t.training.items['full-body-vs-split'] },
        { id: 'rest-and-recovery', label: t.training.items['rest-and-recovery'] },
        { id: 'conditioning-and-activation', label: t.training.items['conditioning-and-activation'] }
      ]
    },
    {
      category: t.training.categories.skillPaths,
      icon: <Target className="w-6 h-6" />,
      items: [
        { id: 'push-skill-path', label: t.training.items['push-skill-path'] },
        { id: 'pull-skill-path', label: t.training.items['pull-skill-path'] },
        { id: 'legs-skill-path', label: t.training.items['legs-skill-path'] }
      ]
    },
    {
      category: t.training.categories.training101,
      icon: <BookOpen className="w-6 h-6" />,
      items: [
        { id: 'beginner-workout-structure', label: t.training.items['beginner-workout-structure'] },
        { id: 'intermediate-workout-structure', label: t.training.items['intermediate-workout-structure'] },
        { id: 'strengthening-your-core', label: t.training.items['strengthening-your-core'] },
        { id: 'leg-training', label: t.training.items['leg-training'] }
      ]
    },
    {
      category: t.training.categories.skillGuides,
      icon: <Flame className="w-6 h-6" />,
      items: [
        { id: 'handstand-guide', label: t.training.items['handstand-guide'] },
        { id: 'planche-guide', label: t.training.items['planche-guide'] },
        { id: 'front-lever-guide', label: t.training.items['front-lever-guide'] }
      ]
    },
    {
      category: t.training.categories.nutrition,
      icon: <Heart className="w-6 h-6" />,
      items: [
        { id: 'general-nutrition', label: t.training.items['general-nutrition'] },
        { id: 'mass-gain-vs-definition', label: t.training.items['mass-gain-vs-definition'] }
      ]
    },
    {
      category: t.training.categories.miscellaneous,
      icon: <Brain className="w-6 h-6" />,
      items: [
        { id: 'overcoming-plateaus', label: t.training.items['overcoming-plateaus'] },
        { id: 'setting-realistic-goals', label: t.training.items['setting-realistic-goals'] }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {t.training.title}
        </h1>
        <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
          {t.training.subtitle}
        </p>
      </motion.div>

      {/* AI Training Interface - Placeholder */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl"
      >
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
            <Bot className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-2">{t.training.aiTitle}</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            {t.training.aiDesc}
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 mb-6">
          <p className="text-warning text-center mb-4">
            ⚠️ {t.training.aiWarning}
          </p>
          <p className="text-foreground/60 text-sm text-center">
            {t.training.aiInstructions}
          </p>
        </div>

        <div className="flex justify-center">
          <button className="px-8 py-4 bg-primary/50 cursor-not-allowed text-white/50 rounded-lg font-medium" disabled>
            {t.training.aiComingSoon}
          </button>
        </div>
      </motion.section>

      {/* Manual Training Guides */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.training.manualGuides}</h2>
          <p className="text-foreground/70">
            {t.training.manualGuidesDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-200"
            >
              <div className="text-primary mb-4">{guide.icon}</div>
              <h3 className="text-xl font-bold mb-4">{guide.category}</h3>
              <ul className="space-y-2">
                {guide.items.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={`/training/${item.id}`}
                      className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Quick Tips */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 bg-card border border-border rounded-2xl"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">{t.training.quickTips}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">{t.training.restBetweenSets}</h4>
                <p className="text-foreground/70 text-sm">{t.training.restBetweenSetsDesc}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">{t.training.progressiveOverload}</h4>
                <p className="text-foreground/70 text-sm">{t.training.progressiveOverloadDesc}</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Scale className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">{t.training.consistencyOverIntensity}</h4>
                <p className="text-foreground/70 text-sm">{t.training.consistencyOverIntensityDesc}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Brain className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">{t.training.listenToBody}</h4>
                <p className="text-foreground/70 text-sm">{t.training.listenToBodyDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
