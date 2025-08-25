"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

export default function ClientTestimonials() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
      content: "Financial planners help people to knowledge in about how to invest and save their moneye the most efficient way eve plan ers help to age people to knowledge in a about how. s plan ers help people to Financial Financia planners help people to knowledge"
    },
    {
      name: "Esther Howard",
      role: "Marketing CEO",
      content: "Financial planners help people to knowledge in about how to invest and save their moneye the most efficient way eve plan ers help to age people to knowledge in a about how. s plan ers help people to Financial Financia planners help people to knowledge"
    },
    {
      name: "Albert Flores",
      role: "President of Sales",
      content: "Financial planners help people to knowledge in about how to invest and save their moneye the most efficient way eve plan ers help to age people to knowledge in a about how. s plan ers help people to Financial Financia planners help people to knowledge"
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-20 xl:py-28 bg-[#E9E7FF]">
      <div className="container max-w-full px-1 mx-auto ">
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

                    {/* Horizontal Scrollable Testimonials Container */}
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 sm:gap-6 lg:gap-8 xl:gap-10 pb-4 pt-8" style={{ minWidth: 'max-content' }}>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    variants={itemVariants}
                    className={`group flex-shrink-0 ${index === 1 ? '-mt-8' : ''}`}
                  >
                    <div className="bg-white p-4 sm:p-6 lg:p-8 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden" style={{ width: '675.766px', height: '424.54px', borderRadius: '15.9px', border: '0.795px solid #CCC' }}>
                      {/* Top-Left Purple Quote Icon */}
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#C47BD1] border-2 border-white">
                        <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>

                      {/* Testimonial Content */}
                      <div className="mt-12 sm:mt-16 mb-6 sm:mb-8">
                        <blockquote className="text-xs sm:text-sm text-gray-700 leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {testimonial.content}
                        </blockquote>
                      </div>

                      {/* Author Information */}
                      <div className="flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full mr-3 sm:mr-4"></div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm sm:text-base" style={{ fontFamily: 'Playfair Display, serif' }}>
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-gray-600" style={{ fontFamily: 'Playfair Display, serif' }}>
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

          {/* Pagination Indicators */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center items-center gap-2 mt-8 sm:mt-12"
          >
            <div className="w-3 h-1 bg-[#C47BD1] rounded-full"></div>
            <div className="w-3 h-1 bg-gray-300 rounded-full"></div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
