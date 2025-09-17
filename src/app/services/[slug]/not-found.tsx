import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Service Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          The service you're looking for doesn't exist. Please check the URL or explore our available services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#what-we-offer"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            View All Services
          </Link>
          <Link
            href="/"
            className="inline-block border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}