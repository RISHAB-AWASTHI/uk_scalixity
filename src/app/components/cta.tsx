"use client";

import * as React from "react";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { usePopup } from "@/app/hooks/use-popup";

export default function ScalixityCTA() {
  const { openPopup } = usePopup();

  return (
    <section 
      className="py-6 sm:py-8 lg:py-12 px-3 sm:px-16 bg-[#F2E5DC]"
    >
      <div className="container max-w-[1640px] px-10 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8 mx-auto">
          
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left lg:pr-4">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#090F32] mb-4 sm:mb-6 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif',fontWeight: 500}}
            >
              Ready to Scale Your Business?
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-black mb-6 sm:mb-8 leading-relaxed font-medium max-w-lg sm:max-w-xl lg:max-w-none px-2 sm:px-0">
              Get affordable tech solutions that deliver real results. No overspending, just smart solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-4 sm:mb-6">
              <Button 
                onClick={openPopup}
                className="w-auto bg-[#9486D9] hover:bg-[#9BA5D9] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-full shadow-sm"
              >
                Let&apos;s Scale Together
              </Button>
              
              <Link href="https://scalixity.com/services">
                <Button 
                  className="w-auto bg-[#F3F1EB] hover:bg-[#F3F1EB] text-black border border-black px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-full shadow-sm"
                >
                  View Solutions
                </Button>
              </Link>
            </div>
            
            <p className="text-sm sm:text-base text-gray-600 max-w-lg lg:max-w-none px-2 sm:px-0">
            Delivering affordable tech solutions that help businesses scale without overspending.
            </p>
          </div>
          
                     {/* Right Side - Image */}
           <div className="flex-1 flex justify-center lg:justify-start">
             <div className="w-full max-w-sm sm:max-w-md lg:max-w-xl xl:max-w-2xl h-full flex items-center">
               <img
                 src="/images/readytoscale.svg"
                 alt="Ready to Scale"
                 className="w-full h-full object-contain -mt-4 sm:-mt-8 lg:-mt-12 xl:-mt-16 -mb-4 sm:-mb-8 lg:-mb-12 xl:-mb-16 -mr-4 sm:-mr-8 lg:-mr-12 xl:-mr-16"
                 style={{ minHeight: '250px' }}
               />
             </div>
           </div>
          
        </div>
      </div>
    </section>
  );
}
