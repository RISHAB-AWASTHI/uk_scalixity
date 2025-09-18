"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface FeatureInfo {
  icon: any;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  detailedInfo: {
    overview: string;
    benefits: string[];
    examples: string[];
    keyPoints: string[];
  };
}

interface InfoModalProps {
  isOpen: boolean;
  feature: FeatureInfo | null;
  onClose: () => void;
}

export default function InfoModal({ isOpen, feature, onClose }: InfoModalProps) {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50,
      transition: {
        duration: 0.3,
        ease: "easeIn" as const
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  if (!feature) return null;

  const IconComponent = feature.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            variants={backdropVariants}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
            variants={modalVariants}
          >
            {/* Header */}
            <motion.div 
              className={`${feature.bgColor} p-6 relative text-white`}
              variants={itemVariants}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {feature.title}
                  </h2>
                  <p className="text-white/90 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
              <motion.div 
                className="p-6 space-y-6"
                variants={itemVariants}
              >
                {/* Overview */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                    Overview
                  </h3>
                  <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                    {feature.detailedInfo.overview}
                  </p>
                </motion.div>

                {/* Benefits */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                    Key Benefits
                  </h3>
                  <motion.ul 
                    className="space-y-3"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                  >
                    {feature.detailedInfo.benefits.map((benefit, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start gap-3"
                        variants={listItemVariants}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                          {benefit}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>

                {/* Examples */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                    Real-World Examples
                  </h3>
                  <motion.div 
                    className="space-y-3"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                  >
                    {feature.detailedInfo.examples.map((example, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                        variants={listItemVariants}
                      >
                        <ArrowRight className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                          {example}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Key Points */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                    Why This Matters
                  </h3>
                  <motion.div 
                    className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                  >
                    {feature.detailedInfo.keyPoints.map((point, index) => (
                      <motion.p 
                        key={index}
                        className="text-gray-700 mb-2 last:mb-0" 
                        style={{ fontFamily: 'Plus Jakarta Sans' }}
                        variants={listItemVariants}
                      >
                        <span className="font-semibold text-gray-900">•</span> {point}
                      </motion.p>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Action Button */}
                <motion.div 
                  variants={itemVariants}
                  className="pt-4 border-t border-gray-200"
                >
                  <Button 
                    onClick={onClose}
                    className="w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white py-3 px-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
                  >
                    Got it, thanks!
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}