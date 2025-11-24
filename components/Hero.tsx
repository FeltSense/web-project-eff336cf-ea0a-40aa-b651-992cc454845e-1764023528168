import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-gray-50 overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Unleash Your Inner Athlete
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transform your body and mind with our expert-led fitness programs.
            </p>
          </div>
          
          {/* Benefits */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">Personalized workout plans</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">Nutritional guidance and support</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">Motivating community environment</span>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg"
            >
              Join Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-gray-400 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
        
        {/* Image */}
        <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fitness First"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
