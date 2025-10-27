"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { X, Mail, Phone, User, Send, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PopupForm({ isOpen, onClose }: PopupFormProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [error, setError] = React.useState("");
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(`${baseURL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit form');
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);
      setIsSuccess(true);
      
      // Mark form as submitted in sessionStorage for PDF access
      sessionStorage.setItem('formSubmitted', 'true');
      
      // Reset form data
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });

      // Close modal after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);

    } catch (error) {
      console.error("Error submitting form:", error);
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
            variants={modalVariants}
          >
            {/* Header */}
            <motion.div 
              className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 relative"
              variants={itemVariants}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Get Started Today
                </h2>
                <p className="text-gray-300 text-sm">
                  Quick form to get you started with Scalixity
                </p>
              </div>
            </motion.div>

            {/* Success Message */}
            {isSuccess && (
              <motion.div 
                className="p-6 bg-green-50 border-l-4 border-green-400"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <div>
                    <h3 className="text-green-800 font-semibold">Thank you!</h3>
                    <p className="text-green-700 text-sm">Your message has been sent successfully. We&apos;ll get back to you soon!</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Error Message */}
            {error && (
              <motion.div 
                className="p-6 bg-red-50 border-l-4 border-red-400"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center">
                  <AlertCircle className="w-6 h-6 text-red-400 mr-3" />
                  <div>
                    <h3 className="text-red-800 font-semibold">Error</h3>
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Form */}
            {!isSuccess && (
              <motion.div 
                className="p-6"
                variants={itemVariants}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <motion.div variants={itemVariants}>
                    <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block">
                      Full Name *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-lg"
                        style={{ height: '56px' }}
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </motion.div>

                  {/* Email Field */}
                  <motion.div variants={itemVariants}>
                    <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
                      Email Address *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john.doe@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-lg"
                        style={{ height: '56px' }}
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </motion.div>

                  {/* Phone Field */}
                  <motion.div variants={itemVariants}>
                    <Label htmlFor="phone" className="text-gray-700 font-medium mb-2 block">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+44 (0) 20 1234 5678"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-lg"
                        style={{ height: '56px' }}
                        disabled={isLoading}
                      />
                    </div>
                  </motion.div>

                  {/* Message Field */}
                  <motion.div variants={itemVariants}>
                    <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or how we can help you..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-lg resize-none"
                      rows={4}
                      required
                      disabled={isLoading}
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div variants={itemVariants}>
                    <Button 
                      type="submit" 
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 px-8 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>

                {/* Footer */}
                <motion.div 
                  className="mt-6 text-center"
                  variants={itemVariants}
                >
                  <p className="text-sm text-gray-500">
                    By submitting this form, you agree to our{" "}
                    <Link href="/privacy" className="text-gray-900 hover:text-gray-800 underline">
                      Privacy Policy
                    </Link>
                  </p>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
