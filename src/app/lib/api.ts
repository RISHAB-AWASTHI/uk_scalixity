// Centralized API service for fetching service data
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  heroImage: string;
  features: string[];
  technologies: Array<{ name: string; icon: string }> | string[];
  benefits: string[];
  keywords?: string[];
  pricingPlans?: Record<string, {
    priceRange: string;
    description: string;
    bulletPoints: string[];
  }>;
  pricing?: {
    starting: string;
    description: string;
  };
}

class ApiService {
  private async fetchWithFallback(url: string): Promise<Response> {
    try {
      return await fetch(url, { cache: 'no-store' });
    } catch (error) {
      // If HTTPS fails due to SSL, try HTTP as fallback
      if (url.startsWith('https://') && error instanceof Error && 
          (error.message.includes('certificate') || error.message.includes('SSL'))) {
        console.warn('HTTPS failed, trying HTTP fallback:', error.message);
        const httpUrl = url.replace('https://', 'http://');
        return await fetch(httpUrl, { cache: 'no-store' });
      }
      throw error;
    }
  }

  async getServiceBySlug(slug: string): Promise<Service | null> {
    try {
      console.log('Fetching service:', slug);
      
      const response = await this.fetchWithFallback(`${API_BASE_URL}/api/website-services/${slug}`);
      
      if (!response.ok) {
        console.error(`API Error: ${response.status} ${response.statusText}`);
        return null;
      }
      
      const data = await response.json();
      console.log('Service API Response:', data);
      
      if (!data.success || !data.data) {
        console.error('Service not found in API response');
        return null;
      }

      const service: Service = data.data;

      // Enrich technologies if needed
      if (Array.isArray(service.technologies) && 
          service.technologies.length > 0 && 
          typeof service.technologies[0] === 'string') {
        try {
          const techResponse = await this.fetchWithFallback(`${API_BASE_URL}/api/website-services/${slug}/technologies`);
          if (techResponse.ok) {
            const techData = await techResponse.json();
            if (techData.success && Array.isArray(techData.data)) {
              service.technologies = techData.data;
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

  async getAllServiceSlugs(): Promise<string[]> {
    try {
      console.log('Fetching service slugs');
      
      const response = await this.fetchWithFallback(`${API_BASE_URL}/api/website-services/slugs/all`);
      
      if (!response.ok) {
        console.error(`Slugs API Error: ${response.status} ${response.statusText}`);
        return [];
      }
      
      const data = await response.json();
      console.log('Slugs API Response:', data);
      
      return data.success ? data.data : [];
    } catch (error) {
      console.error('Error fetching service slugs:', error);
      return [];
    }
  }
}

export const apiService = new ApiService();
export type { Service };
