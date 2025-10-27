"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { usePopup } from "@/app/hooks/use-popup";

interface Resource {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  thumbnail?: string;
}

export default function Resources() {
  const { openPopup, isOpen, closePopup } = usePopup();
  const [selectedResource, setSelectedResource] = React.useState<Resource | null>(null);
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });


  const resources: Resource[] = [
    {
      id: "1",
      title: "Scalixity  Guide 2025",
      description: "Comprehensive guide to our technology solutions and services",
      fileUrl: "/images/Scalixity.pdf",
      thumbnail: "/images/Scalixity.png"
    }
  ];

  const handleResourceClick = (resource: Resource) => {
    setSelectedResource(resource);
    // Always show popup form - let the useEffect handle PDF opening after form submission
    openPopup();
  };


  // Listen for form submission success from sessionStorage
  React.useEffect(() => {
    const checkFormSubmission = () => {
      const submitted = sessionStorage.getItem('formSubmitted');
      if (submitted === 'true' && selectedResource && !formSubmitted) {
        // Form was submitted (either just now or in previous session), open the PDF
        setFormSubmitted(true);
        // Clear the sessionStorage immediately to prevent multiple triggers
        sessionStorage.removeItem('formSubmitted');
        setTimeout(() => {
          // Create a download link and trigger download
          const link = document.createElement('a');
          link.href = selectedResource.fileUrl;
          link.download = selectedResource.title + '.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          
          setSelectedResource(null);
          setFormSubmitted(false);
        }, 100);
      }
    };

    checkFormSubmission();
    const interval = setInterval(checkFormSubmission, 500);
    return () => clearInterval(interval);
  }, [isOpen, selectedResource, formSubmitted]);

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
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="relative px-4 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-[#F2E5DC] to-white">
      <div className="relative z-10 w-full px-2 sm:px-4 lg:px-8 mx-auto max-w-full">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-full mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              Resources 
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              Access our comprehensive guides, frameworks, and documentation to help you succeed
            </p>
          </motion.div>

          {/* Resources Container */}
          <div className="flex justify-center">
            <div className="max-w-md w-full">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  data-resource-card
                  variants={itemVariants}
                  className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 border border-gray-100 w-full shadow-lg hover:shadow-xl"
                >
                  {/* Thumbnail with Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={resource.thumbnail}
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    {/* File Icon Overlay */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <FileText className="w-6 h-6 text-[#9486D9]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#9486D9] transition-colors duration-300" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {resource.description}
                    </p>

                    {/* Action Button */}
                    <div className="flex justify-center">
                      <Button
                        onClick={() => handleResourceClick(resource)}
                        className="bg-[#9486D9] hover:bg-[#7B6CC8] text-white px-6 py-2 text-sm rounded-full transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group/btn"
                      >
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        Download
                      </Button>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#9486D9]/0 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Info Text */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <p className="text-sm text-gray-500 italic" style={{ fontFamily: 'Playfair Display, serif' }}>
              * Click &quot;Download&quot; to access the PDF after completing a quick contact form
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
