
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <span className="font-[\'Pacifico\'] text-3xl bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent group-hover:scale-105 transition-all duration-300">
                True Starlight
              </span>
            </Link>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Empowering adults to master web design through educational videos that prioritize ease of learning and victory in every step.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center text-black hover:scale-110 transition-all duration-300 group">
                <i className="ri-facebook-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center text-black hover:scale-110 transition-all duration-300 group">
                <i className="ri-twitter-x-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center text-black hover:scale-110 transition-all duration-300 group">
                <i className="ri-instagram-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center text-black hover:scale-110 transition-all duration-300 group">
                <i className="ri-linkedin-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-yellow-400 transition-all duration-300 flex items-center gap-2 group">
                  <i className="ri-arrow-right-s-line w-4 h-4 flex items-center justify-center group-hover:translate-x-1 transition-all duration-300"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-yellow-400 transition-all duration-300 flex items-center gap-2 group">
                  <i className="ri-arrow-right-s-line w-4 h-4 flex items-center justify-center group-hover:translate-x-1 transition-all duration-300"></i>
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-yellow-400 transition-all duration-300 flex items-center gap-2 group">
                  <i className="ri-arrow-right-s-line w-4 h-4 flex items-center justify-center group-hover:translate-x-1 transition-all duration-300"></i>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-yellow-400 transition-all duration-300 flex items-center gap-2 group">
                  <i className="ri-arrow-right-s-line w-4 h-4 flex items-center justify-center group-hover:translate-x-1 transition-all duration-300"></i>
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 group">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300">
                  <i className="ri-mail-line w-4 h-4 flex items-center justify-center"></i>
                </div>
                <span>hello@truestarlight.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 group">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300">
                  <i className="ri-phone-line w-4 h-4 flex items-center justify-center"></i>
                </div>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 group">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300 mt-0.5">
                  <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center"></i>
                </div>
                <span>123 Design Street<br />Creative District, CD 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              2024 True Starlight. All rights reserved. Built with victory in mind.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terms" className="text-gray-500 hover:text-yellow-400 text-sm transition-all duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-yellow-400 text-sm transition-all duration-300">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-500 hover:text-yellow-400 text-sm transition-all duration-300">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
