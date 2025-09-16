'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Service } from '@/app/lib/services-data';

interface ServiceDetailComponentProps {
  service: Service;
}

const ServiceDetailComponent: React.FC<ServiceDetailComponentProps> = ({ service }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-purple-600 hover:text-purple-700 transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/#what-we-offer" className="text-purple-600 hover:text-purple-700 transition-colors">
              Services
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{service.title}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {service.title}
            </h1>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {service.description}
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <img
              src={service.heroImage}
              alt={service.title}
              className="w-full h-auto object-contain shadow-2xl rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h2>
              <div className="space-y-4 max-w-lg mx-auto ml-25">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 text-left">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Benefits</h2>
              <div className="space-y-4 max-w-lg mx-auto ml-25">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 text-left">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies We Use</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to deliver robust, scalable solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {service.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-purple-100 text-purple-700 rounded-full font-medium text-sm hover:bg-purple-200 transition-colors"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      {service.pricing && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing Plans</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                Choose the plan that best fits your project requirements and budget.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Beginner Plan */}
                <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200 hover:border-purple-300 transition-colors">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Beginner</h3>
                    <div className="text-4xl font-bold text-purple-600 mb-2">₹25K - ₹50K</div>
                    <p className="text-gray-600 mb-6">Perfect for startups and small projects</p>
                    <ul className="text-left space-y-3 mb-8">
                      <li className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Basic implementation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Core features included</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Standard support</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Documentation included</span>
                      </li>
                    </ul>
                    <Link
                      href="/#contact"
                      className="block w-full bg-purple-100 text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-200 transition-colors"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>

                {/* Professional Plan */}
                <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-500 relative hover:border-purple-600 transition-colors">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
                    <div className="text-4xl font-bold text-purple-600 mb-2">₹50K - ₹1L</div>
                    <p className="text-gray-600 mb-6">Ideal for growing businesses</p>
                    <ul className="text-left space-y-3 mb-8">
                      <li className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Advanced implementation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">All features + integrations</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Priority support</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Training & documentation</span>
                      </li>
                    </ul>
                    <Link
                      href="/#contact"
                      className="block w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>

                {/* Pro Plan */}
                <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200 hover:border-purple-300 transition-colors">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro</h3>
                    <div className="text-4xl font-bold text-purple-600 mb-2">₹1L - ₹1.5L</div>
                    <p className="text-gray-600 mb-6">Enterprise-grade solutions</p>
                    <ul className="text-left space-y-3 mb-8">
                      <li className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Enterprise implementation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Custom features & scaling</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">24/7 dedicated support</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Complete maintenance</span>
                      </li>
                    </ul>
                    <Link
                      href="/#contact"
                      className="block w-full bg-purple-100 text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-200 transition-colors"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-4">{service.pricing.description}</p>
                <p className="text-sm text-gray-500">
                  All prices are in Indian Rupees (INR). Final pricing depends on project scope and requirements.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/#what-we-offer"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailComponent;