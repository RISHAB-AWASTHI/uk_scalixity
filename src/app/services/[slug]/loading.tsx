export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F2E5DC] flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-lg text-gray-600">Loading service details...</p>
      </div>
    </div>
  );
}
