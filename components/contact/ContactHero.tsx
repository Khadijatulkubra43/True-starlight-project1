
'use client';

export default function ContactHero() {
  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400/10 rounded-full animate-pulse blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full animate-bounce blur-2xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-yellow-400/5 to-transparent rounded-full animate-spin-slow blur-3xl"></div>
      </div>

      {/* Geometric decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 transform rotate-45 animate-pulse">
          <div className="w-20 h-20 border-4 border-yellow-400"></div>
        </div>
        <div className="absolute bottom-32 left-20 transform -rotate-12 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <div className="w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[69px] border-b-yellow-400"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="animate-fadeInUp">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Get in Touch with 
              <span className="text-yellow-400 block mt-2 animate-pulse">Our Expert Team</span>
            </h1>
          </div>
          
          <p className="text-2xl text-gray-300 mb-16 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            Have questions about our courses? Need personalized guidance for your web design journey? 
            We're here to help you achieve victory in your learning goals and unlock your creative potential.
          </p>
          
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div className="group text-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:animate-spin transform hover:scale-110 transition-all duration-300">
                <i className="ri-customer-service-line text-3xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">Expert Support</h3>
              <p className="text-gray-300 text-lg">Get help from our experienced instructors who truly care about your success</p>
            </div>
            
            <div className="group text-center animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse transform hover:scale-110 transition-all duration-300">
                <i className="ri-time-line text-3xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">Quick Response</h3>
              <p className="text-gray-300 text-lg">We typically respond within 24 hours, because your time is valuable</p>
            </div>
            
            <div className="group text-center animate-fadeInUp" style={{ animationDelay: '1s' }}>
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce transform hover:scale-110 transition-all duration-300">
                <i className="ri-heart-line text-3xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">Personal Touch</h3>
              <p className="text-gray-300 text-lg">Customized advice for your unique learning path and creative goals</p>
            </div>
          </div>

          {/* Additional trust indicators */}
          <div className="mt-20 bg-gradient-to-r from-gray-800 to-black rounded-3xl p-12 border border-gray-700 animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
            <h3 className="text-3xl font-bold text-white mb-8">Why Students Choose Us</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:animate-bounce">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:animate-pulse">100%</div>
                <div className="text-gray-300">Satisfaction Rate</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:animate-bounce" style={{ animationDelay: '0.2s' }}>5K+</div>
                <div className="text-gray-300">Happy Students</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:animate-pulse" style={{ animationDelay: '0.4s' }}>50+</div>
                <div className="text-gray-300">Countries Served</div>
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