'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold text-gray-800">Fitness First</div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-500">Home</Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-500">Services</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-blue-500">Pricing</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-500">Contact</Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-500">
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4 mt-4">
            <Link href="/" className="text-gray-600 hover:text-blue-500 block py-2">Home</Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-500 block py-2">Services</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-blue-500 block py-2">Pricing</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-500 block py-2">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
