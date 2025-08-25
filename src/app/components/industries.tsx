"use client";

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const industries = [
  { name: "Healthcare", icon: "/icons/healthcare.svg", link: "/industries/healthcare" },
  { name: "Fintech", icon: "/icons/finance.svg", link: "/industries/fintech" },
  { name: "Retail", icon: "/icons/retail.svg", link: "/industries/retail" },
  { name: "Manufacturing", icon: "/icons/manufacturing.svg", link: "/industries/manufacturing" },
  { name: "SaaS", icon: "/icons/saas.svg", link: "/industries/saas" },
  { name: "Insurance", icon: "/icons/insurance.svg", link: "/industries/insurance" }
]

export function Industries() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <div className="bg-[#F2E5DC] py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold  sm:mb-6 text-black mb-24 text-center  " style={{ fontFamily: 'Playfair Display, serif' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Industries We Serve
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-14"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {industries.map((industry, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Link href={industry.link} className="block group">
                <div className="bg-white p-6 rounded-2xl text-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl border border-gray-100 hover:border-amber-200 relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon Container */}
                  <div className="relative z-10">
                    <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:from-amber-200 group-hover:to-orange-200 transition-all duration-300">
                      <Image 
                        src={industry.icon} 
                        alt={industry.name} 
                        width={32} 
                        height={32} 
                        className="transition-transform duration-300 group-hover:scale-110" 
                      />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-amber-700 transition-colors duration-300">
                      {industry.name}
                    </h3>
                  </div>
                  
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-300 transition-all duration-500"></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
