// Service-related types matching the backend API response

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  heroImage: string;
  features: string[];
  technologies: Array<{ name: string; icon: string }>;
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

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

export interface ServiceCarouselItem {
  id: string;
  slug: string;
  title: string;
  image: string;
}
