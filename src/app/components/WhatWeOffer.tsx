"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { ServiceCarouselItem } from "@/app/lib/types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const WhatWeOffer: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [services, setServices] = React.useState<ServiceCarouselItem[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

  // Fallback image for empty or missing images
  const fallbackImage = '/placeholder.svg';

  React.useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const fetchServices = async () => {
      try {
        const res = await fetch(`${baseURL}/api/website-services/carousel`, { signal: controller.signal });
        if (!res.ok) throw new Error('Failed to load services');
        const json = await res.json();
        const rawData: Array<{ id: string; slug: string; title: string; image?: string; heroImage?: string; }> = json?.data || [];
        // Handle both 'image' and 'heroImage' field names from backend
        const data = rawData.map(item => ({
          id: item.id,
          slug: item.slug,
          title: item.title,
          image: item.image || item.heroImage || ''
        }));
        if (isMounted) {
          setServices(data);
          setIsLoading(false);
        }
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          console.error('WhatWeOffer fetch error:', err);
        }
        if (isMounted) setIsLoading(false);
      }
    };
    fetchServices();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [baseURL]);

  return (
  <section id="what-we-offer" className="py-16 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2
            className="mb-1 leading-tight text-black text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[50px] 2xl:text-[56px] font-bold mb-4"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 600,
              fontStyle: 'normal',
              letterSpacing: '0%'
            }}
          >
            What Scalixity offers to You
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>

        {/* Dynamic Service Heading */}
        <div className="text-center mb-8">
          <h3
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-black font-semibold transition-all duration-500 mb-2"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 600,
              fontStyle: 'normal',
              letterSpacing: '0%'
            }}
          >
            {services[activeIndex]?.title || 'Our Services'}
          </h3>
        </div>

        {/* Swiper Carousel */}
        <div className="relative overflow-hidden">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="w-8 h-8 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : services.length === 0 ? (
            <div className="flex items-center justify-center h-64 text-gray-500">
              <p>No services available at the moment.</p>
            </div>
          ) : (
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1.2}
              centeredSlides={true}
              loop={services.length > 2}
              autoplay={services.length > 1 ? {
                delay: 4000,
                disableOnInteraction: false,
              } : false}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1.3,
                  spaceBetween: 40,
                },
                768: {
                  slidesPerView: 1.4,
                  spaceBetween: 50,
                },
                1024: {
                  slidesPerView: 1.5,
                  spaceBetween: 60,
                },
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.realIndex);
              }}
              className="pb-12"
            >
              {services.map((service) => (
                <SwiperSlide key={service.id}>
                  <Link href={`/services/${service.slug}`} className="block">
                    <div className="rounded-xl overflow-hidden transition-all duration-300 hover:scale-102 cursor-pointer">
                      <div className="aspect-[4/3] w-full relative">
                        <Image
                          src={service.image || fallbackImage}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                          quality={100}
                          className="object-contain shadow-2xl rounded-xl bg-gray-100"
                          priority={services.length > 0 && service.id === services[0].id}
                          unoptimized={true}
                        />
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {/* Custom Pagination Styles */}
          <style jsx global>{`
            .swiper-pagination {
              position: relative !important;
              margin-top: 2rem;
            }
            
            .swiper-pagination-bullet {
              width: 12px !important;
              height: 12px !important;
              background: #cbd5e1 !important;
              opacity: 1 !important;
              margin: 0 6px !important;
              transition: all 0.3s ease !important;
            }
            
            .swiper-pagination-bullet-active {
              background: #7c3aed !important; /* Tailwind purple-600 */
              transform: scale(1.3) !important;
            }
            
            .swiper-pagination-bullet:hover {
              background: #6d28d9 !important; /* Tailwind purple-700 */
            }

            .swiper-slide {
              transition: all 0.3s ease !important;
            }

            .swiper-slide:not(.swiper-slide-active) {
              opacity: 0.7 !important;
              transform: scale(0.9) !important;
            }

            .swiper-slide-active {
              opacity: 1 !important;
              transform: scale(1) !important;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
