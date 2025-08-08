
'use client';

import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-96 h-96 bg-yellow-400/10 rounded-full animate-pulse blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full animate-bounce blur-2xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-yellow-400/5 to-transparent rounded-full animate-spin-slow blur-3xl"></div>
      </div>

      {/* Geometric decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 transform rotate-45 animate-pulse">
          <div className="w-16 h-16 border-4 border-yellow-400"></div>
        </div>
        <div className="absolute bottom-32 left-16 transform -rotate-12 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[52px] border-b-yellow-400"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="animate-fadeInUp">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Ready to Achieve 
              <span className="text-yellow-400 block mt-2 animate-pulse">Victory in Web Design?</span>
            </h2>
          </div>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            Join thousands of adults who have transformed their web design skills through our revolutionary educational videos. 
            Your journey to digital mastery starts with a single, powerful decision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="group flex items-center gap-4 bg-gradient-to-r from-gray-800 to-gray-700 px-8 py-4 rounded-full border border-gray-600 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center group-hover:animate-spin">
                <i className="ri-check-line text-2xl text-black"></i>
              </div>
              <span className="text-lg text-white font-semibold">Easy-to-follow lessons</span>
            </div>
            <div className="group flex items-center gap-4 bg-gradient-to-r from-gray-800 to-gray-700 px-8 py-4 rounded-full border border-gray-600 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center group-hover:animate-pulse">
                <i className="ri-check-line text-2xl text-black"></i>
              </div>
              <span className="text-lg text-white font-semibold">Adult-focused learning</span>
            </div>
            <div className="group flex items-center gap-4 bg-gradient-to-r from-gray-800 to-gray-700 px-8 py-4 rounded-full border border-gray-600 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center group-hover:animate-bounce">
                <i className="ri-check-line text-2xl text-black"></i>
              </div>
              <span className="text-lg text-white font-semibold">Modern techniques</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
            <Link href="/products" className="group bg-gradient-to-r from-yellow-400 to-yellow-300 text-black px-12 py-6 rounded-full text-xl font-bold hover:from-yellow-300 hover:to-yellow-200 transition-all duration-300 cursor-pointer whitespace-nowrap inline-flex items-center gap-4 transform hover:scale-110 hover:shadow-2xl hover:shadow-yellow-400/25">
              <span>Start Learning Today</span>
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:animate-spin">
                <i className="ri-rocket-line text-lg text-yellow-400"></i>
              </div>
            </Link>
            <Link href="/contact" className="group border-3 border-yellow-400 text-yellow-400 px-12 py-6 rounded-full text-xl font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300 cursor-pointer whitespace-nowrap inline-flex items-center gap-4 transform hover:scale-105">
              <span>Contact Us</span>
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-message-3-line text-xl group-hover:animate-pulse"></i>
              </div>
            </Link>
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-black rounded-3xl p-12 border border-gray-700 animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
            <p className="text-gray-300 mb-8 text-lg">Trusted by over 5,000+ students worldwide</p>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="text-5xl font-bold text-yellow-400 mb-2 group-hover:animate-bounce">98%</div>
                <div className="text-gray-400 font-semibold">Completion Rate</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl font-bold text-yellow-400 mb-2 group-hover:animate-pulse">4.9</div>
                <div className="text-gray-400 font-semibold">Average Rating</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl font-bold text-yellow-400 mb-2 group-hover:animate-bounce" style={{ animationDelay: '0.3s' }}>5K+</div>
                <div className="text-gray-400 font-semibold">Happy Students</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}