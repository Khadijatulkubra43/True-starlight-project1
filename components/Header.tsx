
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50">
      <div className="bg-black/80 backdrop-blur-lg border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center group">
              <span className="font-['Pacifico'] text-3xl bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent group-hover:scale-105 transition-all duration-300 animate-pulse">
                True Starlight
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/products" 
                className="text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium relative group"
              >
                Courses
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium relative group"
              >
                Terms
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25 whitespace-nowrap"
              >
                Start Learning
              </Link>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-yellow-400 hover:bg-gray-800/50 transition-all duration-300"
            >
              <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} w-6 h-6 flex items-center justify-center transition-all duration-300`}></i>
            </button>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gray-900/95 backdrop-blur-lg border-t border-gray-800/50">
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="/" 
                className="block text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="block text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/terms" 
                className="block text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Terms
              </Link>
              <Link 
                href="/contact" 
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 mt-4 whitespace-nowrap block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Learning
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}