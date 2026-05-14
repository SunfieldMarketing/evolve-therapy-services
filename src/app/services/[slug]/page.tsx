import { services } from '@/data/services';
import ServiceDetailClient from './ServiceDetailClient';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const service = services[slug as keyof typeof services];

  if (!service) return notFound();

  return <ServiceDetailClient service={service} slug={slug} />;
}
