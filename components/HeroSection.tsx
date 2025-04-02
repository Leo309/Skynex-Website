'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-skynex-dark to-gray-900 text-white py-20 md:py-28">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-skynex-blue rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-skynex-accent rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="hidden lg:block absolute -top-10 left-1/2 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="heading-xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-skynex-accent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Empowering Decisions with Data & AI
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            SKYNEX provides data-driven, AI-powered tools that enhance decision-making for finance, business and e-commerce teams through flexible SaaS delivery.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/tools" className="btn-primary text-lg px-8 py-3">
              Explore Our Tools
            </Link>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-3">
              Get In Touch
            </Link>
          </motion.div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 md:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl md:text-4xl font-bold text-skynex-accent mb-2">2+</div>
              <div className="text-gray-400">AI Tools</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl md:text-4xl font-bold text-skynex-accent mb-2">500+</div>
              <div className="text-gray-400">Daily Calculations</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl md:text-4xl font-bold text-skynex-accent mb-2">2</div>
              <div className="text-gray-400">Office Locations</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl md:text-4xl font-bold text-skynex-accent mb-2">100%</div>
              <div className="text-gray-400">Data-Driven</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}