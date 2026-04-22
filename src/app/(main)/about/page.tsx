'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Dumbbell, Target, Heart, Users, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          About AXION
        </h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          Empowering your calisthenics journey through technology, community, and dedication
        </p>
      </motion.div>

      {/* Mission */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-foreground/80 leading-relaxed mb-4">
            AXION was created with a simple but powerful vision: to make calisthenics accessible, 
            structured, and achievable for everyone, regardless of their starting point.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            We believe that bodyweight training is the most democratic form of fitness. You don't need 
            expensive gym memberships or equipment. You just need your body, dedication, and the right 
            guidance. That's where AXION comes in.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Our platform combines AI-powered personalization with proven training methodologies to 
            create a calisthenics experience that adapts to YOUR level, YOUR goals, and YOUR pace.
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
        <h2 className="text-3xl font-bold mb-8">What We Stand For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <Target className="w-8 h-8" />,
              title: 'Accessibility',
              description: 'Calisthenics should be available to everyone, everywhere, regardless of budget or location.'
            },
            {
              icon: <Dumbbell className="w-8 h-8" />,
              title: 'Progressive Training',
              description: 'Structured progression paths that ensure safe, steady advancement from beginner to elite.'
            },
            {
              icon: <Heart className="w-8 h-8" />,
              title: 'Community First',
              description: 'Building a supportive environment where athletes help each other succeed.'
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: 'Education',
              description: 'Comprehensive resources that teach not just what to do, but why and how.'
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
        <h2 className="text-3xl font-bold mb-6">The Story Behind AXION</h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-foreground/80 leading-relaxed mb-4">
            AXION started as a personal project born from frustration. As a calisthenics practitioner, 
            I noticed that most training resources were scattered, inconsistent, or required expensive 
            coaching.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            I wanted to create something better - a centralized platform that combines the best of 
            what I've learned from years of training, research, and community engagement. A place 
            where beginners can find clear guidance and advanced athletes can track their progress 
            toward elite skills.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            The name "AXION" represents worth and value - because your fitness journey is valuable, 
            and you deserve tools that reflect that. This platform is built by an athlete, for athletes, 
            with the community's needs at its core.
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
        <h2 className="text-3xl font-bold mb-6">Where We Are Now</h2>
        <div className="p-6 bg-warning/10 border border-warning/30 rounded-xl mb-6">
          <p className="text-warning font-medium mb-2">🚧 Beta Version</p>
          <p className="text-foreground/80">
            AXION is currently in beta. We're actively developing new features, expanding our content 
            library, and improving the user experience. Your feedback is invaluable during this phase!
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">What's Available:</h3>
          <ul className="space-y-2">
            {[
              'Complete calisthenics tutorial library with progressions',
              'Comprehensive terminology and difficulty ranking system',
              'Interactive skill tree with prerequisite tracking',
              'Workout logging and progress tracking',
              'Training guides for all levels',
              'User profiles with streak and XP system'
            ].map((item, index) => (
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
        <h2 className="text-3xl font-bold mb-6">What's Coming Next</h2>
        <div className="space-y-4">
          {[
            { feature: 'AI-Powered Training Plans', status: 'In Development' },
            { feature: 'Video Tutorial Integration', status: 'Planned' },
            { feature: 'Community Features & Leaderboards', status: 'Planned' },
            { feature: 'Mobile App', status: 'Future' },
            { feature: 'Advanced Analytics & Insights', status: 'Future' }
          ].map((item, index) => (
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
        <h2 className="text-3xl font-bold mb-4">Join the AXION Community</h2>
        <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
          Start your calisthenics journey today. Track your progress, learn new skills, and become 
          part of a growing community dedicated to bodyweight mastery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register"
            className="px-8 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg transition-all font-medium inline-flex items-center gap-2"
          >
            Create Free Account <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/training"
            className="px-8 py-3 border border-border hover:border-primary rounded-lg transition-all inline-flex items-center gap-2"
          >
            Explore Training Guides
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
