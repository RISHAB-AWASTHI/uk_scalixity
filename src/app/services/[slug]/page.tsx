import { notFound } from 'next/navigation';
import ServiceDetailComponent from '@/app/components/service-detail';
import { apiService, type Service } from '@/app/lib/api';

export const dynamic = 'force-dynamic';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await apiService.getAllServiceSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  console.log('Rendering service page for slug:', slug);
  
  const service = await apiService.getServiceBySlug(slug);

  if (!service) {
    console.error('Service not found, showing 404');
    notFound();
  }

  console.log('Service found, rendering page');
  return (
    <div className="min-h-screen bg-[#F2E5DC] overflow-x-hidden">
      <ServiceDetailComponent service={service} />
    </div>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await apiService.getServiceBySlug(slug);

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