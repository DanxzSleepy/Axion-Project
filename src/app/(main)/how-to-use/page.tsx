'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, Trophy, Target, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';

export default function HowToUsePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-bold mb-4">How to Use AXION</h1>
        <p className="text-xl text-foreground/70 mb-12">
          Your complete guide to getting the most out of the platform
        </p>

        {/* Getting Started */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Create Your Account',
                description: 'Sign up with email or Google. Choose your fitness level: Beginner, Experienced, or Advanced.',
                link: '/register',
                linkText: 'Create Account'
              },
              {
                step: 2,
                title: 'Set Up Your Profile',
                description: 'Add your avatar, bio, and training goals. This helps us personalize your experience.',
                link: '/profile',
                linkText: 'View Profile'
              },
              {
                step: 3,
                title: 'Explore the Platform',
                description: 'Browse tutorials, training guides, and the skill tree to understand what AXION offers.',
                link: '/tutorials',
                linkText: 'Browse Tutorials'
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
          <h2 className="text-3xl font-bold mb-8">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: 'Tutorials & Skills',
                description: 'Browse exercises by category (push, pull, legs, core). Each exercise includes difficulty rating, learning time, muscle groups, and step-by-step progressions.',
                tip: 'Use the difficulty filter to find exercises appropriate for your level.'
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Training Guides',
                description: 'Comprehensive guides covering fundamentals, workout structure, nutrition, and skill development.',
                tip: 'Start with "Calisthenics Fundamentals" if you\'re new to bodyweight training.'
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: 'Skill Tree',
                description: 'Visual progression paths showing prerequisites and advancement routes for major skills like Planche, Front Lever, and Handstand.',
                tip: 'Complete prerequisites before attempting advanced skills to avoid injury.'
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: 'Progress Tracking',
                description: 'Log workouts, track exercises, record sets/reps, and monitor your consistency streak.',
                tip: 'Log every workout to maintain your streak and see long-term progress.'
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
                    <strong>Pro Tip:</strong> {feature.tip}
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
          <h2 className="text-3xl font-bold mb-6">Understanding Difficulty Rankings</h2>
          <p className="text-foreground/70 mb-6">
            AXION uses a ranking system from F to SS to indicate exercise difficulty:
          </p>
          <div className="space-y-3">
            {[
              { rank: 'F', label: 'Absolute Beginner', desc: 'First movements, building foundational strength' },
              { rank: 'D', label: 'Beginner', desc: 'Basic exercises, developing body awareness' },
              { rank: 'C', label: 'Intermediate', desc: 'Standard calisthenics movements' },
              { rank: 'B', label: 'Advanced', desc: 'Complex movements requiring dedicated training' },
              { rank: 'A', label: 'Expert', desc: 'Elite-level skills, months/years of practice' },
              { rank: 'S', label: 'Master', desc: 'Rare achievements, exceptional strength' },
              { rank: 'SS', label: 'Grandmaster', desc: 'Near-impossible feats, years of dedication' }
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
            View Full Terminology Guide <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.section>

        {/* Best Practices */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Best Practices</h2>
          <div className="space-y-4">
            {[
              'Always warm up before training (5-10 minutes)',
              'Focus on form over reps or speed',
              'Progress gradually - don\'t skip progression steps',
              'Rest 48 hours between training the same muscle groups',
              'Log your workouts consistently to track progress',
              'Listen to your body - rest when needed',
              'Set realistic goals and celebrate small wins',
              'Stay consistent - results come from regular practice'
            ].map((practice, index) => (
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
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-foreground/70 mb-6">
            We're here to help! Check our other resources or contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/terminology"
              className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg transition-all inline-flex items-center gap-2"
            >
              Terminology Guide
            </Link>
            <Link
              href="/feedback"
              className="px-6 py-3 border border-border hover:border-primary rounded-lg transition-all inline-flex items-center gap-2"
            >
              Contact Support
            </Link>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
