import { notFound } from 'next/navigation';
import ServiceDetailComponent from '@/app/components/service-detail';

interface PricingPlan {
  priceRange: string;
  description: string;
  bulletPoints: string[];
}

type PricingPlans = Record<string, PricingPlan>;

interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  heroImage: string;
  features: string[];
  technologies: string[] | { name: string; icon: string }[];
  benefits: string[];
  keywords?: string[];
  pricingPlans?: PricingPlans;
  pricing?: {
    starting: string;
    description: string;
  };
}

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Fetch service by slug from backend API
async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';
    const response = await fetch(`${baseURL}/api/website-services/${slug}`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      return null;
    }
    
    const data = await response.json();
    if (process.env.NODE_ENV !== 'production') {
      console.log('ServicePage API response (/by slug):', JSON.stringify(data));
    }
    const service: Service | null = data.success ? data.data : null;
    if (!service) return null;

    // If technologies are plain strings or missing icons, fetch enriched technologies
    const needsTechIcons = Array.isArray(service.technologies)
      && service.technologies.length > 0
      && typeof service.technologies[0] === 'string';

    if (needsTechIcons) {
      try {
        const techRes = await fetch(`${baseURL}/api/website-services/${slug}/technologies`, { cache: 'no-store' });
        if (techRes.ok) {
          const techJson = await techRes.json();
          if (process.env.NODE_ENV !== 'production') {
            console.log('ServicePage API response (technologies):', JSON.stringify(techJson));
          }
          if (techJson.success && Array.isArray(techJson.data)) {
            (service as any).technologies = techJson.data;
          }
        }
      } catch (e) {
        console.error('Error fetching enriched technologies:', e);
      }
    }

    return service;
  } catch (error) {
    console.error('Error fetching service:', error);
    return null;
  }
}

// Fetch all service slugs from backend API
async function getAllServiceSlugs(): Promise<string[]> {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';
    const response = await fetch(`${baseURL}/api/website-services/slugs/all`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      return [];
    }
    
    const data = await response.json();
    if (process.env.NODE_ENV !== 'production') {
      console.log('ServicePage API response (slugs):', JSON.stringify(data));
    }
    return data.success ? data.data : [];
  } catch (error) {
    console.error('Error fetching service slugs:', error);
    return [];
  }
}

export async function generateStaticParams() {
  const slugs = await getAllServiceSlugs();
  return slugs.map((slug: string) => ({
    slug,
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

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
  const service = await getServiceBySlug(slug);

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