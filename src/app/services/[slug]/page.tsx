'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import ServiceDetailComponent from '@/app/components/service-detail';
import PopupWrapper from '@/app/components/popup-wrapper';
import { Service, ApiResponse } from '@/app/lib/types';

const ServicePage: React.FC = () => {
  const params = useParams();
  const slug = params?.slug as string;
  
  const [service, setService] = React.useState<Service | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

  React.useEffect(() => {
    if (!slug) return;

    const fetchService = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`${baseURL}/api/website-services/${slug}`);
        const data: ApiResponse<Service> = await response.json();
        
        if (!response.ok || !data.success) {
          throw new Error(data.message || 'Failed to fetch service');
        }
        
        if (!data.data) {
          throw new Error('Service not found');
        }
        
        setService(data.data);
      } catch (err) {
        console.error('Error fetching service:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [slug, baseURL]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F2E5DC] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading service details...</p>
        </div>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="min-h-screen bg-[#F2E5DC] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Service Not Found</h1>
          <p className="text-gray-600 mb-6">
            {error || 'The service you are looking for does not exist or has been removed.'}
          </p>
          <a
            href="/#what-we-offer"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            View All Services
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <ServiceDetailComponent service={service} />
      <PopupWrapper />
    </>
  );
};

export default ServicePage;
