
'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-yellow-400/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-white/10 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 transform -rotate-45">
            <div className="w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[87px] border-b-yellow-400"></div>
          </div>
          <div className="absolute bottom-1/3 right-1/3 transform rotate-12">
            <div className="w-20 h-20 border-4 border-white rotate-45"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-left max-w-3xl">
          <div className="overflow-hidden">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fadeInUp">
              Master Web Design with 
              <span className="text-yellow-400 block mt-2 animate-pulse">Victory & Style</span>
            </h1>
          </div>
          
          <div className="overflow-hidden">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              Transform your creative vision into stunning websites through our revolutionary educational videos. 
              Experience the perfect fusion of modern design techniques and effortless mastery.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <Link href="/products" className="group bg-yellow-400 text-black px-10 py-5 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all duration-300 cursor-pointer whitespace-nowrap text-center transform hover:scale-105 hover:shadow-2xl">
              <span className="flex items-center justify-center gap-3">
                Start Your Journey
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform"></i>
                </div>
              </span>
            </Link>
            <Link href="/contact" className="group border-2 border-yellow-400 text-yellow-400 px-10 py-5 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300 cursor-pointer whitespace-nowrap text-center transform hover:scale-105">
              <span className="flex items-center justify-center gap-3">
                Explore More
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-play-circle-line text-xl group-hover:scale-110 transition-transform"></i>
                </div>
              </span>
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-8 animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 animate-bounce">5K+</div>
              <div className="text-sm text-gray-400">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 animate-pulse">98%</div>
              <div className="text-sm text-gray-400">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 animate-bounce" style={{ animationDelay: '0.5s' }}>4.9</div>
              <div className="text-sm text-gray-400">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating action indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
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
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}