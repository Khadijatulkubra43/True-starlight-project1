
'use client';

import Link from 'next/link';

export default function ProductShowcase() {
  const courses = [
    {
      title: "Web Design Fundamentals",
      description: "Master the core principles of modern web design with hands-on projects and real-world examples.",
      image: "https://readdy.ai/api/search-image?query=Modern%20web%20design%20fundamentals%20course%20preview%2C%20clean%20computer%20screen%20displaying%20colorful%20website%20layouts%2C%20design%20tools%20and%20wireframes%20on%20desk%2C%20professional%20learning%20environment%20with%20contemporary%20workspace%20setup%2C%20educational%20materials%20and%20notebooks%2C%20inspiring%20creative%20atmosphere%20with%20dark%20theme%20and%20golden%20accents&width=500&height=300&seq=course-fundamentals&orientation=landscape",
      duration: "8 hours",
      level: "Beginner",
      price: "$49"
    },
    {
      title: "Advanced CSS Techniques",
      description: "Take your styling skills to the next level with advanced CSS animations, layouts, and responsive design.",
      image: "https://readdy.ai/api/search-image?query=Advanced%20CSS%20coding%20tutorial%20setup%2C%20multiple%20monitors%20showing%20complex%20CSS%20code%20and%20beautiful%20website%20animations%2C%20modern%20development%20environment%20with%20clean%20workspace%2C%20code%20editor%20with%20colorful%20syntax%20highlighting%2C%20professional%20learning%20setup%20with%20dark%20aesthetic%20and%20golden%20highlights&width=500&height=300&seq=course-css&orientation=landscape",
      duration: "12 hours", 
      level: "Intermediate",
      price: "$89"
    },
    {
      title: "JavaScript for Designers",
      description: "Bridge the gap between design and development with JavaScript essentials tailored for designers.",
      image: "https://readdy.ai/api/search-image?query=JavaScript%20programming%20tutorial%20for%20designers%2C%20laptop%20screen%20showing%20interactive%20web%20elements%20and%20JavaScript%20code%2C%20modern%20workspace%20with%20design%20sketches%20and%20development%20tools%2C%20creative%20coding%20environment%20with%20clean%20aesthetic%20and%20dark%20theme%20with%20yellow%20accents&width=500&height=300&seq=course-javascript&orientation=landscape",
      duration: "15 hours",
      level: "Intermediate",
      price: "$129"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-400/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-white/5 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block animate-fadeInUp">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Featured <span className="text-yellow-400">Courses</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            Discover our carefully crafted educational videos designed to transform you from beginner to confident web designer. 
            Each course is built with victory and ease of learning at its core.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-gray-800 to-black rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 animate-fadeInUp border border-gray-700"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-56 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-lg font-bold animate-pulse">
                    {course.price}
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-black px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap">
                    {course.level}
                  </span>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-time-line text-sm"></i>
                    </div>
                    <span className="text-sm">{course.duration}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">{course.description}</p>
                
                <Link href="/products" className="group/btn bg-yellow-400 text-black px-8 py-4 rounded-full hover:bg-yellow-300 transition-all duration-300 cursor-pointer whitespace-nowrap inline-flex items-center gap-3 font-bold transform hover:scale-105">
                  Enroll Now
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-arrow-right-line text-lg group-hover/btn:translate-x-1 transition-transform"></i>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fadeInUp" style={{ animationDelay: '1s' }}>
          <Link href="/products" className="group bg-gradient-to-r from-yellow-400 to-yellow-300 text-black px-12 py-5 rounded-full text-xl font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 cursor-pointer whitespace-nowrap inline-flex items-center gap-4 transform hover:scale-105 hover:shadow-2xl">
            View All Courses
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-graduation-cap-line text-2xl group-hover:rotate-12 transition-transform"></i>
            </div>
          </Link>
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