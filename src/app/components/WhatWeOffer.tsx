"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "../lib/services-data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const WhatWeOffer: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const services = servicesData.map((s) => ({
    id: s.id,
    title: s.title,
    // prefer heroImage for carousel visuals, fallback to image
    image: s.heroImage || s.image,
    link: `/services/${s.slug}`,
  }));

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
            {services[activeIndex]?.title}
          </h3>
        </div>

        {/* Swiper Carousel */}
        <div className="relative overflow-hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
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
                <Link href={service.link} className="block">
                  <div className="rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="aspect-[4/3] w-full relative">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                        quality={100}
                        className="object-contain shadow-2xl rounded-xl"
                        priority={service.id === services[0].id}
                        unoptimized={true}
                      />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

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
