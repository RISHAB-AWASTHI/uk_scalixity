"use client";

import React from "react";
import { motion } from "framer-motion";

export function ScalixityDashboardAnalytics() {
  return (
    <section className="relative bg-[#F2E5DC] flex items-center justify-center overflow-hidden min-h-0 md:min-h-screen">
      {/* Wave Animation Background */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 z-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="https://res.cloudinary.com/dxwspucxw/image/upload/v1755492397/c64db3caaf991855741eb60d0246d83665bb85eb_y4uclc.png"
          alt="Wave Animation"
          className="w-full h-auto object-cover scale-x-[-1] opacity-15 blur-sm"
        />
      </motion.div>

      {/* Dashboard Image - Centered */}
      <motion.div
        className="relative z-10 flex items-center justify-center mt-0 md:mt-16 mx-3 sm:mx-4 md:mx-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="https://res.cloudinary.com/dxwspucxw/image/upload/v1755593092/UI_screen_iodnip.png"
          alt="Scalixity Dashboard Analytics"
          className="max-w-5xl w-full h-auto object-contain shadow-2xl rounded-lg"
        />
      </motion.div>
    </section>
  );
}