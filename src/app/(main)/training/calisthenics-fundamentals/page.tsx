import TrainingGuideLayout from '@/components/features/TrainingGuideLayout';

export default function CalisthenicsFundamentals() {
  return (
    <TrainingGuideLayout
      title="Calisthenics Fundamentals"
      category="Fundamentals"
      readTime="10 min read"
      sections={[
        {
          title: "What is Calisthenics?",
          content: `Calisthenics is a form of strength training that utilizes only your bodyweight as resistance. The word comes from ancient Greek: "kalos" (beauty) and "sthenos" (strength).

Unlike weightlifting that relies on external equipment, calisthenics teaches you to master your own body through progressive movements and skills.`
        },
        {
          title: "Core Principles",
          content: `**Progressive Overload:** Gradually increase difficulty by advancing to harder exercise variations.

**Consistency:** Regular training (3-5 times per week) produces better results than sporadic intense sessions.

**Proper Form:** Quality over quantity. Perfect your technique before increasing reps or difficulty.

**Patience:** Skills take time. Most people achieve significant progress in 6-12 months with consistent training.`
        },
        {
          title: "Essential Movement Patterns",
          content: `**Pushing:** Push-ups, dips, handstand push-ups (chest, shoulders, triceps)

**Pulling:** Pull-ups, rows, muscle-ups (back, biceps, rear delts)

**Squatting:** Squats, pistol squats, shrimp squats (quadriceps, glutes, hamstrings)

**Core Work:** Planks, L-sits, leg raises (abs, obliques, hip flexors)

**Static Holds:** Planche, front lever, handstand (full body strength)`
        },
        {
          title: "Getting Started",
          content: `1. **Assess your current level** - Can you do 10 push-ups? 5 pull-ups?
2. **Start with basics** - Master the fundamentals before attempting advanced skills
3. **Train 3-4 times per week** - Allow rest days for recovery
4. **Track your progress** - Log workouts to see improvement
5. **Be consistent** - Results come from regular practice, not perfection`
        }
      ]}
      keyTakeaways={[
        "Calisthenics uses bodyweight only - no gym required",
        "Focus on progressive overload and proper form",
        "Train consistently 3-5 times per week",
        "Master basics before advancing to complex skills"
      ]}
      nextGuide="/training/progressive-overload-in-calisthenics"
      nextGuideTitle="Progressive Overload in Calisthenics"
    />
  );
}
