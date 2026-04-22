'use client';

import { motion } from 'framer-motion';

export default function TerminologyPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const abbreviations = [
    { abbr: 'PU', term: 'Push-up' },
    { abbr: 'PU', term: 'Pull-up' },
    { abbr: 'HSPU', term: 'Handstand Push-up' },
    { abbr: 'OAPU', term: 'One-Arm Push-up' },
    { abbr: 'OAP/OAC', term: 'One-Arm Pull-up / One-Arm Chin-up' },
    { abbr: 'MU', term: 'Muscle-up' },
    { abbr: 'FL', term: 'Front Lever' },
    { abbr: 'PL', term: 'Planche' },
    { abbr: 'RIR', term: 'Reps In Reserve' },
    { abbr: 'ROM', term: 'Range of Motion' },
    { abbr: 'CNS', term: 'Central Nervous System' },
    { abbr: 'PPT', term: 'Posterior Pelvic Tilt' }
  ];

  const terminology = [
    {
      term: 'Sets x Repetitions',
      definition: 'A set is a group of repetitions. A rep is a single execution of an exercise. For example: 3 x 5 push-ups means doing 5 push-ups, 3 times (3 sets).'
    },
    {
      term: 'Rest',
      definition: 'Usually measured in minutes, rest is the time elapsed between sets to allow muscles and the body to rest/recover.'
    },
    {
      term: 'Volume',
      definition: 'The total amount of exercise performed in a session. High volume means a large total number of reps/holds. Low volume means a small total number of reps/holds.'
    },
    {
      term: 'Hold',
      definition: 'Used to refer to static exercises, "a hold" represents a single attempt to maintain a static position.'
    },
    {
      term: 'Failure',
      definition: 'The point at which you give up and physically cannot complete another rep or hold for one more second.'
    },
    {
      term: 'Reps In Reserve (RIR)',
      definition: 'The number of reps before failure; doing a set with 2 RIR means continuing until you feel you can do 2 more reps, but stopping instead of continuing.'
    },
    {
      term: 'Static Hold/Exercise',
      definition: 'Exercises that involve holding a certain position, such as the plank or front lever. Also known as isometric exercises. Most skills fall into this category.'
    },
    {
      term: 'Dynamic Exercise',
      definition: 'Exercises that involve movement, such as pull-ups or push-ups. Freestyle calisthenics falls into this category.'
    },
    {
      term: 'Progression',
      definition: 'A harder version/variation of an exercise.'
    },
    {
      term: 'Regression',
      definition: 'An easier version/variation of an exercise.'
    },
    {
      term: 'Eccentric',
      definition: 'In the part of the exercise that involves stretching the target muscle, the muscle length increases.'
    },
    {
      term: 'Concentric',
      definition: 'In the part of the exercise where the target muscle contracts, the muscle length decreases.'
    },
    {
      term: 'Range of Motion (ROM)',
      definition: 'Refers to the range of motion an exercise goes through, usually at a joint. For example, a full push-up involves a full range, from chest to floor and back to starting position.'
    },
    {
      term: 'Central Nervous System (CNS)',
      definition: 'The central nervous system includes the brain and spinal cord, and we use it for all movements and exercises.'
    },
    {
      term: 'Negatives',
      definition: 'Controlled, slow descents during an exercise, focusing on the eccentric phase. For example, slowly lowering yourself during a pull-up.'
    },
    {
      term: 'Posterior Pelvic Tilt (PPT)',
      definition: 'A pelvic position where the pelvis tilts backward, flattening the lower back and squeezing the glutes. This pelvic position is considered optimal and is most used in planche posture.'
    }
  ];

  const difficultyRanks = [
    {
      rank: 'F',
      title: 'Baseline',
      description: 'Exercises at this level are accessible to almost everyone and serve as a starting point for people beginning calisthenics from absolute zero (no prior athletic experience).',
      examples: 'Push-ups, Australian Pull-ups',
      color: 'from-green-500 to-green-600'
    },
    {
      rank: 'D',
      title: 'Beginner Level',
      description: 'Exercises at this level can be completed in 1-2 months and serve as fundamental prerequisites before skill training can begin.',
      examples: 'Pull-ups, Dips, Elbow Lever, L-sit, Frog Stand',
      color: 'from-blue-500 to-blue-600'
    },
    {
      rank: 'C',
      title: 'Advanced Beginner',
      description: 'Exercises at this level can be completed in 2-6 months and serve as basic progression to advanced skills.',
      examples: 'Pike PU, Tuck FL, Handstand',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      rank: 'B',
      title: 'Lower Intermediate',
      description: 'Exercises at this level can be completed in 6-15 months and serve as intermediate progressions of advanced skills.',
      examples: 'Tuck PL, HSPU, Adv. Tuck PL, Adv. Tuck FL, MU, V-sit, OAPU',
      color: 'from-orange-500 to-orange-600'
    },
    {
      rank: 'A',
      title: 'Advanced Intermediate',
      description: 'Exercises at this level can be completed in 15-36 months and represent the final progression to advanced skills or the final skill itself.',
      examples: 'Str. PL, Str. FL, Full FL, 90° PU, OAP/OAC, Manna',
      color: 'from-red-500 to-red-600'
    },
    {
      rank: 'S',
      title: 'Advanced',
      description: 'Exercises at this level are usually achieved in 3-5 years and require constant effort and training. These are many people\'s dream skills.',
      examples: 'Full PL, Touch FL',
      color: 'from-purple-500 to-purple-600'
    },
    {
      rank: 'SS',
      title: 'Elite',
      description: 'Exercises at this level can take up to 5 years or more to complete, depending on genetics and effort. People who can perform these skills have truly excelled.',
      examples: 'Dragon PL, Maltese, Full PL PUs, Iron Cross, Inverted Cross',
      color: 'from-pink-500 to-pink-600'
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
          Terminology
        </h1>
        <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
          Calisthenics is a relatively niche sport compared to many others, so there may be terms you're not familiar with. 
          To use the site most effectively, take a quick look at the content here and feel free to come back if needed.
        </p>
      </motion.div>

      {/* Abbreviations */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">Skill Abbreviations</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {abbreviations.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-4 bg-card border border-border rounded-lg"
            >
              <div className="text-primary font-bold text-lg mb-1">{item.abbr}</div>
              <div className="text-foreground/70 text-sm">{item.term}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Terminology */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">Terminology</h2>
        <div className="space-y-4">
          {terminology.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-6 bg-card border border-border rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2 text-primary">{item.term}</h3>
              <p className="text-foreground/70">{item.definition}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Difficulty Ranking System */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">Skill Difficulty Table</h2>
        <div className="space-y-6">
          {difficultyRanks.map((rank, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-6 bg-card border border-border rounded-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`text-5xl font-bold bg-gradient-to-r ${rank.color} bg-clip-text text-transparent`}>
                  {rank.rank}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{rank.title}</h3>
                </div>
              </div>
              <p className="text-foreground/70 mb-4">{rank.description}</p>
              <div className="p-3 bg-background rounded-lg">
                <span className="text-sm text-foreground/60">Skills in this category: </span>
                <span className="text-sm text-primary font-medium">{rank.examples}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
