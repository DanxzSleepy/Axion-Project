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
  },
  // Skill Path Guides
  {
    slug: 'push-skill-path',
    title: 'Push Skill Path',
    category: 'Skill Guides',
    readTime: '10 min read',
    sections: [
      { title: 'Push Movement Overview', content: `Push exercises target your chest, shoulders, and triceps. The push skill path takes you from basic push-ups to elite skills like the Planche and Handstand Push-up.

**Primary Muscles:** Chest (pectorals), Shoulders (deltoids), Triceps
**Secondary Muscles:** Core, Serratus anterior` },
      { title: 'Complete Push Progression', content: `**Level 1 (F-D): Foundation**
- Wall push-ups → Incline push-ups → Standard push-ups

**Level 2 (C): Intermediate**
- Diamond push-ups → Pike push-ups → Dips

**Level 3 (B-A): Advanced**
- Ring dips → Pseudo planche push-ups → Handstand push-ups

**Level 4 (S-SS): Elite**
- Planche progressions → Full planche → One-arm push-ups` }
    ],
    keyTakeaways: ["Master each level before progressing", "Focus on straight-arm strength for planche", "Handstand requires balance practice", "Train push 2-3 times per week"],
    nextGuide: '/training/pull-skill-path',
    previousGuide: '/training/conditioning-and-activation'
  },
  {
    slug: 'pull-skill-path',
    title: 'Pull Skill Path',
    category: 'Skill Guides',
    readTime: '10 min read',
    sections: [
      { title: 'Pull Movement Overview', content: `Pull exercises develop your back, biceps, and rear delts. The pull skill path progresses from basic rows to advanced skills like the Front Lever and Muscle-up.

**Primary Muscles:** Latissimus dorsi, Rhomboids, Biceps
**Secondary Muscles:** Rear delts, Forearms, Core` },
      { title: 'Complete Pull Progression', content: `**Level 1 (F-D): Foundation**
- Australian rows → Band-assisted pull-ups → Negative pull-ups

**Level 2 (C): Intermediate**
- Pull-ups → Chin-ups → Commando pull-ups

**Level 3 (B-A): Advanced**
- Muscle-ups → Typewriter pull-ups → Front lever tuck

**Level 4 (S-SS): Elite**
- Front lever → One-arm pull-ups → Front lever pull-ups` }
    ],
    keyTakeaways: ["Scapular strength is crucial", "Practice both vertical and horizontal pulls", "Front lever takes 1-2 years for most athletes", "Grease the groove for faster progress"],
    nextGuide: '/training/legs-skill-path',
    previousGuide: '/training/push-skill-path'
  },
  {
    slug: 'legs-skill-path',
    title: 'Legs Skill Path',
    category: 'Skill Guides',
    readTime: '8 min read',
    sections: [
      { title: 'Leg Training in Calisthenics', content: `While calisthenics focuses on upper body, leg strength is essential for overall development, balance, and preventing muscle imbalances.

**Primary Muscles:** Quadriceps, Hamstrings, Glutes, Calves
**Training Methods:** Bodyweight squats, unilateral work, plyometrics` },
      { title: 'Leg Progression Path', content: `**Foundation:**
- Bodyweight squats → Lunges → Bulgarian split squats

**Intermediate:**
- Pistol squats → Shrimp squats → Nordic curl negatives

**Advanced:**
- Full Nordic curls → Single-leg box jumps → Pistol squat jumps

**Training Frequency:** 2-3 times per week, 3-4 exercises per session` }
    ],
    keyTakeaways: ["Don't skip leg day", "Pistol squats are the gold standard", "Nordic curls build bulletproof hamstrings", "Plyometrics develop explosive power"],
    nextGuide: '/training/beginner-workout-structure',
    previousGuide: '/training/pull-skill-path'
  },
  // Training 101 Guides
  {
    slug: 'beginner-workout-structure',
    title: 'Beginner Workout Structure',
    category: 'Training 101',
    readTime: '8 min read',
    sections: [
      { title: 'Your First Workout', content: `As a beginner, your workouts should focus on building foundational strength and learning proper movement patterns.

**Workout Frequency:** 3 days per week (e.g., Monday, Wednesday, Friday)
**Session Duration:** 45-60 minutes
**Rest Between Sets:** 90-120 seconds` },
      { title: 'Sample Beginner Workout', content: `**Warm-up (5-10 min):**
- Arm circles, leg swings, wrist mobility
- 5 min light cardio (jumping jacks, running in place)

**Main Workout:**
1. Push-ups: 3 sets x max reps (use incline if needed)
2. Australian rows: 3 sets x 8-12 reps
3. Bodyweight squats: 3 sets x 15-20 reps
4. Plank: 3 sets x 30-60 seconds
5. Glute bridges: 3 sets x 15 reps

**Cool-down:** 5 min stretching` }
    ],
    keyTakeaways: ["Start with 3 days per week", "Focus on form, not reps", "Rest adequately between sets", "Progress gradually each week"],
    nextGuide: '/training/intermediate-workout-structure',
    previousGuide: '/training/legs-skill-path'
  },
  {
    slug: 'intermediate-workout-structure',
    title: 'Intermediate Workout Structure',
    category: 'Training 101',
    readTime: '9 min read',
    sections: [
      { title: 'Leveling Up Your Training', content: `Once you can do 15+ push-ups, 8+ pull-ups, and 20+ squats, you're ready for intermediate training.

**Workout Frequency:** 4 days per week
**Split Options:** Upper/Lower or Push/Pull
**Session Duration:** 60-75 minutes` },
      { title: 'Sample Upper/Lower Split', content: `**Day 1 - Upper Body:**
- Pull-ups: 4x8-12
- Dips: 4x10-15
- Pike push-ups: 3x8-12
- Inverted rows: 3x12-15
- L-sit practice: 5x max hold

**Day 2 - Lower Body:**
- Pistol squats: 4x8 each leg
- Nordic curl negatives: 3x5
- Calf raises: 3x20
- Core circuit: 3 rounds

**Days 3-4:** Repeat Days 1-2` }
    ],
    keyTakeaways: ["Increase training frequency to 4 days", "Use splits for better recovery", "Add skill work (L-sit, handstand)", "Track progress meticulously"],
    nextGuide: '/training/strengthening-your-core',
    previousGuide: '/training/beginner-workout-structure'
  },
  {
    slug: 'strengthening-your-core',
    title: 'Strengthening Your Core',
    category: 'Training 101',
    readTime: '7 min read',
    sections: [
      { title: 'Why Core Strength Matters', content: `Your core is the foundation of EVERY calisthenics movement. A strong core improves:
- Stability in push-ups, pull-ups, and dips
- Balance for handstands and planche
- Power transfer in dynamic movements
- Injury prevention

**Core muscles include:** Abs, obliques, lower back, hip flexors` },
      { title: 'Core Progression Path', content: `**Level 1: Foundation**
- Planks → Side planks → Dead bugs

**Level 2: Intermediate**
- Hanging knee raises → Ab wheel rollouts → Dragon flags negatives

**Level 3: Advanced**
- Hanging leg raises → L-sit → V-sit

**Level 4: Elite**
- Front lever → Dragon flags → Planche

**Training:** 3-4 times per week, 3-4 exercises` }
    ],
    keyTakeaways: ["Core strength is essential for all skills", "Train core 3-4 times per week", "Progress from static holds to dynamic movements", "L-sit is a cornerstone core skill"],
    nextGuide: '/training/leg-training',
    previousGuide: '/training/intermediate-workout-structure'
  },
  {
    slug: 'leg-training',
    title: 'Leg Training',
    category: 'Training 101',
    readTime: '7 min read',
    sections: [
      { title: 'Building Strong Legs Without Weights', content: `Calisthenics leg training can build impressive strength and muscle using only bodyweight. The key is progressive overload through unilateral exercises and plyometrics.

**Benefits:**
- Improved overall strength
- Better balance and coordination
- Enhanced athletic performance
- Injury prevention` },
      { title: 'Complete Leg Workout', content: `**Warm-up:** 5 min mobility work

**Main Exercises:**
1. Pistol squats: 4x8-12 each leg
2. Bulgarian split squats: 3x12 each leg
3. Nordic curls (or negatives): 3x5-8
4. Single-leg glute bridges: 3x15 each leg
5. Calf raises: 4x20-25

**Plyometric Finisher (optional):**
- Jump squats: 3x10
- Box jumps: 3x8

**Frequency:** 2-3 times per week` }
    ],
    keyTakeaways: ["Unilateral exercises are key", "Pistol squats are the gold standard", "Nordic curls prevent hamstring injuries", "Add plyometrics for power"],
    nextGuide: '/training/handstand-guide',
    previousGuide: '/training/strengthening-your-core'
  },
  // Advanced Skill Guides
  {
    slug: 'handstand-guide',
    title: 'Handstand Guide',
    category: 'Skill Guides',
    readTime: '12 min read',
    sections: [
      { title: 'Mastering the Handstand', content: `The handstand is one of the most fundamental calisthenics skills and a prerequisite for handstand push-ups and planche.

**Difficulty:** C-B (basic hold) to A-S (freestanding)
**Time to Learn:** 3-6 months for 30-second hold
**Prerequisites:** 15 push-ups, 30-second plank` },
      { title: 'Handstand Progression', content: `**Phase 1: Wall-Assisted (Weeks 1-4)**
- Wall walks → Chest-to-wall holds → Back-to-wall practice

**Phase 2: Balance Development (Weeks 5-8)**
- Kick-up practice → Finger control → Small adjustments

**Phase 3: Freestanding (Weeks 9-12+)**
- Consistent kick-ups → 10-second holds → 30+ second holds

**Training:** Practice 4-5 times per week, 10-15 minutes per session` }
    ],
    keyTakeaways: ["Practice daily for best results", "Wall drills build strength and confidence", "Finger control is the key to balance", "Consistency beats long sessions"],
    nextGuide: '/training/planche-guide',
    previousGuide: '/training/leg-training'
  },
  {
    slug: 'planche-guide',
    title: 'Planche Guide',
    category: 'Skill Guides',
    readTime: '12 min read',
    sections: [
      { title: 'The Ultimate Push Skill', content: `The planche is one of the most impressive calisthenics skills, requiring immense straight-arm strength, core stability, and dedicated training.

**Difficulty:** A-SS
**Time to Learn:** 1-3 years
**Prerequisites:** 20 dips, handstand push-ups, L-sit` },
      { title: 'Planche Progression', content: `**Phase 1: Foundation (Months 1-3)**
- Pseudo planche push-ups → Tuck planche holds → Tuck planche push-ups

**Phase 2: Development (Months 4-9)**
- Advanced tuck → Straddle planche negatives → Straddle holds

**Phase 3: Mastery (Months 10-24+)**
- Full planche attempts → Full planche holds → Planche push-ups

**Training:** 2-3 times per week, focus on straight-arm strength` }
    ],
    keyTakeaways: ["Requires 1-3 years of dedicated training", "Straight-arm strength is crucial", "Don't rush - build tendon strength", "Practice tuck planche extensively first"],
    nextGuide: '/training/front-lever-guide',
    previousGuide: '/training/handstand-guide'
  },
  {
    slug: 'front-lever-guide',
    title: 'Front Lever Guide',
    category: 'Skill Guides',
    readTime: '12 min read',
    sections: [
      { title: 'Mastering the Front Lever', content: `The front lever is an elite pull skill that demonstrates incredible back and core strength. You hold your body horizontal while hanging from a bar.

**Difficulty:** B-SS
**Time to Learn:** 1-2 years
**Prerequisites:** 10 pull-ups, 20-second L-sit, strong core` },
      { title: 'Front Lever Progression', content: `**Phase 1: Foundation (Months 1-3)**
- Tucked leg raises → Tuck front lever holds → Tuck FL pull-ups

**Phase 2: Development (Months 4-8)**
- Advanced tuck → Straddle negatives → Straddle holds

**Phase 3: Mastery (Months 9-18+)**
- Full front lever attempts → Full holds → Front lever pull-ups

**Training:** 2-3 times per week, combine with regular pull work` }
    ],
    keyTakeaways: ["Back and core strength are equally important", "Start with tuck position", "Straddle makes it easier than full", "Train with rings for added difficulty"],
    nextGuide: '/training/general-nutrition',
    previousGuide: '/training/planche-guide'
  },
  // Nutrition Guides
  {
    slug: 'general-nutrition',
    title: 'General Nutrition',
    category: 'Nutrition',
    readTime: '10 min read',
    sections: [
      { title: 'Nutrition Fundamentals', content: `Proper nutrition is essential for calisthenics performance, recovery, and body composition. You can't out-train a bad diet.

**Key Principles:**
- Eat enough protein (1.6-2.2g per kg bodyweight)
- Stay hydrated (2-3 liters daily)
- Eat whole, minimally processed foods
- Time nutrients around workouts` },
      { title: 'Macro Breakdown', content: `**Protein (30-35%):**
- Sources: Chicken, fish, eggs, tofu, legumes
- Purpose: Muscle repair and growth

**Carbohydrates (45-50%):**
- Sources: Rice, oats, potatoes, fruits, vegetables
- Purpose: Energy for training

**Fats (20-25%):**
- Sources: Nuts, olive oil, avocado, fish oil
- Purpose: Hormone production, joint health

**Calories:** Surplus for muscle gain, deficit for fat loss` }
    ],
    keyTakeaways: ["Protein is crucial for recovery", "Carbs fuel your workouts", "Don't fear healthy fats", "Adjust calories based on goals"],
    nextGuide: '/training/mass-gain-vs-definition',
    previousGuide: '/training/front-lever-guide'
  },
  {
    slug: 'mass-gain-vs-definition',
    title: 'Mass Gain vs Definition',
    category: 'Nutrition',
    readTime: '9 min read',
    sections: [
      { title: 'Choosing Your Goal', content: `Your training and nutrition should align with your primary goal:

**Mass Gain (Bulking):**
- Caloric surplus (+300-500 calories)
- Higher training volume
- Focus on strength progressions
- Expect some fat gain

**Definition (Cutting):**
- Caloric deficit (-300-500 calories)
- Maintain training intensity
- Focus on preserving strength
- Reveal muscle definition` },
      { title: 'Best Approach for Calisthenics', content: `**Recommendation: Lean Bulk**
- Small surplus (+200-300 calories)
- Prioritize protein intake
- Gain 0.25-0.5 kg per week
- Minimize fat gain while building muscle

**Cutting Phase:**
- Only cut if body fat is >15-18%
- Maintain protein intake
- Keep training heavy
- Expect 0.5-1 kg loss per week` }
    ],
    keyTakeaways: ["Lean bulk is optimal for calisthenics", "Cutting reveals existing muscle", "Don't rush - slow changes are sustainable", "Recomp is possible for beginners"],
    nextGuide: '/training/overcoming-plateaus',
    previousGuide: '/training/general-nutrition'
  },
  // Miscellaneous Guides
  {
    slug: 'overcoming-plateaus',
    title: 'Overcoming Plateaus',
    category: 'Miscellaneous',
    readTime: '8 min read',
    sections: [
      { title: 'Understanding Plateaus', content: `Plateaus are a natural part of training. Progress isn't linear, and everyone hits periods where gains seem to stall.

**Common Causes:**
- Insufficient recovery
- Lack of progressive overload
- Poor nutrition
- Mental fatigue
- Adaptation to current routine` },
      { title: 'Breaking Through', content: `**Strategy 1: Deload Week**
- Reduce volume by 50% for one week
- Allow full recovery
- Return stronger

**Strategy 2: Change Stimulus**
- New exercise variations
- Different rep ranges
- Tempo changes
- Isometric holds

**Strategy 3: Address Weaknesses**
- Identify limiting factors
- Target accessory work
- Improve mobility` }
    ],
    keyTakeaways: ["Plateaus are normal and temporary", "Deload weeks prevent burnout", "Change your stimulus", "Address weak points"],
    nextGuide: '/training/setting-realistic-goals',
    previousGuide: '/training/mass-gain-vs-definition'
  },
  {
    slug: 'setting-realistic-goals',
    title: 'Setting Realistic Goals',
    category: 'Miscellaneous',
    readTime: '7 min read',
    sections: [
      { title: 'The SMART Goal Framework', content: `Effective goals are:
- **Specific:** Clear and well-defined
- **Measurable:** Trackable progress
- **Achievable:** Realistic for your level
- **Relevant:** Aligns with your objectives
- **Time-bound:** Has a deadline

**Bad Goal:** "Get better at calisthenics"
**Good Goal:** "Achieve 10 strict pull-ups in 8 weeks"` },
      { title: 'Goal Setting Examples', content: `**Beginner (0-6 months):**
- 10 consecutive push-ups
- First pull-up
- 60-second plank
- Consistent 3x/week training

**Intermediate (6-18 months):**
- 15 pull-ups
- Muscle-up
- 30-second L-sit
- Handstand hold

**Advanced (18+ months):**
- Front lever
- Planche
- Handstand push-ups
- Competition preparation` }
    ],
    keyTakeaways: ["Use SMART goals", "Set short and long-term goals", "Track progress weekly", "Celebrate small victories"],
    nextGuide: '/training/calisthenics-fundamentals',
    previousGuide: '/training/overcoming-plateaus'
  }
];
