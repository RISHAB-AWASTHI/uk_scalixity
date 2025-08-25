"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";


export default function ContactForm() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(`${baseURL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        // Reset form after successful submission
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 3000);
      } else {
        const errorData = await response.json();
        console.error('Error submitting form:', errorData);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
         <section id="contact-form" className="pt-16 sm:py-12 lg:py-20 xl:py-28">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 lg:mb-20">
            <p className="text-xs sm:text-sm lg:text-base text-black font-medium mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              Free Strategy Call
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-black" style={{ fontFamily: 'Playfair Display, serif' }}>
              Book Your Free Strategy Call
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to transform your business? Let&apos;s discuss your technology needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center sm:text-left" style={{ fontFamily: 'Playfair Display, serif' }}>
                Send us a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-4 sm:py-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-base sm:text-lg bg-white text-gray-900 placeholder-gray-500"
                    style={{ height: '50px' }}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-4 sm:py-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-base sm:text-lg bg-white text-gray-900 placeholder-gray-500"
                    style={{ height: '50px' }}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium mb-2 block">
                    Phone number
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="flex-1 px-3 sm:px-4 py-4 sm:py-6 border border-gray-300 rounded-lg text-base sm:text-lg bg-white text-gray-900 placeholder-gray-500"
                      style={{ height: '50px' }}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block">
                    How can we help? *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us a little about the project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-4 sm:py-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 resize-none text-base sm:text-lg bg-white text-gray-900 placeholder-gray-500"
                    style={{ height: '100px' }}
                    required
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}

                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    y: -2
                  }}
                  whileTap={{ 
                    scale: 0.98,
                    y: 0
                  }}
                  transition={{ 
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                >
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#A8B2E7] hover:bg-[#9BA5D9] disabled:bg-gray-400 text-white py-2 sm:py-3 px-6 sm:px-8 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 uppercase tracking-wide mb-8 sm:mb-0"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="hidden sm:block text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Let&apos;s start a conversation
                  </h3>
                  <p className="hidden sm:block text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Whether you&apos;re a startup looking to scale or an established business seeking digital transformation, 
                    we&apos;re here to help. Our UK-based team provides local expertise with global reach.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="text-left">
                    <h4 className="font-bold text-[#9486D9] mb-1 text-3xl" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '30px' }}>
                      Email
                    </h4>
                    <p className="text-black text-xs sm:text-sm" style={{ fontFamily: 'Montserrat, serif', fontWeight: 500, fontSize: '16px' }}>
                      scalixity@gmail.com
                    </p>
                  </div>

                  <div className="text-left">
                    <h4 className="font-bold text-[#9486D9] mb-1 text-3xl" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '30px' }}>
                      Visit Us
                    </h4>
                    <p className="text-black text-xs sm:text-sm" style={{ fontFamily: 'Montserrat, serif', fontWeight: 500, fontSize: '16px' }}>
                      London, United Kingdom
                    </p>
                  </div>

                  <div className="text-left">
                    <h4 className="font-bold text-[#9486D9] mb-1 text-3xl" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '32px' }}>
                      Call Us
                    </h4>
                    <p className="text-black text-xs sm:text-sm" style={{ fontFamily: 'Montserrat, serif', fontWeight: 500, fontSize: '16px' }}>
                      +44 (0) 20 1234 5678
                    </p>
                  </div>
                </div>

                {/* Additional Info */}
                <motion.div
                  className="hidden sm:block rounded-xl sm:rounded-2xl p-4 sm:p-6"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <h4 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Why Choose Scalixity?
                  </h4>
                  <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700" style={{ fontFamily: 'Poppins, serif' }}>
                    <li className="flex items-center gap-2">
                      <img src="/images/fi_4495290.svg" alt="arrow" className="w-4 h-4" />
                      UK-registered company with local expertise
                    </li>
                    <li className="flex items-center gap-2">
                      <img src="/images/fi_4495290.svg" alt="arrow" className="w-4 h-4" />
                      Transparent GBP pricing, no hidden fees
                    </li>
                    <li className="flex items-center gap-2">
                      <img src="/images/fi_4495290.svg" alt="arrow" className="w-4 h-4" />
                      24/7 support and dedicated account management
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
