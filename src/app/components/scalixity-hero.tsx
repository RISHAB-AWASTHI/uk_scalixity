"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { usePopup } from "@/app/hooks/use-popup";

export function ScalixityHero() {
  const { openPopup } = usePopup();
  const containerRef = React.useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative overflow-visible flex items-start justify-center h-[800px] sm:h-[900px] md:h-[900px] lg:h-[900px]"
    >
      {/* Wave Animation Background */}
      <motion.div 
        className="absolute bottom-20 sm:bottom-20 lg:bottom-4 xl:bottom-24  2xl:bottom-28 left-0 right-0 z-0 pointer-events-none select-none"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="https://res.cloudinary.com/dxwspucxw/image/upload/v1755497997/e147818fb004d101c1420f0af7214c9d48b88cdc_njjxqf.png"
          alt="Wave Animation"
          width={1245}
          height={498}
          style={{
            transform: 'rotate(-179.597deg)',
            flexShrink: 0,
            aspectRatio: '998/399'
          }}
          className="object-cover"
        />
      </motion.div>

      
      {/* Content Container */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 mx-auto relative z-10 pt-4 sm:pt-6 md:pt-8">
        <div className="py-12 sm:py-16 md:py-20 lg:py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-8 md:gap-1 max-w-[1640px] mx-auto">
          {/* Content Column - Left Side */}
          <motion.div
            className="space-y-4 sm:space-y-6 text-center md:text-left max-w-2xl mx-auto md:mx-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Headline */}
            <motion.h1
              className="mb-1 leading-tight text-black text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[50px] 2xl:text-[56px]"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontWeight: 600,
                fontStyle: 'normal',
                letterSpacing: '0%',
                alignSelf: 'stretch'
              }}
              variants={itemVariants}
            >
              Affordable Tech Solutions Built for UK Businesses
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              className="text-sm sm:text-base lg:text-lg xl:text-xl text-black mb-6 sm:mb-8 max-w-3xl mx-auto md:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              From AI & CRM to Custom tech solutions– we help you scale without overspending. Simple pricing. Local expertise. Big results.
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-xs sm:text-sm md:text-base text-black mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto md:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              At Scalixity, we deliver end-to-end technology solutions that combine innovation, reliability, and market insight. Our expertise spans AI development, CRM automation, E-commerce platforms, GPS tracking systems, and bespoke software tailored to your business goals. 
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start items-center">
              <Button 
                onClick={openPopup}
                className="bg-[#A8B2E7] hover:bg-[#9BA5D9] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-2xl relative overflow-hidden group w-full sm:w-auto"
              >
                <span className="relative z-10">Get in touch</span>
              </Button>
              
              <button 
                onClick={() => window.location.href = 'https://scalixity.com/'}
                className="bg-[#F3F1EB] hover:bg-[#F3F1EB] text-black border border-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-2xl cursor-pointer relative z-10 w-full sm:w-auto"
              >
                Explore more
              </button>
            </motion.div>
          </motion.div>

          {/* Image - Right Side, bound with content via grid */}
          <motion.div
            className="pointer-events-none select-none"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-end justify-center md:justify-end -mb-32 sm:-mb-48 md:-mb-56 lg:-mb-72">
              <Image
                src="/hero.svg"
                alt="Scalixity Tech Solutions"
                width={908}
                height={635}
                style={{
                  width: 'clamp(300px, 60vw, 908px)',
                  height: 'clamp(210px, 42vw, 635px)',
                  flexShrink: 0,
                  aspectRatio: '143/100'
                }}
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}