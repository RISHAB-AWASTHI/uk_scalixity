"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Settings, ShoppingCart, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { usePopup } from "@/app/hooks/use-popup";

export default function WhatWeDo() {
  const { openPopup } = usePopup();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentCard, setCurrentCard] = React.useState(0);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const goToCard = (index: number) => {
    setCurrentCard(index);
  };

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
    <section className="relative pt-20 sm:pt-0 px-4 sm:px-8 lg:px-12 py-12 sm:py-8 lg:py-20 xl:py-28 bg-[#F2E5DC]">
      {/* Wave Animation Background */}
      <motion.div 
        className="absolute inset-0 z-0 top-6 sm:top-8 lg:top-20 xl:top-32"
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
      
      <div className="relative z-10 w-full px-2 sm:px-4 lg:px-8 mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-[1640px] mx-auto"
        >
          {/* Get Started Button */}
          <motion.div variants={itemVariants} className="text-center mb-4 sm:mb-6 lg:mb-8">
            <Button 
              onClick={openPopup}
              className="w-full sm:w-auto bg-[#9486D9] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-lg"
            >
              GET STARTED IN A MINUTE
            </Button>
          </motion.div>

          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 text-black" style={{ fontFamily: 'Playfair Display, serif' }}>
            What Scalixity Offers
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-900 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0" style={{ fontFamily: 'Playfair Display, serif' }}>
              Comprehensive technology solutions designed for UK businesses
            </p>
          </motion.div>

          {/* Cards Container */}
          <div className="lg:space-y-20">
            {/* Mobile Single Card View */}
            <div className="lg:hidden relative">
              {/* Arrow Navigation */}
              <div className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20">
                <button
                  onClick={prevCard}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-200 border border-gray-200"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                </button>
              </div>
              
              <div className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20">
                <button
                  onClick={nextCard}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-200 border border-gray-200"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                </button>
              </div>

              {/* Single Card Display */}
              <div className="px-12 sm:px-16">
                <motion.div
                  key={currentCard}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-sm mx-auto"
                >
                  {/* Image Side */}
                  <div className="mb-4 sm:mb-6 lg:mb-8">
                    <div className="relative">
                      <a href="https://scalixity.com/work" className="block">
                        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
                          <img
                            src={cards[currentCard].image}
                            alt={cards[currentCard].imageAlt}
                            className="w-full h-40 sm:h-48 md:h-56 object-cover cursor-pointer"
                          />
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="text-center">
                    <div className="mb-3 sm:mb-4 lg:mb-6">
                                             <motion.div
                         className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#9486D9] rounded-full mb-2 sm:mb-3 lg:mb-4"
                       >
                         {React.createElement(cards[currentCard].icon, { className: "w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" })}
                       </motion.div>
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {cards[currentCard].title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-2 sm:mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {cards[currentCard].benefit}
                      </p>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed mb-2 sm:mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {cards[currentCard].benefit2}
                      </p>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed mb-3 sm:mb-4 lg:mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {cards[currentCard].benefit3}
                      </p>
                      <motion.div
                        className="flex flex-col gap-2 sm:gap-3 lg:gap-4 justify-center"
                      >
                        <Button 
                          asChild
                          className="w-full bg-[#F3F1EB] hover:bg-[#F3F1EB] text-black border border-black px-3 sm:px-4 md:px-6 py-2 text-xs sm:text-sm md:text-base font-semibold rounded-full transition-all duration-300 hover:shadow-lg"
                        >
                          <a href="https://scalixity.com/work">Explore more</a>
                        </Button>
                        
                        <Button 
                          onClick={openPopup}
                          className="w-full bg-[#9486D9] text-white px-3 sm:px-4 md:px-6 py-2 text-xs sm:text-sm md:text-base font-semibold rounded-full transition-all duration-300 hover:shadow-lg"
                        >
                          Get in Touch
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
                {cards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToCard(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentCard 
                        ? 'bg-[#9486D9] scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Vertical Layout */}
            <div className="hidden lg:block space-y-8 sm:space-y-12 lg:space-y-20">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
