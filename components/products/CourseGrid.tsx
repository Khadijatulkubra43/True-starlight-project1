'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CourseGrid() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Courses', icon: 'ri-grid-line' },
    { id: 'beginner', label: 'Beginner', icon: 'ri-seedling-line' },
    { id: 'intermediate', label: 'Intermediate', icon: 'ri-plant-line' },
    { id: 'advanced', label: 'Advanced', icon: 'ri-trophy-line' }
  ];

  const courses = [
    {
      id: 1,
      title: "Web Design Fundamentals",
      level: "beginner",
      duration: "8 hours",
      students: 2847,
      rating: 4.9,
      price: 149,
      originalPrice: 299,
      image: "https://readdy.ai/api/search-image?query=Modern%20web%20design%20workspace%20with%20HTML%20CSS%20code%20on%20screen%2C%20clean%20minimal%20interface%20design%2C%20colorful%20website%20layouts%20and%20design%20elements%2C%20professional%20learning%20environment%20with%20tablet%20and%20sketches%2C%20bright%20creative%20studio%20lighting%2C%20beginner-friendly%20educational%20content&width=600&height=400&seq=course-1&orientation=landscape",
      skills: ["HTML5", "CSS3", "Responsive Design", "UI Principles"],
      description: "Master the essential building blocks of modern web design",
      popular: false
    },
    {
      id: 2,
      title: "JavaScript Mastery Course",
      level: "intermediate",
      duration: "12 hours",
      students: 1923,
      rating: 4.8,
      price: 199,
      originalPrice: 399,
      image: "https://readdy.ai/api/search-image?query=JavaScript%20programming%20interface%20with%20dynamic%20code%20animations%2C%20interactive%20web%20elements%20and%20modern%20development%20tools%2C%20VS%20Code%20editor%20with%20colorful%20syntax%20highlighting%2C%20laptop%20with%20coffee%20in%20creative%20workspace%2C%20professional%20coding%20environment%20with%20clean%20aesthetics&width=600&height=400&seq=course-2&orientation=landscape",
      skills: ["ES6+", "DOM Manipulation", "APIs", "Async Programming"],
      description: "Build interactive websites with modern JavaScript",
      popular: true
    },
    {
      id: 3,
      title: "React Development Bootcamp",
      level: "advanced",
      duration: "16 hours",
      students: 1456,
      rating: 4.9,
      price: 249,
      originalPrice: 499,
      image: "https://readdy.ai/api/search-image?query=React%20development%20environment%20with%20component%20architecture%20diagrams%2C%20modern%20web%20application%20interface%20on%20multiple%20screens%2C%20clean%20code%20editor%20with%20React%20JSX%20syntax%2C%20professional%20developer%20workspace%20with%20plants%20and%20natural%20lighting%2C%20tech%20startup%20atmosphere&width=600&height=400&seq=course-3&orientation=landscape",
      skills: ["React Hooks", "State Management", "Component Design", "Testing"],
      description: "Create professional web applications with React",
      popular: false
    },
    {
      id: 4,
      title: "UI/UX Design Principles",
      level: "beginner",
      duration: "10 hours",
      students: 3241,
      rating: 4.7,
      price: 179,
      originalPrice: 349,
      image: "https://readdy.ai/api/search-image?query=UX%20UI%20design%20workspace%20with%20wireframes%20and%20prototypes%2C%20color%20palettes%20and%20typography%20samples%2C%20design%20thinking%20process%20boards%2C%20Figma%20interface%20on%20large%20monitor%2C%20creative%20studio%20with%20design%20books%20and%20inspiration%20boards%2C%20minimal%20aesthetic%20workspace&width=600&height=400&seq=course-4&orientation=landscape",
      skills: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      description: "Design beautiful and user-friendly interfaces",
      popular: true
    },
    {
      id: 5,
      title: "Advanced CSS Animations",
      level: "intermediate",
      duration: "6 hours",
      students: 987,
      rating: 4.8,
      price: 129,
      originalPrice: 249,
      image: "https://readdy.ai/api/search-image?query=CSS%20animation%20examples%20with%20smooth%20transitions%20and%20effects%2C%20creative%20web%20interfaces%20with%20hover%20states%20and%20micro-interactions%2C%20colorful%20gradient%20animations%20on%20screen%2C%20modern%20frontend%20development%20workspace%2C%20professional%20coding%20setup%20with%20dual%20monitors&width=600&height=400&seq=course-5&orientation=landscape",
      skills: ["CSS Animations", "Keyframes", "Transforms", "Performance"],
      description: "Create stunning animations that captivate users",
      popular: false
    },
    {
      id: 6,
      title: "Full-Stack Portfolio Project",
      level: "advanced",
      duration: "20 hours",
      students: 742,
      rating: 4.9,
      price: 299,
      originalPrice: 599,
      image: "https://readdy.ai/api/search-image?query=Complete%20portfolio%20website%20showcase%20with%20multiple%20project%20examples%2C%20full-stack%20development%20environment%20with%20backend%20and%20frontend%20code%2C%20professional%20developer%20portfolio%20designs%20on%20various%20devices%2C%20modern%20workspace%20with%20multiple%20monitors%20showing%20different%20aspects%20of%20web%20development&width=600&height=400&seq=course-6&orientation=landscape",
      skills: ["Full-Stack", "Database", "Deployment", "Portfolio"],
      description: "Build a complete portfolio that lands you jobs",
      popular: true
    }
  ];

  const filteredCourses = activeFilter === 'all' 
    ? courses 
    : courses.filter(course => course.level === activeFilter);

  return (
    <section id="courses" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every course is designed with victory in mind. Pick your level and start building the skills that will transform your career.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              <i className={`${filter.icon} w-4 h-4 flex items-center justify-center`}></i>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCourse(course.id)}
              onMouseLeave={() => setHoveredCourse(null)}
            >
              {/* Popular Badge */}
              {course.popular && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-3 py-1 rounded-full text-sm font-bold">
                  🔥 Popular
                </div>
              )}

              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/80 flex items-center justify-center transition-all duration-300 ${
                  hoveredCourse === course.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="text-center">
                    <i className="ri-play-circle-fill w-16 h-16 flex items-center justify-center text-yellow-400 mx-auto mb-4 animate-pulse"></i>
                    <p className="text-white font-semibold">Preview Course</p>
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Level Badge */}
                <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                  course.level === 'beginner' ? 'bg-green-500/20 text-green-400' :
                  course.level === 'intermediate' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-purple-500/20 text-purple-400'
                }`}>
                  <i className={`w-3 h-3 flex items-center justify-center ${
                    course.level === 'beginner' ? 'ri-seedling-line' :
                    course.level === 'intermediate' ? 'ri-plant-line' :
                    'ri-trophy-line'
                  }`}></i>
                  {course.level.toUpperCase()}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-gray-400 mb-4">
                  {course.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.skills.slice(0, 3).map((skill) => (
                    <span key={skill} className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                  {course.skills.length > 3 && (
                    <span className="bg-gray-700/50 text-yellow-400 px-2 py-1 rounded text-xs">
                      +{course.skills.length - 3} more
                    </span>
                  )}
                </div>

                {/* Course Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <i className="ri-time-line w-4 h-4 flex items-center justify-center"></i>
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="ri-user-line w-4 h-4 flex items-center justify-center"></i>
                      {course.students.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <i className="ri-star-fill w-4 h-4 flex items-center justify-center text-yellow-400"></i>
                    <span className="text-white font-semibold">{course.rating}</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-white">${course.price}</span>
                    <span className="text-lg text-gray-500 line-through">${course.originalPrice}</span>
                    <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-sm font-semibold">
                      {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-3 rounded-xl font-bold text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 whitespace-nowrap block"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Not sure which course to start with?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Get personalized recommendations based on your goals and current skill level. Our experts will guide you to the perfect learning path.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              <i className="ri-customer-service-line w-5 h-5 flex items-center justify-center"></i>
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}