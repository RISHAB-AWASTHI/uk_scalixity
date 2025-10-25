"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Building2, PoundSterling, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useInfoModal } from "@/app/hooks/use-info-modal";

export default function WhyChooseUs() {
  const { openInfoModal, isOpen, selectedFeature, closeInfoModal } = useInfoModal();
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
      title: "Registered Company",
      description: "Fully compliant with regulations and business standards",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500",
      detailedInfo: {
        overview: "As a fully registered company, Scalixity operates under the highest standards of business compliance and governance. Our registration ensures that all our operations, data handling, and service delivery meet the strict regulatory requirements expected in the market.",
        benefits: [
          "Full compliance with GDPR and data protection laws",
          "Registered with regulatory authorities for complete transparency",
          "Legal framework protects your business interests",
          "Seamless integration with business practices and culture",
          "Local accountability and dispute resolution processes"
        ],
        examples: [
          "GDPR-compliant data handling for all customer information",
          "Tax registration for proper invoicing and compliance",
          "Employment law compliance for team members",
          "Financial regulations adherence for payment processing"
        ],
        keyPoints: [
          "Your business data stays within jurisdiction with proper legal protections",
          "No complex international contract negotiations or legal complications",
          "Direct accountability under law provides peace of mind for partnerships"
        ]
      }
    },
    {
      icon: PoundSterling,
      title: "Local Currency Pricing",
      description: "No currency conversion fees, transparent pricing in local currency",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500",
      detailedInfo: {
        overview: "All our services are priced transparently in local currency, eliminating the uncertainty and additional costs associated with currency conversion. This means predictable budgeting and no surprise charges on your invoices.",
        benefits: [
          "No hidden currency conversion fees or fluctuation charges",
          "Predictable monthly and project costs for better budgeting",
          "Local bank account compatibility for seamless payments",
          "Tax handling according to local regulations",
          "Local payment methods including direct debit and bank transfers"
        ],
        examples: [
          "Monthly subscriptions billed directly in local currency without conversion",
          "Project quotes provided in local currency with no exchange rate surprises",
          "Local payment methods like direct debit and bank transfers accepted",
          "Proper tax invoicing for business tax purposes"
        ],
        keyPoints: [
          "Typical currency conversion fees can add 2-4% to overseas service costs",
          "Exchange rate fluctuations can make budgeting unpredictable with foreign providers",
          "Local banking integration makes payment processing faster and more reliable"
        ]
      }
    },
    {
      icon: TrendingUp,
      title: "Scalable for Startups & SMEs",
      description: "Solutions that grow with your business, from startup to enterprise",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500",
      detailedInfo: {
        overview: "Our technology solutions are specifically designed to scale with startups and SMEs. We understand the unique challenges of growing businesses and provide flexible, cost-effective solutions that evolve with your needs without requiring complete overhauls.",
        benefits: [
          "Modular architecture allows adding features as you grow",
          "Cost-effective starter packages for early-stage businesses",
          "Seamless migration paths from basic to advanced features",
          "No vendor lock-in - own your data and code",
          "SME-focused support and understanding of local market challenges"
        ],
        examples: [
          "Start with a basic website, scale to e-commerce, then add enterprise features",
          "Begin with cloud hosting for 100 users, scale to thousands seamlessly",
          "Launch with essential features, add advanced analytics and integrations later",
          "Prototype with basic tools, evolve to full production systems"
        ],
        keyPoints: [
          "SMEs need solutions that don't require massive upfront investments",
          "Many providers focus on large enterprises, leaving smaller businesses underserved",
          "Our flexible approach means you only pay for what you need, when you need it"
        ]
      }
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance whenever you need us",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-500",
      detailedInfo: {
        overview: "Our comprehensive 24/7 support ensures your business operations never stop. With local support staff who understand business hours and requirements, plus global coverage for urgent issues, you're never left without assistance.",
        benefits: [
          "Local business hours coverage with local support staff",
          "Emergency support available outside business hours",
          "Multiple communication channels (phone, email, chat, ticket system)",
          "Proactive monitoring and issue prevention",
          "Knowledge base and self-service options for quick solutions"
        ],
        examples: [
          "Critical system issues resolved within 1 hour during business hours",
          "Late-night deployment support for minimal business disruption",
          "Weekend emergency response for mission-critical applications",
          "Proactive monitoring alerts prevent issues before they impact users"
        ],
        keyPoints: [
          "Businesses can't afford extended downtime in today's competitive market",
          "Local support staff understand business culture and communication styles",
          "Global coverage ensures support even during holidays and weekends"
        ]
      }
    }
  ];

  return (
    <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-[#F2E5DC] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dxwspucxw/image/upload/v1755618459/c64db3caaf991855741eb60d0246d83665bb85eb_kyxwpb.png"
          alt="Wave Background"
          className="w-full h-full object-cover"
          style={{ opacity: 0.7 }}
        />
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
              Technology solutions tailored for global enterprises
            </p>
          </motion.div>

          {/* Overlay Cards Container */}
          <div className="relative flex items-center justify-center">
            {/* Transparent Wave Background */}
            {/* <img
              src="https://res.cloudinary.com/dxwspucxw/image/upload/v1755660443/vecteezy_abstract-wave-background-minimal-white-geometric-wallpaper_9799009_lu9ftk.png"
              alt="Wave Background"
              className="absolute left-0 right-0 top-0 w-full h-full object-cover z-0 pointer-events-none select-none"
              style={{ opacity: 0.7 }}
            /> */}
            {/* Cards Grid */}
            <div className="relative py-8 sm:py-10 lg:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-8 max-w-[1640px] mx-auto w-full px-2 sm:px-4 z-10">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="group cursor-pointer relative"
                  whileHover={{ 
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  onClick={() => openInfoModal(feature)}
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
                        onClick={() => openInfoModal(feature)}
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
                    Built for the  Market
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0" style={{ fontFamily: 'Playfair Display, serif' }}>
                    We understand the unique challenges and opportunities facing businesses. Our solutions are tailored to meet local regulations, 
                    business practices, and market demands, ensuring you get technology that works seamlessly in your business environment.
                  </p>
                  
                  <div
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center lg:items-start"
                  >
                    <Button 
                      onClick={() => openInfoModal(features[0])}
                      className="w-full sm:w-auto bg-[#9B7BB8] hover:bg-[#8A6AA7] text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-lg"
                    >
                      Start Your Journey
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
                    alt="Market Technology Solutions"
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
