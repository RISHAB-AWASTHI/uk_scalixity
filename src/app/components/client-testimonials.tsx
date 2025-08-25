"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function ClientTestimonials() {
  const ref = React.useRef(null);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const testimonials = [
    {
      name: "Leslie Alexander",
      role: "Medical Assistant",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Financial planners help people to knowledge in about how to invest and save their moneye the most efficient way eve plan ers help to age people to knowledge in a about how. s plan ers help people to Financial Financia planners help people to knowledge"
    },
    {
      name: "Esther Howard",
      role: "Marketing CEO",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Financial planners help people to knowledge in about how to invest and save their moneye the most efficient way eve plan ers help to age people to knowledge in a about how. s plan ers help people to Financial Financia planners help people to knowledge"
    },
    {
      name: "Albert Flores",
      role: "President of Sales",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Financial planners help people to knowledge in about how to invest and save their moneye the most efficient way eve plan ers help to age people to knowledge in a about how. s plan ers help people to Financial Financia planners help people to knowledge"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Handle horizontal scroll for desktop
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setScrollProgress(progress);
    }
  };

  return (
    <section className="py-8 sm:py-12 lg:py-20 xl:py-28 bg-[#E9E7FF] overflow-x-hidden">
      <div className="container max-w-full px-4 mx-auto overflow-x-hidden">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-black" style={{ fontFamily: 'Playfair Display, serif' }}>
              Scalixity Success Stories
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0" style={{ fontFamily: 'Playfair Display, serif' }}>
              Trusted by businesses across the UK and internationally
            </p>
          </motion.div>

          {/* Mobile: Single Card Carousel */}
          <div className="block lg:hidden">
            <div className="relative px-12 sm:px-16">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="mx-auto"
              >
                <div className="bg-white p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden rounded-2xl border border-gray-200 w-full max-w-sm mx-auto">
                  {/* Top-Left Purple Quote Icon */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center bg-[#C47BD1] border-2 border-white">
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                  {/* Testimonial Content */}
                  <div className="mt-16 mb-6">
                    <blockquote 
                      className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
                      style={{ 
                        color: '#090F32',
                        fontFeatureSettings: "'liga' off, 'clig' off",
                        fontFamily: 'Plus Jakarta Sans',
                        fontStyle: 'normal',
                        fontWeight: 400
                      }}
                    >
                      {testimonials[currentIndex].content}
                    </blockquote>
                  </div>

                  {/* Author Information */}
                   <div className="flex items-center w-full">
                     <div className="w-12 h-12 rounded-full mr-4 overflow-hidden bg-gray-200 flex-shrink-0">
                       <img 
                         src={testimonials[currentIndex].avatar} 
                         alt={testimonials[currentIndex].name}
                         className="w-full h-full object-cover"
                         loading="lazy"
                         onError={(e) => {
                           e.currentTarget.style.display = 'none';
                           e.currentTarget.parentElement!.innerHTML = `
                             <div class="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                               ${testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                             </div>
                           `;
                         }}
                       />
                     </div>
                     <div className="flex flex-col justify-center flex-1 min-w-0">
                       <h4 className="font-bold text-gray-900 text-sm sm:text-base truncate" style={{ fontFamily: 'Playfair Display, serif' }}>
                         {testimonials[currentIndex].name}
                       </h4>
                       <p className="text-xs sm:text-sm text-gray-600 truncate" style={{ fontFamily: 'Playfair Display, serif' }}>
                         {testimonials[currentIndex].role}
                       </p>
                     </div>
                   </div>
                </div>
              </motion.div>

              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </button>
            </div>

            {/* Dynamic Slide Bar */}
            <div className="flex justify-center items-center mt-4 sm:mt-6">
              <div className="relative w-24 sm:w-32 h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-[#C47BD1] rounded-full transition-all duration-300 ease-out"
                  style={{ 
                    width: `${((currentIndex + 1) / testimonials.length) * 100}%`
                  }}
                />
              </div>
            </div>
          </div>

          {/* Desktop: Horizontal Scrollable Testimonials */}
          <div className="hidden lg:block overflow-x-hidden">
            <div className="relative overflow-x-hidden">
              <div 
                ref={scrollContainerRef}
                className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                onScroll={handleScroll}
              >
                <div className="flex gap-8 xl:gap-10 pb-4 pt-8" style={{ minWidth: 'max-content' }}>
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.name}
                      variants={itemVariants}
                      className={`group flex-shrink-0 ${index === 1 ? '-mt-8' : ''}`}
                    >
                      <div className="bg-white p-6 lg:p-8 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden rounded-2xl border border-gray-200" style={{ minWidth: '320px', maxWidth: '675px', minHeight: '300px' }}>
                        {/* Top-Left Purple Quote Icon */}
                        <div className="absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center bg-[#C47BD1] border-2 border-white">
                          <Quote className="w-6 h-6 text-white" />
                        </div>

                        {/* Testimonial Content */}
                        <div className="mt-16 mb-8">
                          <blockquote 
                            className="text-gray-700 text-lg xl:text-xl leading-relaxed"
                            style={{ 
                              color: '#090F32',
                              fontFeatureSettings: "'liga' off, 'clig' off",
                              fontFamily: 'Plus Jakarta Sans',
                              fontStyle: 'normal',
                              fontWeight: 400
                            }}
                          >
                            {testimonial.content}
                          </blockquote>
                        </div>

                        {/* Author Information */}
                        <div className="flex items-center w-full">
                          <div className="w-12 h-12 rounded-full mr-4 overflow-hidden bg-gray-200 flex-shrink-0">
                            <img 
                              src={testimonial.avatar} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement!.innerHTML = `
                                  <div class="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                                    ${testimonial.name.split(' ').map(n => n[0]).join('')}
                                  </div>
                                `;
                              }}
                            />
                          </div>
                          <div className="flex flex-col justify-center flex-1 min-w-0">
                            <h4 className="font-bold text-gray-900 text-base truncate" style={{ fontFamily: 'Playfair Display, serif' }}>
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-gray-600 truncate" style={{ fontFamily: 'Playfair Display, serif' }}>
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Dynamic Slide Bar */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center items-center mt-12"
            >
              <div className="relative w-48 h-3 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-[#C47BD1] rounded-full transition-all duration-300 ease-out"
                  style={{ 
                    width: `${scrollProgress * 100}%`
                  }}
                />
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
