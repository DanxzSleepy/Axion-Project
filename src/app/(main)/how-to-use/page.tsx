'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, Trophy, Target, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HowToUsePage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-bold mb-4">{t.howToUse.title}</h1>
        <p className="text-xl text-foreground/70 mb-12">
          {t.howToUse.subtitle}
        </p>

        {/* Getting Started */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">{t.howToUse.gettingStarted}</h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: t.howToUse.steps.createAccount,
                description: t.howToUse.steps.createAccountDesc,
                link: '/register',
                linkText: t.common.register
              },
              {
                step: 2,
                title: t.howToUse.steps.setupProfile,
                description: t.howToUse.steps.setupProfileDesc,
                link: '/profile',
                linkText: t.common.profile
              },
              {
                step: 3,
                title: t.howToUse.steps.explore,
                description: t.howToUse.steps.exploreDesc,
                link: '/tutorials',
                linkText: t.common.tutorials
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-6 p-6 bg-card border border-border rounded-xl">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground/70 mb-3">{item.description}</p>
                  <Link href={item.link} className="text-primary hover:underline inline-flex items-center gap-1">
                    {item.linkText} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Feature Guide */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">{t.howToUse.platformFeatures}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: t.howToUse.features.tutorials,
                description: t.howToUse.features.tutorialsDesc,
                tip: t.howToUse.features.tutorialsTip
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: t.howToUse.features.guides,
                description: t.howToUse.features.guidesDesc,
                tip: t.howToUse.features.guidesTip
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: t.howToUse.features.skillTree,
                description: t.howToUse.features.skillTreeDesc,
                tip: t.howToUse.features.skillTreeTip
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: t.howToUse.features.tracking,
                description: t.howToUse.features.trackingDesc,
                tip: t.howToUse.features.trackingTip
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card border border-border rounded-xl"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">{feature.description}</p>
                <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                  <p className="text-xs text-primary">
                    <strong>{t.common.proTip}:</strong> {feature.tip}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Understanding Difficulty Rankings */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl"
        >
          <h2 className="text-3xl font-bold mb-6">{t.howToUse.difficultyGuide}</h2>
          <p className="text-foreground/70 mb-6">
            {t.howToUse.difficultyDesc}
          </p>
          <div className="space-y-3">
            {[
              { rank: 'F', label: t.howToUse.ranks.F, desc: t.howToUse.ranks.FDesc },
              { rank: 'D', label: t.howToUse.ranks.D, desc: t.howToUse.ranks.DDesc },
              { rank: 'C', label: t.howToUse.ranks.C, desc: t.howToUse.ranks.CDesc },
              { rank: 'B', label: t.howToUse.ranks.B, desc: t.howToUse.ranks.BDesc },
              { rank: 'A', label: t.howToUse.ranks.A, desc: t.howToUse.ranks.ADesc },
              { rank: 'S', label: t.howToUse.ranks.S, desc: t.howToUse.ranks.SDesc },
              { rank: 'SS', label: t.howToUse.ranks.SS, desc: t.howToUse.ranks.SSDesc }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-card/50 rounded-lg">
                <span className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center font-bold text-primary">
                  {item.rank}
                </span>
                <div>
                  <p className="font-medium">{item.label}</p>
                  <p className="text-sm text-foreground/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/terminology"
            className="mt-6 inline-flex items-center gap-2 text-primary hover:underline"
          >
            {t.terminology.title} <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.section>

        {/* Best Practices */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">{t.howToUse.bestPractices}</h2>
          <div className="space-y-4">
            {t.howToUse.practices.map((practice, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">{practice}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Need Help */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-8 bg-card border border-border rounded-2xl"
        >
          <h2 className="text-3xl font-bold mb-4">{t.howToUse.stillHaveQuestions}</h2>
          <p className="text-foreground/70 mb-6">
            {t.howToUse.questionsDesc}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/feedback"
              className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg transition-all font-medium"
            >
              {t.footer.feedback}
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 border border-border hover:border-primary rounded-lg transition-all font-medium"
            >
              {t.footer.aboutUs}
            </Link>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
