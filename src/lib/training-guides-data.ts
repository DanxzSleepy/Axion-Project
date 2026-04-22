export interface TrainingGuide {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  sections: { title: string; content: string }[];
  keyTakeaways: string[];
  nextGuide?: string;
  previousGuide?: string;
}

export const trainingGuides: TrainingGuide[] = [
  {
    slug: 'progressive-overload-in-calisthenics',
    title: 'Progressive Overload in Calisthenics',
    category: 'Fundamentals',
    readTime: '8 min read',
    sections: [
      {
        title: 'What is Progressive Overload?',
        content: `Progressive overload is the gradual increase of stress placed on your body during training. It's the fundamental principle behind all strength gains.

In calisthenics, instead of adding weight to a bar, you progress to harder exercise variations, increase reps, or improve leverage.`
      },
      {
        title: 'Methods of Progressive Overload',
        content: `**1. Exercise Progression:** Move to harder variations (e.g., push-ups → diamond push-ups → archer push-ups)

**2. Increased Reps:** Add more repetitions within your target range

**3. Increased Sets:** Add more total volume to your workout

**4. Better Form:** Improve range of motion and control

**5. Reduced Rest Time:** Decrease rest between sets to increase intensity

**6. Tempo Changes:** Slow down the eccentric (lowering) phase for more time under tension`
      },
      {
        title: 'Practical Example: Push-up Progression',
        content: `Week 1-2: Wall push-ups (3x15)
Week 3-4: Incline push-ups (3x12)
Week 5-6: Standard push-ups (3x10)
Week 7-8: Diamond push-ups (3x8)
Week 9-10: Archer push-ups (3x6 each side)
Week 11-12: One-arm push-up progressions

Each step increases difficulty by changing leverage and weight distribution.`
      },
      {
        title: 'Common Mistakes',
        content: `** progressing too fast** - Master each level before moving on
**Skipping fundamentals** - Build a solid foundation first
**Not tracking progress** - Log your workouts to see improvement
**Ignoring recovery** - Muscles grow during rest, not training
**Inconsistent training** - Regularity beats intensity`
      }
    ],
    keyTakeaways: [
      "Progressive overload is essential for continuous strength gains",
      "Use multiple methods: progressions, reps, sets, tempo, rest time",
      "Progress gradually - master each level before advancing",
      "Track your workouts to ensure you're actually progressing"
    ],
    nextGuide: '/training/gymnastics-vs-calisthenics',
    previousGuide: '/training/calisthenics-fundamentals'
  },
  {
    slug: 'gymnastics-vs-calisthenics',
    title: 'Gymnastics vs. Calisthenics',
    category: 'Fundamentals',
    readTime: '6 min read',
    sections: [
      {
        title: 'Understanding the Difference',
        content: `While both use bodyweight training, gymnastics and calisthenics have distinct approaches and goals.

**Gymnastics** is a competitive sport with standardized routines, judged on execution, difficulty, and artistry. It emphasizes dynamic movements, flexibility, and acrobatics.

**Calisthenics** (street workout) focuses on strength development, skill mastery, and physical aesthetics. It's more accessible and less structured than gymnastics.`
      },
      {
        title: 'Key Differences',
        content: `**Training Environment:**
- Gymnastics: Professional gyms with specialized equipment
- Calisthenics: Parks, home, or anywhere with minimal equipment

**Goals:**
- Gymnastics: Competition scores and routine perfection
- Calisthenics: Strength gains, skill achievement, physique

**Skill Focus:**
- Gymnastics: Dynamic skills, flips, routines
- Calisthenics: Static holds, strength skills, freestyle movements

**Age of Entry:**
- Gymnastics: Usually starts in childhood
- Calisthenics: Can start at any age`
      },
      {
        title: 'Which Should You Choose?',
        content: `**Choose Gymnastics if:**
- You want to compete
- You're young or coaching youth
- You enjoy structured routines and acrobatics
- You have access to a gymnastics facility

**Choose Calisthenics if:**
- You want to train independently
- You're starting as an adult
- You prefer strength skills and static holds
- You want minimal equipment and flexible training locations

Many athletes combine both for well-rounded development!`
      }
    ],
    keyTakeaways: [
      "Gymnastics is a competitive sport; calisthenics is fitness-focused",
      "Calisthenics is more accessible for adults starting out",
      "Both build incredible bodyweight strength",
      "You can benefit from elements of both disciplines"
    ],
    nextGuide: '/training/full-body-workout-vs-split',
    previousGuide: '/training/progressive-overload-in-calisthenics'
  },
  {
    slug: 'full-body-workout-vs-split',
    title: 'Full Body Workout vs. Split',
    category: 'Fundamentals',
    readTime: '7 min read',
    sections: [
      {
        title: 'Understanding Training Splits',
        content: `A training split determines how you organize your workouts throughout the week. The two main approaches are full body workouts and split routines.

**Full Body:** Train all major muscle groups every session
**Split:** Focus on specific muscle groups or movement patterns each day`  
      },
      {
        title: 'Full Body Workouts',
        content: `**Best for:** Beginners, intermediate athletes, 3-4 training days per week

**Advantages:**
- Higher frequency per movement pattern
- Better for skill development
- More flexible scheduling
- Great for overall strength

**Example Full Body Workout:**
- Warm-up: 5-10 min dynamic stretching
- Pull-ups: 3x8-12
- Dips: 3x10-15
- Squats: 3x15-20
- L-sit progressions: 3x max hold
- Push-ups: 3x15-20`  
      },
      {
        title: 'Split Routines',
        content: `**Best for:** Advanced athletes, 5-6 training days per week, specialization

**Common Splits:**
- Push/Pull/Legs (3 or 6 days)
- Upper/Lower (4 days)
- Push/Pull (4 days)

**Push/Pull/Legs Example:**
- Push: Push-ups, dips, handstand work
- Pull: Pull-ups, rows, front lever work
- Legs: Squats, pistol squats, calf raises`  
      },
      {
        title: 'Which Should You Choose?',
        content: `**Choose Full Body if:**
- You're a beginner or intermediate
- You train 3-4 days per week
- You want to build overall strength
- You're learning new skills

**Choose Split if:**
- You're advanced
- You train 5-6 days per week
- You want to maximize volume
- You're targeting specific weaknesses`
      }
    ],
    keyTakeaways: [
      "Full body is best for most people starting out",
      "Splits work well for advanced athletes training 5+ days",
      "Frequency matters more than perfection",
      "Choose what fits your schedule and goals"
    ],
    nextGuide: '/training/rest-and-recovery',
    previousGuide: '/training/gymnastics-vs-calisthenics'
  },
  {
    slug: 'progressive-overload',
    title: 'Progressive Overload',
    category: 'Fundamentals',
    readTime: '8 min read',
    sections: [
      { title: 'What is Progressive Overload?', content: `Progressive overload is the gradual increase of stress placed on your body during training. It's the fundamental principle behind ALL strength gains.

In calisthenics, instead of adding weight, you progress to harder exercise variations, increase reps, or improve leverage.` },
      { title: 'Methods of Progression', content: `**1. Exercise Progression:** Move to harder variations (push-ups → diamond push-ups → archer push-ups)

**2. Increased Reps:** Add more repetitions within your target range

**3. Increased Sets:** Add more total volume to your workout

**4. Better Form:** Improve range of motion and control

**5. Tempo Changes:** Slow down the eccentric (lowering) phase` },
      { title: 'Practical Example', content: `**Push-up Progression Path:**
Week 1-2: Wall push-ups (3x15)
Week 3-4: Incline push-ups (3x12)
Week 5-6: Standard push-ups (3x10)
Week 7-8: Diamond push-ups (3x8)
Week 9-10: Archer push-ups (3x6 each side)

Each step increases difficulty by changing leverage.` }
    ],
    keyTakeaways: ["Progressive overload is essential for continuous gains", "Use multiple progression methods", "Progress gradually - master each level first", "Track your workouts"],
    nextGuide: '/training/gymnastics-vs-calisthenics',
    previousGuide: '/training/calisthenics-fundamentals'
  },
  {
    slug: 'gymnastics-vs-calisthenics',
    title: 'Gymnastics vs Calisthenics',
    category: 'Fundamentals',
    readTime: '6 min read',
    sections: [
      { title: 'Understanding the Difference', content: `While both use bodyweight training, they have distinct approaches.

**Gymnastics** is a competitive sport with standardized routines, judged on execution and difficulty. It emphasizes dynamic movements and acrobatics.

**Calisthenics** focuses on strength development, skill mastery, and physical aesthetics. It's more accessible and less structured.` },
      { title: 'Key Differences', content: `**Training Environment:**
- Gymnastics: Professional gyms with specialized equipment
- Calisthenics: Parks, home, anywhere with minimal equipment

**Goals:**
- Gymnastics: Competition scores and routine perfection
- Calisthenics: Strength gains and skill achievement

**Age of Entry:**
- Gymnastics: Usually starts in childhood
- Calisthenics: Can start at ANY age` }
    ],
    keyTakeaways: ["Gymnastics is competitive; calisthenics is fitness-focused", "Calisthenics is more accessible for adults", "Both build incredible strength", "You can benefit from both"],
    nextGuide: '/training/full-body-vs-split',
    previousGuide: '/training/progressive-overload'
  },
  {
    slug: 'rest-and-recovery',
    title: 'Rest and Recovery',
    category: 'Fundamentals',
    readTime: '7 min read',
    sections: [
      { title: 'Why Rest Matters', content: `Muscles don't grow during training - they grow during REST. Training creates microscopic tears in muscle fibers, and recovery is when your body repairs and strengthens them.

Without adequate rest, you'll experience:
- Decreased performance
- Increased injury risk
- Overtraining syndrome
- Mental burnout` },
      { title: 'Recovery Guidelines', content: `**Sleep:** 7-9 hours per night (crucial for hormone production)

**Rest Days:** 2-3 per week for beginners, 1-2 for advanced

**Deload Weeks:** Every 4-6 weeks, reduce volume by 50%

**Active Recovery:** Light mobility work, walking, stretching` },
      { title: 'Signs of Overtraining', content: `- Persistent fatigue
- Decreased performance
- Insomnia or poor sleep quality
- Loss of motivation
- Frequent injuries or illness
- Mood changes and irritability

If you experience these, take extra rest days!` }
    ],
    keyTakeaways: ["Rest is when muscles grow, not training", "Get 7-9 hours of sleep", "Take 2-3 rest days per week", "Listen to your body - rest when needed"],
    nextGuide: '/training/conditioning-and-activation',
    previousGuide: '/training/full-body-vs-split'
  },
  {
    slug: 'conditioning-and-activation',
    title: 'Conditioning and Activation',
    category: 'Fundamentals',
    readTime: '8 min read',
    sections: [
      { title: 'What is Activation?', content: `Activation exercises prepare your muscles and nervous system for the workout ahead. They "wake up" specific muscle groups and improve mind-muscle connection.

**Benefits:**
- Improved performance
- Reduced injury risk
- Better movement patterns
- Enhanced muscle recruitment` },
      { title: 'Pre-Workout Activation Routine', content: `**Upper Body Day (5-10 minutes):**
- Arm circles: 30 seconds
- Scapular pull-ups: 10 reps
- Band pull-aparts: 15 reps
- Push-up to downward dog: 8 reps
- Wrist mobility: 30 seconds each direction

**Lower Body Day (5-10 minutes):**
- Leg swings: 10 each direction
- Hip circles: 10 each direction
- Bodyweight squats: 15 reps
- Lunges: 10 each leg
- Ankle mobility: 30 seconds` },
      { title: 'Conditioning Work', content: `Conditioning improves your cardiovascular fitness and work capacity.

**Calisthenics Conditioning Methods:**
- Circuit training (3-5 exercises, minimal rest)
- EMOM (Every Minute on the Minute)
- Tabata intervals (20s work, 10s rest)
- High-rep bodyweight workouts`
      }
    ],
    keyTakeaways: ["Always warm up before training", "Activation improves performance and prevents injury", "Spend 5-10 minutes on activation", "Conditioning improves work capacity"],
    nextGuide: '/training/push-skill-path',
    previousGuide: '/training/rest-and-recovery'
  }
];
