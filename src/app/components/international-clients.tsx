"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { usePopup } from "@/app/hooks/use-popup";

export default function InternationalClients() {
  const { openPopup } = usePopup();

  return (
    <section className="relative px-12 py-4 xs:py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-28">
      {/* Wave Animation Background */}
      <motion.div 
        className="absolute inset-0 z-0 top-4 xs:top-6 sm:top-8 md:top-12 lg:top-16 xl:top-20 2xl:top-28"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="https://res.cloudinary.com/dxwspucxw/image/upload/v1755492397/c64db3caaf991855741eb60d0246d83665bb85eb_y4uclc.png"
          alt="Wave Animation"
          className="w-full h-auto object-cover opacity-10 blur-sm"
        />
      </motion.div>
      
      <div className="relative max-w-[1640px] z-10 container mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center  mx-auto"
        >
          <div
            className="bg-[#E2E8F0] rounded-lg xs:rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16 relative overflow-hidden"
          >
                                                                                                                                                                                                                                                                                                                                                                                                                               {/* Ellipse Rings in Bottom Right Corner */}
                 <div className="absolute bottom-0 right-0 z-0">
                                     {/* Outer ring (Ellipse 19) - lighter grey */}
                   <img
                     src="/images/Ellipse 19.png"
                     alt="Ellipse Ring"
                     className="w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80"
                     style={{
                       transform: 'translate(25%, 25%)'
                     }}
                   />
                                     {/* Inner ring (Ellipse 20) - darker */}
                   <img
                     src="/images/Ellipse 20.png"
                     alt="Ellipse Ring"
                     className="absolute w-24 h-24 xs:w-32 xs:h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72"
                     style={{
                       transform: 'translate(25%, 25%)'
                     }}
                   />
                 </div>
            <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4 xs:mb-5 sm:mb-6 md:mb-8 text-left" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
              International Clients
            </h3>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl text-black max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl leading-relaxed mb-3 xs:mb-4 sm:mb-5 md:mb-6 px-1 xs:px-2 sm:px-0 text-left font-poppins font-normal">
              While we serve clients globally, our solutions reach businesses everywhere. From major cities to emerging markets, we deliver technology that transcends borders while maintaining local compliance and support.
            </p>
           
                                                   {/* Client Logos with Map Icons */}
              <div className="flex flex-wrap justify-start items-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-4 xs:mb-5 sm:mb-6 md:mb-8">
                <div className="flex items-center gap-1 xs:gap-2">
                  <svg className="w-3 h-3 xs:w-4 xs:h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-black text-xs xs:text-sm sm:text-base font-normal" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>UK Clients</span>
                </div>
                <div className="flex items-center gap-1 xs:gap-2">
                  <svg className="w-3 h-3 xs:w-4 xs:h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-black text-xs xs:text-sm sm:text-base font-normal" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>European Markets</span>
                </div>
                <div className="flex items-center gap-1 xs:gap-2">
                  <svg className="w-3 h-3 xs:w-4 xs:h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-black text-xs xs:text-sm sm:text-base font-normal" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>Asia Pacific</span>
                </div>
                <div className="flex items-center gap-1 xs:gap-2">
                  <svg className="w-3 h-3 xs:w-4 xs:h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-black text-xs xs:text-sm sm:text-base font-normal" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>North America</span>
                </div>
              </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ 
                scale: 0.95,
                y: 0
              }}
              transition={{ 
                duration: 0.3,
                ease: "easeOut"
              }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start items-center"
            >
              <Button 
                onClick={openPopup}
                className="w-auto bg-[#9486D9] hover:bg-[#9BA5D9] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-lg"
              >
                Join Our Success Stories
              </Button>
              
              <Button 
                asChild
                className="w-auto bg-[#D8E0F0] hover:bg-[#D8E0F0] text-black border border-black px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-lg"
              >
                <a href="https://scalixity.com/industries">Explore</a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}