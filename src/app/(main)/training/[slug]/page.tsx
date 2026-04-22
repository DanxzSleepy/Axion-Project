import { trainingGuides } from '@/lib/training-guides-data';
import TrainingGuideLayout from '@/components/features/TrainingGuideLayout';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return trainingGuides.map((guide) => ({
    slug: guide.slug,
  }));
}

export default function TrainingGuidePage({ params }: { params: { slug: string } }) {
  const guide = trainingGuides.find((g) => g.slug === params.slug);

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
