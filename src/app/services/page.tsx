import { apiService } from '@/app/lib/api';
import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default async function ServicesPage() {
  const services = await apiService.getAllServiceSlugs();
  
  return (
    <div className="min-h-screen bg-[#F2E5DC] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of technology solutions designed to drive your business forward.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((slug) => (
            <Link
              key={slug}
              href={`/services/${slug}`}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 capitalize">
                  {slug.replace(/-/g, ' ')}
                </h3>
                <p className="text-gray-600">
                  Learn more about our {slug.replace(/-/g, ' ')} services
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
