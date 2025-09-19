import { notFound } from 'next/navigation';
import ServiceDetailComponent from '@/app/components/service-detail';

export const dynamic = 'force-dynamic';

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
    let baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';
    
    // If using HTTPS and it fails, try HTTP as fallback
    if (baseURL.startsWith('https://') && process.env.NODE_ENV === 'production') {
      try {
        console.log('Fetching service from:', `${baseURL}/api/website-services/${slug}`);
        const response = await fetch(`${baseURL}/api/website-services/${slug}`, {
          cache: 'no-store'
        });
        
        if (!response.ok) {
          console.error(`API Error: ${response.status} ${response.statusText}`);
          return null;
        }
        
        const data = await response.json();
        console.log('API Response:', data);
        
        const service: Service | null = data.success ? data.data : null;
        if (!service) {
          console.error('Service not found in API response');
          return null;
        }
        
        return service;
      } catch (httpsError) {
        console.warn('HTTPS failed, trying HTTP fallback:', httpsError instanceof Error ? httpsError.message : String(httpsError));
        baseURL = baseURL.replace('https://', 'http://');
      }
    }
    
    console.log('Fetching service from:', `${baseURL}/api/website-services/${slug}`);
    
    const response = await fetch(`${baseURL}/api/website-services/${slug}`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      console.error(`API Error: ${response.status} ${response.statusText}`);
      return null;
    }
    
    const data = await response.json();
    console.log('API Response:', data);
    
    const service: Service | null = data.success ? data.data : null;
    if (!service) {
      console.error('Service not found in API response');
      return null;
    }

    // If technologies are plain strings or missing icons, fetch enriched technologies
    const needsTechIcons = Array.isArray(service.technologies)
      && service.technologies.length > 0
      && typeof service.technologies[0] === 'string';

    if (needsTechIcons) {
      try {
        const techRes = await fetch(`${baseURL}/api/website-services/${slug}/technologies`, { cache: 'no-store' });
        if (techRes.ok) {
          const techJson = await techRes.json();
          
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
    console.log('Fetching slugs from:', `${baseURL}/api/website-services/slugs/all`);
    
    const response = await fetch(`${baseURL}/api/website-services/slugs/all`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      console.error(`Slugs API Error: ${response.status} ${response.statusText}`);
      return [];
    }
    
    const data = await response.json();
    console.log('Slugs API Response:', data);
    
    return data.success ? data.data : [];
  } catch (error) {
    console.error('Error fetching service slugs:', error);
    // Return empty array to prevent build failure
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
  console.log('Rendering service page for slug:', slug);
  
  const service = await getServiceBySlug(slug);

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