"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Settings, ShoppingCart, MapPin } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { usePopup } from "@/app/hooks/use-popup";

export default function WhatWeDo() {
  const { openPopup } = usePopup();
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



  const cards = [
    {
      title: "CRM & Automation",
      benefit: "Streamline your business processes with intelligent automation",
      benefit2: "Reduce manual tasks and increase productivity with AI-powered workflows",
      benefit3: "Get real-time insights and analytics to make data-driven decisions",
      icon: Settings,
      image: "https://res.cloudinary.com/dxwspucxw/image/upload/v1755492180/6d7573ff22f8ac53977db859067168d5e2b50203_hk2sli.png",
      imageAlt: "CRM Automation Solutions"
    },
    {
      title: "E-commerce Solutions",
      benefit: "Build powerful online stores that convert visitors to customers",
      benefit2: "Optimize user experience with responsive design and fast loading",
      benefit3: "Integrate payment gateways and inventory management seamlessly",
      icon: ShoppingCart,
      image: "https://res.cloudinary.com/dxwspucxw/image/upload/v1755492218/1900800dab2e796ed09fd07754320cf472145861_xiwlu2.png",
      imageAlt: "E-commerce Solutions"
    },
    {
      title: "Custom tech Solutions",
      benefit: "Tailored software development for your unique business needs",
      benefit2: "Scalable applications built with modern technologies and best practices",
      benefit3: "Ongoing support and maintenance to ensure long-term success",
      icon: MapPin,
      image: "https://res.cloudinary.com/dxwspucxw/image/upload/v1755492169/5f0bafd00f4e0e3b31b751942c046110b75271ea_iuira2.png",
      imageAlt: "Custom Software Solutions"
    }
  ];

  return (
    <section className="relative px-12 py-8 sm:py-12 lg:py-20 xl:py-28 bg-[#F2E5DC]">
      {/* Wave Animation Background */}
      <motion.div 
        className="absolute inset-0 z-0 top-8 sm:top-12 lg:top-20 xl:top-32"
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <img
          src="https://res.cloudinary.com/dxwspucxw/image/upload/v1755492397/c64db3caaf991855741eb60d0246d83665bb85eb_y4uclc.png"
          alt="Wave Animation"
          className="w-full h-auto object-cover opacity-10 blur-sm"
        />
      </motion.div>
      
      <div className="relative z-10 w-full px-3 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-[1640px] mx-auto"
        >
          {/* Get Started Button */}
          <motion.div variants={itemVariants} className="text-center mb-6 sm:mb-8">
            <Button 
              onClick={openPopup}
              className="w-full sm:w-auto bg-[#9486D9]  text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-lg"
            >
              GET STARTED IN A MINUTE
            </Button>
          </motion.div>

          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-black" style={{ fontFamily: 'Playfair Display, serif' }}>
            What Scalixity Offers
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0" style={{ fontFamily: 'Playfair Display, serif' }}>
              Comprehensive technology solutions designed for UK businesses
            </p>
          </motion.div>

          {/* Cards Container */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-20">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={itemVariants}
                className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 ${
                  index === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-4 sm:mb-6">
                    <motion.div
                      className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-[#9486D9] rounded-full mb-3 sm:mb-4"
                    >
                      <card.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {card.title}
                    </h3>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-2 sm:mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {card.benefit}
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-2 sm:mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {card.benefit2}
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {card.benefit3}
                    </p>
                    <motion.div
                      className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                    >
                      <Button 
                        asChild
                        className="w-full sm:w-auto bg-[#F3F1EB] hover:bg-[#F3F1EB] text-black border border-black px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 hover:shadow-lg"
                      >
                        <a href="https://scalixity.com/work">Explore more</a>
                      </Button>
                      
                      <Button 
                        onClick={openPopup}
                        className="w-full sm:w-auto bg-[#9486D9]  text-white px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 hover:shadow-lg"
                      >
                        Get in Touch
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {/* Image Side */}
                <div className="flex-1">
                  <div className="relative">
                    <a href="https://scalixity.com/work" className="block">
                      <div className={`relative overflow-hidden ${
                        index === 1 ? '' : 'rounded-2xl sm:rounded-3xl'
                      }`}>
                        <img
                          src={card.image}
                          alt={card.imageAlt}
                          className="w-full h-64 sm:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] object-cover cursor-pointer"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
            

          </div>
        </motion.div>
      </div>
    </section>
  );
}
