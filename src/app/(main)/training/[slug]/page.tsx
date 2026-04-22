import { trainingGuides } from '@/lib/training-guides-data';
import TrainingGuideLayout from '@/components/features/TrainingGuideLayout';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return trainingGuides.map((guide) => ({
    slug: guide.slug,
  }));
}

export default async function TrainingGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const guide = trainingGuides.find((g) => g.slug === resolvedParams.slug);

  if (!guide) {
    notFound();
  }

  return (
    <TrainingGuideLayout
      title={guide.title}
      category={guide.category}
      readTime={guide.readTime}
      sections={guide.sections}
      keyTakeaways={guide.keyTakeaways}
      nextGuide={guide.nextGuide}
      previousGuide={guide.previousGuide}
    />
  );
}
