'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock, BookOpen, CheckCircle } from 'lucide-react';

interface Section {
  title: string;
  content: string;
}

interface TrainingGuideLayoutProps {
  title: string;
  category: string;
  readTime: string;
  sections: Section[];
  keyTakeaways: string[];
  nextGuide?: string;
  nextGuideTitle?: string;
  previousGuide?: string;
  previousGuideTitle?: string;
}

export default function TrainingGuideLayout({
  title,
  category,
  readTime,
  sections,
  keyTakeaways,
  nextGuide,
  nextGuideTitle,
  previousGuide,
  previousGuideTitle
}: TrainingGuideLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Back Button */}
      <Link
        href="/training"
        className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Training Guides
      </Link>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            {category}
          </span>
          <div className="flex items-center gap-2 text-foreground/60 text-sm">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      </motion.div>

      {/* Content Sections */}
      <div className="space-y-12 mb-16">
        {sections.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">{section.title}</h2>
            <div className="prose prose-invert max-w-none">
              {section.content.split('\n').map((paragraph, i) => (
                paragraph && <p key={i} className="text-foreground/80 leading-relaxed mb-3">{paragraph}</p>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      {/* Key Takeaways */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 bg-card border border-border rounded-xl mb-12"
      >
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-success" />
          Key Takeaways
        </h3>
        <ul className="space-y-3">
          {keyTakeaways.map((takeaway, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span className="text-foreground/80">{takeaway}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t border-border">
        {previousGuide && previousGuideTitle ? (
          <Link
            href={previousGuide}
            className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {previousGuideTitle}
          </Link>
        ) : (
          <div />
        )}
        
        {nextGuide && nextGuideTitle ? (
          <Link
            href={nextGuide}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            {nextGuideTitle}
            <ArrowRight className="w-4 h-4" />
          </Link>
        ) : (
          <Link
            href="/training"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Back to All Guides
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
