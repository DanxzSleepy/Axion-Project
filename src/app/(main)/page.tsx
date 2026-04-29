'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap, Target, Award, TrendingUp, Users, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        
        <motion.div 
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.home.heroTitle}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {t.home.heroSubtitle}
          </motion.p>

          <motion.p 
            className="text-lg text-foreground/60 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {t.home.experienceLevel}
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              { level: t.home.beginner, desc: t.home.beginnerDesc, href: '/training?level=beginner' },
              { level: t.home.intermediate, desc: t.home.intermediateDesc, href: '/training?level=intermediate' },
              { level: t.home.advanced, desc: t.home.advancedDesc, href: '/training?level=advanced' }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link
                  href={item.href}
                  className="px-8 py-4 bg-card hover:bg-card-hover border border-border hover:border-primary rounded-xl transition-all duration-300 block group"
                >
                  <div className="text-xl font-bold text-primary mb-1">{item.level}</div>
                  <div className="text-sm text-foreground/60">{item.desc}</div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* What is Calisthenics */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.home.whatIsTitle}</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              {t.home.whatIsDesc1}
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              {t.home.whatIsDesc2}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t.home.benefitsTitle}
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Build Real Strength',
                description: 'Develop functional, usable strength that translates to real-world activities.'
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Master Your Body',
                description: 'Learn incredible skills like handstands, muscle-ups, and the planche.'
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'No Equipment Needed',
                description: 'Train anywhere with minimal or no equipment. Your body is your gym.'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Progressive Training',
                description: 'Clear progression paths from beginner to elite-level skills.'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Community Driven',
                description: 'Join a supportive community of athletes at all levels.'
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: 'Train Anytime',
                description: 'No gym hours or schedules. Train when it works for you.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-primary mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-foreground/70">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Site Pages Overview */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Explore AXION
          </motion.h2>

          <motion.div 
            className="max-w-4xl mx-auto space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                name: 'Tutorials & Skills',
                description: 'Learn every calisthenics movement with detailed guides, progressions, and video tutorials.',
                href: '/tutorials'
              },
              {
                name: 'AI Training',
                description: 'Get personalized workout plans generated by AI based on your level and goals.',
                href: '/training'
              },
              {
                name: 'Skill Tree',
                description: 'Track your progress through an interactive skill tree with prerequisites and milestones.',
                href: '/skill-tree'
              },
              {
                name: 'Terminology',
                description: 'Understand calisthenics terms, abbreviations, and the difficulty ranking system.',
                href: '/terminology'
              }
            ].map((page, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-primary">{page.name}</h3>
                  <p className="text-foreground/70">{page.description}</p>
                </div>
                <Link
                  href={page.href}
                  className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg transition-all duration-200 font-medium flex items-center gap-2 whitespace-nowrap"
                >
                  Explore <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results & Movements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills You'll Master</h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              From your first push-up to elite skills like the planche and front lever, 
              every step of your journey is mapped out.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { name: 'Push-up', link: '/tutorials', difficulty: 'F-D' },
              { name: 'Pull-up', link: '/tutorials', difficulty: 'D-C' },
              { name: 'Handstand', link: '/training/handstand-guide', difficulty: 'C-B' },
              { name: 'Muscle-up', link: '/tutorials', difficulty: 'B-A' },
              { name: 'Planche', link: '/training/planche-guide', difficulty: 'A-SS' },
              { name: 'Front Lever', link: '/training/front-lever-guide', difficulty: 'B-SS' },
              { name: 'L-Sit', link: '/tutorials', difficulty: 'C-B' },
              { name: 'Pistol Squat', link: '/tutorials', difficulty: 'B-A' }
            ].map((skill, index) => (
              <Link href={skill.link} key={index}>
                <motion.div
                  variants={fadeInUp}
                  className="p-6 bg-card border border-border rounded-xl text-center hover:border-primary/50 hover:scale-105 transition-all duration-300 cursor-pointer group"
                >
                  <div className="text-2xl font-bold text-primary mb-2 group-hover:text-primary-hover">{skill.name}</div>
                  <div className="text-sm text-foreground/60">Difficulty: {skill.difficulty}</div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
