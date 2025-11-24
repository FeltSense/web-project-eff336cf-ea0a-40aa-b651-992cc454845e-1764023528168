import React from 'react';

const Pricing = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="relative max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Gradient Border / Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-25 blur-sm"></div>

        <div className="relative p-8">
          {/* Title */}
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Professional Plan</h2>

          {/* Price - HUGE */}
          <div className="text-5xl font-bold text-blue-600 text-center mb-6">$29<span className="text-lg text-gray-500">/month</span></div>

          {/* Features with Checkmarks */}
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Unlimited Gym Access</span>
            </div>
            <div className="flex items-center mb-2">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Personal Training Sessions (2/month)</span>
            </div>
            <div className="flex items-center mb-2">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Access to All Classes</span>
            </div>
            <div className="flex items-center mb-2">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Nutrition Plans</span>
            </div>
          </div>

          {/* CTA Button - Big, Bold, Gradient */}
          <a href="https://buy.stripe.com/test_00g5lq0OG2lG2pq144" className="block bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-700 hover:to-teal-700 text-white font-bold py-3 px-6 rounded-full text-center transition-all duration-300 hover:scale-105">
            Join Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
