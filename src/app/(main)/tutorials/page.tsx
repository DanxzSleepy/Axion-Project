'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { exercises, categoryLabels, categoryDescriptions } from '@/lib/exercises';
import { Exercise, ExerciseCategory } from '@/types';
import { ChevronDown, ChevronUp, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TutorialsPage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<ExerciseCategory | 'all'>('all');
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  const categories: (ExerciseCategory | 'all')[] = ['all', 'horizontal-push', 'vertical-push', 'horizontal-pull', 'vertical-pull', 'legs', 'core-misc'];

  const filteredExercises = selectedCategory === 'all' 
    ? exercises 
    : exercises.filter(ex => ex.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    const colors: Record<string, string> = {
      'F': 'text-green-400',
      'D': 'text-blue-400',
      'C': 'text-yellow-400',
      'B': 'text-orange-400',
      'A': 'text-red-400',
      'S': 'text-purple-400',
      'SS': 'text-pink-400'
    };
    return colors[difficulty] || 'text-foreground';
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {t.tutorials.title}
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          {t.tutorials.subtitle}
        </p>
      </motion.div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              selectedCategory === cat
                ? 'bg-primary text-white'
                : 'bg-card hover:bg-card-hover text-foreground/70'
            }`}
          >
            {t.tutorials.categories[cat]}
          </button>
        ))}
      </div>

      {/* Category Description */}
      {selectedCategory !== 'all' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 p-4 bg-card border border-border rounded-lg"
        >
          <p className="text-foreground/70">{t.tutorials.categoryDescriptions[selectedCategory]}</p>
        </motion.div>
      )}

      {/* Exercise Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExercises.map((exercise, index) => (
          <motion.div
            key={exercise.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedExercise(exercise)}
            className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold">{exercise.name}</h3>
              <span className={`text-2xl font-bold ${getDifficultyColor(exercise.difficulty)}`}>
                {exercise.difficulty}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
              <Clock className="w-4 h-4" />
              <span>{exercise.learningTime}</span>
            </div>
            <p className="text-foreground/70 text-sm mb-4">{exercise.description}</p>
            <div className="flex items-center text-primary text-sm font-medium">
              {t.tutorials.viewDetails} <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Exercise Modal */}
      <AnimatePresence>
        {selectedExercise && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExercise(null)}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-card border-b border-border p-6 flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedExercise.name}</h2>
                  <div className="flex items-center gap-4">
                    <span className={`text-3xl font-bold ${getDifficultyColor(selectedExercise.difficulty)}`}>
                      {t.tutorials.difficulty}: {selectedExercise.difficulty}
                    </span>
                    <div className="flex items-center gap-2 text-foreground/60">
                      <Clock className="w-4 h-4" />
                      <span>{selectedExercise.learningTime}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedExercise(null)}
                  className="text-foreground/60 hover:text-foreground text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Overview */}
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">{t.tutorials.overview}</h3>
                  <p className="text-foreground/70">{selectedExercise.description}</p>
                </div>

                {/* Muscles Worked */}
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">{t.tutorials.musclesWorked}</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedExercise.musclesWorked.map((muscle, i) => (
                      <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {muscle}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Step by Step */}
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">{t.tutorials.stepByStep}</h3>
                  <ol className="space-y-2">
                    {selectedExercise.steps.map((step, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {i + 1}
                        </span>
                        <span className="text-foreground/70">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Progression Table */}
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">{t.tutorials.progressionPath}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { label: 'Regression', value: selectedExercise.progression.regression },
                      { label: 'Current', value: selectedExercise.progression.current },
                      { label: 'Progression', value: selectedExercise.progression.progression },
                      { label: 'Target', value: selectedExercise.progression.target }
                    ].map((item, i) => (
                      <div key={i} className="p-3 bg-card border border-border rounded-lg">
                        <div className="text-xs text-foreground/60 mb-1">{item.label}</div>
                        <div className="font-bold text-sm">{item.value}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-foreground/50 mt-2">
                    {t.tutorials.progressionGuideLink} <a href="/how-to-use" className="text-primary hover:underline">{t.tutorials.siteGuide}</a>.
                  </p>
                </div>

                {/* Exercises */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold mb-2 text-primary">{t.tutorials.mainExercises}</h4>
                    <ul className="space-y-1">
                      {selectedExercise.mainExercises.map((ex, i) => (
                        <li key={i} className="text-foreground/70 text-sm">• {ex}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-primary">{t.tutorials.accessoryExercises}</h4>
                    <ul className="space-y-1">
                      {selectedExercise.accessoryExercises.map((ex, i) => (
                        <li key={i} className="text-foreground/70 text-sm">• {ex}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-card border-t border-border p-6 flex gap-3">
                <button
                  onClick={() => setSelectedExercise(null)}
                  className="flex-1 px-6 py-3 border border-border hover:border-primary rounded-lg transition-all"
                >
                  {t.tutorials.backToTutorials}
                </button>
                <button className="flex-1 px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg transition-all font-medium">
                  {t.tutorials.addToPlan}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
