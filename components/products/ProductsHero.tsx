'use client';

import Link from 'next/link';

export default function ProductsHero() {
  return (
    <section 
      className="relative py-32 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://readdy.ai/api/search-image?query=Professional%20modern%20workspace%20with%20multiple%20computer%20screens%20showing%20web%20design%20interfaces%2C%20clean%20minimalist%20office%20environment%20with%20soft%20lighting%2C%20creative%20design%20tools%20and%20code%20editors%20visible%20on%20monitors%2C%20contemporary%20furniture%20and%20plants%2C%20tech%20startup%20atmosphere%20with%20warm%20ambient%20lighting%20creating%20an%20inspiring%20learning%20environment&width=1920&height=800&seq=products-hero-1&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top'
      }}
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-yellow-300 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 backdrop-blur-lg border border-yellow-400/30 rounded-full px-6 py-3 mb-8 animate-fadeInUp">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-yellow-400 font-semibold">Premium Course Collection</span>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold text-white mb-8 leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Master Web Design
            <span className="block text-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text animate-pulse">
              Achieve Victory
            </span>
          </h1>

          <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            Transform from beginner to professional web designer with our comprehensive course collection. 
            Learn at your own pace with lifetime access to premium content that guarantees your success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <Link 
              href="#courses"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 whitespace-nowrap"
            >
              <i className="ri-play-circle-line w-5 h-5 flex items-center justify-center mr-2 inline-block"></i>
              Start Learning Now
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 backdrop-blur-lg transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              <i className="ri-customer-service-line w-5 h-5 flex items-center justify-center mr-2 inline-block"></i>
              Get Personal Guidance
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <div className="text-center group">
              <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:animate-bounce">12</div>
              <div className="text-gray-300 text-lg">Premium Courses</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:animate-pulse">80+</div>
              <div className="text-gray-300 text-lg">Hours of Content</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:animate-bounce" style={{ animationDelay: '0.2s' }}>100%</div>
              <div className="text-gray-300 text-lg">Success Rate</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:animate-pulse" style={{ animationDelay: '0.4s' }}>∞</div>
              <div className="text-gray-300 text-lg">Lifetime Access</div>
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
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}