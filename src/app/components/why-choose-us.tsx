"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Building2, PoundSterling, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { usePopup } from "@/app/hooks/use-popup";

export default function WhyChooseUs() {
  const { openPopup } = usePopup();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const features = [
    {
      icon: Building2,
      title: "UK-Registered Company",
      description: "Fully compliant with UK regulations and business standards",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500"
    },
    {
      icon: PoundSterling,
      title: "Local GBP Pricing",
      description: "No currency conversion fees, transparent pricing in British Pounds",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500"
    },
    {
      icon: TrendingUp,
      title: "Scalable for Startups & SMEs",
      description: "Solutions that grow with your business, from startup to enterprise",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance whenever you need us",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-500"
    }
  ];

  return (
    <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-[#F2E5DC] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full opacity-90"></div>
        {/* You can add an actual background image here */}
        {/* <img 
          src="/images/background-pattern.svg" 
          alt="Background Pattern"
          className="w-full h-full object-cover opacity-10"
        /> */}
      </div>

      <div className="relative z-10 max-w-[1640px] mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16 lg:mb-20 px-2 sm:px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-black leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Why Partner with Scalixity
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-900 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0" style={{ fontFamily: 'Playfair Display, serif' }}>
              UK-focused technology solutions designed for British businesses
            </p>
          </motion.div>

          {/* Overlay Cards Container */}
          <div className="relative flex items-center justify-center">
            {/* Background Pattern or Image Placeholder */}
           

            {/* Cards Grid */}
            <div className="relative py-8 sm:py-10 lg:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-8 max-w-[1640px] mx-auto w-full px-2 sm:px-4">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="group cursor-pointer relative"
                  whileHover={{ 
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  onClick={openPopup}
                >
                  {/* Floating Icon */}
                  <div
                    className={`absolute -top-6 sm:-top-8 md:-top-10 lg:-top-12 left-1/2 transform -translate-x-1/2 z-20 w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-2xl ${feature.bgColor} shadow-lg flex items-center justify-center transition-transform duration-300 ease-out group-hover:translate-y-2`}
                  >
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>

                  {/* Card */}
                  <div className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 shadow-xl transition-all duration-300 border border-gray-100 relative z-10 h-full min-h-[240px] sm:min-h-[280px] md:min-h-[300px] lg:min-h-[320px] xl:min-h-[360px] group-hover:bg-[#E9E7FF]">
                    {/* Content */}
                    <div className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 flex flex-col h-full">
                      <h3 className="mb-3 sm:mb-4 leading-tight text-center text-base sm:text-lg md:text-xl lg:text-2xl font-semibold" style={{ 
                        color: 'var(--900, #090F32)',
                        fontFeatureSettings: "'liga' off, 'clig' off",
                        fontFamily: '"Plus Jakarta Sans"',
                        fontStyle: 'normal',
                        lineHeight: '1.4'
                      }}>
                        {feature.title}
                      </h3>
                      <p className="mb-4 sm:mb-5 md:mb-6 flex-1 text-center text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed" style={{ 
                        color: 'var(--800, #4F4F4F)',
                        fontFeatureSettings: "'liga' off, 'clig' off",
                        fontFamily: '"Plus Jakarta Sans"',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '1.5'
                      }}>
                        {feature.description}
                      </p>

                      {/* Learn More Link */}
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2 cursor-pointer group mt-auto justify-center"
                        onClick={openPopup}
                      >
                        <span className="text-xs sm:text-sm md:text-base lg:text-lg text-black font-medium hover:underline">Learn More</span>
                        <span className="text-sm sm:text-base md:text-lg lg:text-xl text-black group-hover:translate-x-1 transition-transform duration-200">→</span>
                      </motion.div>

                      {/* Hover Effect Line */}
                      <motion.div
                        className="h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mt-3 sm:mt-4"
                        initial={{ width: "0%" }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional UK Focus Message */}
          <motion.div
            variants={itemVariants}
            className="mt-12 sm:mt-16 lg:mt-20 px-2 sm:px-4"
          >
            <motion.div
              className="bg-[#E9E7FF] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12"
            >
              <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                {/* Left Side - Content */}
                <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black mb-3 sm:mb-4 mt-4 sm:mt-0 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Built for the UK Market
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0" style={{ fontFamily: 'Playfair Display, serif' }}>
                    We understand the unique challenges and opportunities facing UK businesses. Our solutions are tailored to meet local regulations, 
                    business practices, and market demands, ensuring you get technology that works seamlessly in the British business environment.
                  </p>
                  
                  <div
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center lg:items-start"
                  >
                    <Button 
                      onClick={openPopup}
                      className="w-full sm:w-auto bg-[#9B7BB8] hover:bg-[#8A6AA7] text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-lg"
                    >
                      Start Your UK Journey
                    </Button>
                    
                    <Button 
                      asChild
                      className="w-full sm:w-auto bg-[#A8B2E7] hover:bg-[#A8B2E7] text-black border border-black px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-lg"
                    >
                      <a href="https://scalixity.com/blog/future-of-generative-ai">Explore more</a>
                    </Button>
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2">
                  <img
                    src="/ukmarket.svg"
                    alt="UK Market Technology Solutions"
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
