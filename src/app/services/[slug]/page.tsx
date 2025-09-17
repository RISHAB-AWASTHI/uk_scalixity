import { notFound } from 'next/navigation';
import ServiceDetailComponent from '@/app/components/service-detail';
// Update the import path to the correct location of services-data
import { getServiceBySlug, getAllServiceSlugs } from '@/app/lib/services-data';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug: string) => ({
    slug,
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F2E5DC]">
      <ServiceDetailComponent service={service} />
    </div>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | Scalixity`,
    description: service.description,
    keywords: service.keywords?.join(', '),
  };
}