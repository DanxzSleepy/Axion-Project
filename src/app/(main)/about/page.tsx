'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Dumbbell, Target, Heart, Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {t.about.title}
        </h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          {t.about.subtitle}
        </p>
      </motion.div>

      {/* Mission */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-6">{t.about.missionTitle}</h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-foreground/80 leading-relaxed mb-4">
            {t.about.missionDesc1}
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            {t.about.missionDesc2}
          </p>
          <p className="text-foreground/80 leading-relaxed">
            {t.about.missionDesc3}
          </p>
        </div>
      </motion.section>

      {/* Values */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8">{t.about.valuesTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <Target className="w-8 h-8" />,
              ...t.about.values[0]
            },
            {
              icon: <Dumbbell className="w-8 h-8" />,
              ...t.about.values[1]
            },
            {
              icon: <Heart className="w-8 h-8" />,
              ...t.about.values[2]
            },
            {
              icon: <Users className="w-8 h-8" />,
              ...t.about.values[3]
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-card border border-border rounded-xl"
            >
              <div className="text-primary mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-foreground/70">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* The Story */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl"
      >
        <h2 className="text-3xl font-bold mb-6">{t.about.storyTitle}</h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-foreground/80 leading-relaxed mb-4">
            {t.about.storyDesc1}
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            {t.about.storyDesc2}
          </p>
          <p className="text-foreground/80 leading-relaxed">
            {t.about.storyDesc3}
          </p>
        </div>
      </motion.section>

      {/* Current Status */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-6">{t.about.statusTitle}</h2>
        <div className="p-6 bg-warning/10 border border-warning/30 rounded-xl mb-6">
          <p className="text-warning font-medium mb-2">🚧 {t.about.statusBeta}</p>
          <p className="text-foreground/80">
            {t.about.statusDesc}
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">{t.about.availableTitle}</h3>
          <ul className="space-y-2">
            {t.about.availableItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Roadmap */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-6">{t.about.roadmapTitle}</h2>
        <div className="space-y-4">
          {t.about.roadmapItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
              <span className="font-medium">{item.feature}</span>
              <span className="text-sm text-primary">{item.status}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center p-8 bg-card border border-border rounded-2xl"
      >
        <h2 className="text-3xl font-bold mb-4">{t.about.ctaTitle}</h2>
        <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
          {t.about.ctaDesc}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register"
            className="px-8 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg transition-all font-medium inline-flex items-center gap-2"
          >
            {t.about.ctaButton} <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/tutorials"
            className="px-8 py-3 border border-border hover:border-primary rounded-lg transition-all font-medium"
          >
            {t.home.viewTutorials}
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
