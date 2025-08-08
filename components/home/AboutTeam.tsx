
'use client';

export default function AboutTeam() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Lead Design Instructor",
      bio: "With 12+ years in web design, Sarah specializes in modern UX/UI principles and has taught thousands of students worldwide.",
      image: "https://readdy.ai/api/search-image?query=Professional%20female%20web%20design%20instructor%2C%20confident%20smile%2C%20modern%20office%20background%2C%20elegant%20appearance%20with%20creative%20designer%20aesthetic%2C%20warm%20lighting%2C%20inspiring%20educational%20leader%20portrait%2C%20dark%20professional%20attire%20with%20golden%20accents&width=400&height=400&seq=sarah-instructor&orientation=squarish",
      specialty: "UI/UX Design"
    },
    {
      name: "Marcus Chen",
      role: "Frontend Development Expert", 
      bio: "Marcus brings 10+ years of development experience, making complex coding concepts accessible and enjoyable for adult learners.",
      image: "https://readdy.ai/api/search-image?query=Professional%20male%20frontend%20developer%20instructor%2C%20friendly%20demeanor%2C%20modern%20tech%20workspace%20background%2C%20casual%20professional%20attire%2C%20approachable%20teaching%20style%2C%20contemporary%20office%20setting%20with%20coding%20elements%2C%20dark%20themed%20environment%20with%20yellow%20highlights&width=400&height=400&seq=marcus-instructor&orientation=squarish",
      specialty: "JavaScript & CSS"
    },
    {
      name: "Elena Rodriguez",
      role: "Creative Director",
      bio: "Elena's creative vision drives our course content, ensuring each lesson is both educational and visually stunning.",
      image: "https://readdy.ai/api/search-image?query=Professional%20female%20creative%20director%2C%20artistic%20background%2C%20confident%20and%20inspiring%20presence%2C%20modern%20creative%20studio%20environment%2C%20sophisticated%20professional%20appearance%2C%20creative%20tools%20and%20design%20elements%2C%20elegant%20dark%20aesthetic%20with%20golden%20touches&width=400&height=400&seq=elena-director&orientation=squarish",
      specialty: "Creative Strategy"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-72 h-72 bg-yellow-400/5 rounded-full animate-pulse blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-64 h-64 bg-white/5 rounded-full animate-bounce blur-2xl" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="animate-fadeInUp">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet Our <span className="text-yellow-400 animate-pulse">Expert Team</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            Learn from industry veterans who have transformed their passion for web design into powerful educational experiences. 
            Our experts are dedicated to your victory in the digital world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 border border-gray-700 hover:border-yellow-400/50 animate-fadeInUp"
              style={{ animationDelay: `${0.4 + index * 0.2}s` }}
            >
              <div className="relative mb-8">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                </div>
                
                {/* Specialty badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap animate-pulse">
                    {member.specialty}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-yellow-400 font-semibold mb-4 text-lg">
                  {member.role}
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {member.bio}
                </p>
                
                {/* Achievement indicators */}
                <div className="flex justify-center gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:animate-spin">
                      <i className="ri-star-line text-xl text-black"></i>
                    </div>
                    <div className="text-xs text-gray-400">Expert</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:animate-pulse">
                      <i className="ri-award-line text-xl text-black"></i>
                    </div>
                    <div className="text-xs text-gray-400">Certified</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:animate-bounce">
                      <i className="ri-heart-line text-xl text-black"></i>
                    </div>
                    <div className="text-xs text-gray-400">Loved</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team stats */}
        <div className="mt-20 text-center animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
          <div className="bg-gradient-to-r from-yellow-400/10 to-transparent rounded-3xl p-12 border border-yellow-400/30">
            <h3 className="text-3xl font-bold text-white mb-8">Our Team's Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:animate-bounce">50+</div>
                <div className="text-gray-300">Years Combined Experience</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:animate-pulse">5000+</div>
                <div className="text-gray-300">Students Taught</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:animate-bounce" style={{ animationDelay: '0.2s' }}>25+</div>
                <div className="text-gray-300">Courses Created</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:animate-pulse" style={{ animationDelay: '0.4s' }}>98%</div>
                <div className="text-gray-300">Student Satisfaction</div>
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
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}