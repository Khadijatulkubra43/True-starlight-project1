
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Terms() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { id: 0, title: "Agreement to Terms", icon: "ri-handshake-line" },
    { id: 1, title: "Course Access & Usage", icon: "ri-play-circle-line" },
    { id: 2, title: "Payment & Refunds", icon: "ri-secure-payment-line" },
    { id: 3, title: "User Responsibilities", icon: "ri-user-settings-line" },
    { id: 4, title: "Intellectual Property", icon: "ri-copyright-line" },
    { id: 5, title: "Service Availability", icon: "ri-cloud-line" },
    { id: 6, title: "Limitation of Liability", icon: "ri-shield-check-line" },
    { id: 7, title: "Privacy & Data", icon: "ri-lock-line" },
    { id: 8, title: "Termination", icon: "ri-logout-box-line" },
    { id: 9, title: "Changes to Terms", icon: "ri-refresh-line" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-20 w-96 h-96 bg-yellow-500/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-yellow-400/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-yellow-500/30 rotate-45 animate-spin"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-yellow-400/40 rounded-full animate-pulse delay-1000"></div>
      </div>

      <Header />
      
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-yellow-300/10 rounded-3xl blur-3xl"></div>
            <div className="relative z-10 p-8">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-yellow-200 to-yellow-500 bg-clip-text text-transparent mb-6 animate-fade-in">
                Terms of Service
              </h1>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Clear, fair terms that protect both you and True Starlight as we build your web design mastery together
              </p>
              <div className="flex items-center justify-center gap-4 mt-6 text-yellow-400">
                <i className="ri-calendar-line w-5 h-5 flex items-center justify-center"></i>
                <span className="text-gray-400">Last updated: December 2024</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Quick Navigation</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left p-3 rounded-xl transition-all duration-300 flex items-center gap-3 group ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold'
                          : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                      }`}
                    >
                      <i className={`${section.icon} w-5 h-5 flex items-center justify-center transition-transform group-hover:scale-110`}></i>
                      <span className="text-sm">{section.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden">
                
                {/* Agreement to Terms */}
                {activeSection === 0 && (
                  <div className="p-8 animate-fade-in">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                        <i className="ri-handshake-line w-6 h-6 flex items-center justify-center text-black"></i>
                      </div>
                      <h2 className="text-3xl font-bold text-white">Agreement to Terms</h2>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-400/10 p-6 rounded-xl border border-yellow-500/20">
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Welcome to the True Starlight community! By accessing our educational platform and engaging with our web design courses, you're entering into a partnership built on mutual respect and shared goals. These terms ensure we can provide you with the highest quality learning experience while protecting both your interests and ours.
                      </p>
                      <div className="mt-6 grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-800/50 p-4 rounded-lg">
                          <h4 className="text-yellow-400 font-semibold mb-2">What You Get</h4>
                          <p className="text-gray-400 text-sm">Premium educational content, lifetime access, and ongoing support</p>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg">
                          <h4 className="text-yellow-400 font-semibold mb-2">What We Expect</h4>
                          <p className="text-gray-400 text-sm">Respectful use of our platform and adherence to our community guidelines</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Course Access & Usage */}
                {activeSection === 1 && (
                  <div className="p-8 animate-fade-in">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                        <i className="ri-play-circle-line w-6 h-6 flex items-center justify-center text-black"></i>
                      </div>
                      <h2 className="text-3xl font-bold text-white">Course Access & Usage</h2>
                    </div>
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
                        <h4 className="text-green-400 font-bold text-xl mb-3 flex items-center gap-2">
                          <i className="ri-infinity-line w-5 h-5 flex items-center justify-center"></i>
                          Lifetime Access Promise
                        </h4>
                        <p className="text-gray-300 mb-4">Once you purchase a course, it's yours forever. This includes all future updates, bonus materials, and improvements we make to keep the content current with web design trends.</p>
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                          <div className="flex items-center gap-3 text-green-400">
                            <i className="ri-check-line w-4 h-4 flex items-center justify-center"></i>
                            <span className="text-sm">Unlimited video streaming</span>
                          </div>
                          <div className="flex items-center gap-3 text-green-400">
                            <i className="ri-check-line w-4 h-4 flex items-center justify-center"></i>
                            <span className="text-sm">Downloadable resources</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-xl border border-blue-500/20">
                        <h4 className="text-blue-400 font-bold text-lg mb-3">Personal Learning License</h4>
                        <p className="text-gray-300">Your course access is designed for individual learning. While we encourage you to apply what you learn in your work, please don't share your login credentials or redistribute course materials.</p>
                      </div>

                      <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-xl border border-orange-500/20">
                        <h4 className="text-orange-400 font-bold text-lg mb-3">Usage Guidelines</h4>
                        <ul className="text-gray-300 space-y-2">
                          <li className="flex items-start gap-3">
                            <i className="ri-arrow-right-s-line w-4 h-4 flex items-center justify-center text-orange-400 mt-1"></i>
                            <span>Download materials for offline learning on your personal devices</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <i className="ri-arrow-right-s-line w-4 h-4 flex items-center justify-center text-orange-400 mt-1"></i>
                            <span>Use course techniques and knowledge in your professional work</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <i className="ri-close-line w-4 h-4 flex items-center justify-center text-red-400 mt-1"></i>
                            <span>No redistribution, resale, or public sharing of course content</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Payment & Refunds */}
                {activeSection === 2 && (
                  <div className="p-8 animate-fade-in">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                        <i className="ri-secure-payment-line w-6 h-6 flex items-center justify-center text-black"></i>
                      </div>
                      <h2 className="text-3xl font-bold text-white">Payment & Refunds</h2>
                    </div>
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 p-6 rounded-xl border border-emerald-500/20">
                        <h4 className="text-emerald-400 font-bold text-xl mb-3 flex items-center gap-2">
                          <i className="ri-shield-check-line w-5 h-5 flex items-center justify-center"></i>
                          30-Day Victory Guarantee
                        </h4>
                        <p className="text-gray-300 mb-4">We're so confident in our teaching method that we offer a full 30-day money-back guarantee. If our courses don't help you achieve your web design goals, get your money back—no questions asked.</p>
                        <div className="bg-gray-800/50 p-4 rounded-lg">
                          <p className="text-yellow-400 font-semibold">How to Request a Refund:</p>
                          <p className="text-gray-400 text-sm mt-1">Simply contact us within 30 days of purchase through our support form or email</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
                          <h4 className="text-blue-400 font-bold text-lg mb-3">Secure Payments</h4>
                          <p className="text-gray-300 mb-4">All transactions are encrypted and processed through trusted payment partners.</p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-3 text-blue-400">
                              <i className="ri-bank-card-line w-4 h-4 flex items-center justify-center"></i>
                              <span className="text-sm">Major credit cards</span>
                            </div>
                            <div className="flex items-center gap-3 text-blue-400">
                              <i className="ri-paypal-line w-4 h-4 flex items-center justify-center"></i>
                              <span className="text-sm">PayPal & digital wallets</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
                          <h4 className="text-purple-400 font-bold text-lg mb-3">Transparent Pricing</h4>
                          <p className="text-gray-300 mb-4">What you see is what you pay. No hidden fees or surprise charges.</p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-3 text-purple-400">
                              <i className="ri-price-tag-3-line w-4 h-4 flex items-center justify-center"></i>
                              <span className="text-sm">One-time payment</span>
                            </div>
                            <div className="flex items-center gap-3 text-purple-400">
                              <i className="ri-infinity-line w-4 h-4 flex items-center justify-center"></i>
                              <span className="text-sm">Lifetime access</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* User Responsibilities */}
                {activeSection === 3 && (
                  <div className="p-8 animate-fade-in">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                        <i className="ri-user-settings-line w-6 h-6 flex items-center justify-center text-black"></i>
                      </div>
                      <h2 className="text-3xl font-bold text-white">User Responsibilities</h2>
                    </div>
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/20">
                        <h4 className="text-cyan-400 font-bold text-lg mb-3">Account Security</h4>
                        <p className="text-gray-300 mb-4">Your account is your gateway to success. Keep your login credentials secure and don't share them with others.</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-gray-800/50 p-3 rounded-lg">
                            <p className="text-yellow-400 font-medium text-sm">Do:</p>
                            <p className="text-gray-400 text-xs">Use strong, unique passwords</p>
                          </div>
                          <div className="bg-gray-800/50 p-3 rounded-lg">
                            <p className="text-red-400 font-medium text-sm">Don't:</p>
                            <p className="text-gray-400 text-xs">Share login with others</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
                        <h4 className="text-green-400 font-bold text-lg mb-3">Community Standards</h4>
                        <p className="text-gray-300 mb-4">When participating in our community features, help create a supportive learning environment for everyone.</p>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <i className="ri-heart-line w-4 h-4 flex items-center justify-center text-green-400 mt-1"></i>
                            <span className="text-gray-300 text-sm">Treat fellow learners with respect and encouragement</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <i className="ri-chat-smile-2-line w-4 h-4 flex items-center justify-center text-green-400 mt-1"></i>
                            <span className="text-gray-300 text-sm">Share constructive feedback and helpful insights</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <i className="ri-forbid-line w-4 h-4 flex items-center justify-center text-red-400 mt-1"></i>
                            <span className="text-gray-300 text-sm">No spam, harassment, or inappropriate content</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 p-6 rounded-xl border border-orange-500/20">
                        <h4 className="text-orange-400 font-bold text-lg mb-3">Accurate Information</h4>
                        <p className="text-gray-300">Provide truthful information when creating accounts or making purchases. This helps us serve you better and ensures smooth access to your courses.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Intellectual Property */}
{activeSection === 4 && (
  <div className="p-8 animate-fade-in">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
        <i className="ri-copyright-line w-6 h-6 flex items-center justify-center text-black"></i>
      </div>
      <h2 className="text-3xl font-bold text-white">Intellectual Property</h2>
    </div>
    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
      <p className="text-gray-300 text-lg leading-relaxed">
        All course materials, videos, graphics, and resources provided through our platform are the intellectual property of True Starlight. They are protected by copyright, trademark, and other applicable laws.
      </p>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="bg-gray-800/50 p-4 rounded-lg">
          <h4 className="text-purple-400 font-semibold mb-2">You May</h4>
          <p className="text-gray-400 text-sm">Use materials for personal learning and skill improvement</p>
        </div>
        <div className="bg-gray-800/50 p-4 rounded-lg">
          <h4 className="text-red-400 font-semibold mb-2">You May Not</h4>
          <p className="text-gray-400 text-sm">Reproduce, sell, or distribute course materials without permission</p>
        </div>
      </div>
    </div>
  </div>
)}

{/* Service Availability */}
{activeSection === 5 && (
  <div className="p-8 animate-fade-in">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
        <i className="ri-cloud-line w-6 h-6 flex items-center justify-center text-black"></i>
      </div>
      <h2 className="text-3xl font-bold text-white">Service Availability</h2>
    </div>
    <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-xl border border-blue-500/20">
      <p className="text-gray-300 text-lg leading-relaxed">
        We strive to keep our platform online and accessible at all times, but we cannot guarantee uninterrupted service. Maintenance, updates, or unforeseen technical issues may occasionally cause downtime.
      </p>
      <ul className="text-gray-300 space-y-2 mt-4">
        <li className="flex items-start gap-3">
          <i className="ri-check-line text-green-400 w-4 h-4 mt-1"></i>
          <span>Regular backups and security updates</span>
        </li>
        <li className="flex items-start gap-3">
          <i className="ri-alert-line text-yellow-400 w-4 h-4 mt-1"></i>
          <span>Advance notice for planned maintenance</span>
        </li>
        <li className="flex items-start gap-3">
          <i className="ri-close-line text-red-400 w-4 h-4 mt-1"></i>
          <span>No liability for temporary unavailability</span>
        </li>
      </ul>
    </div>
  </div>
)}

{/* Limitation of Liability */}
{activeSection === 6 && (
  <div className="p-8 animate-fade-in">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
        <i className="ri-shield-check-line w-6 h-6 flex items-center justify-center text-black"></i>
      </div>
      <h2 className="text-3xl font-bold text-white">Limitation of Liability</h2>
    </div>
    <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 p-6 rounded-xl border border-red-500/20">
      <p className="text-gray-300 text-lg leading-relaxed">
        While we aim to provide the highest quality learning experience, True Starlight will not be held responsible for any direct, indirect, incidental, or consequential damages resulting from the use of our platform.
      </p>
      <div className="bg-gray-800/50 p-4 rounded-lg mt-4">
        <h4 className="text-red-400 font-semibold mb-2">Your Responsibility</h4>
        <p className="text-gray-400 text-sm">Ensure proper use of materials and apply learned concepts responsibly in real-world projects.</p>
      </div>
    </div>
  </div>
)}

{/* Privacy & Data */}
{activeSection === 7 && (
  <div className="p-8 animate-fade-in">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
        <i className="ri-lock-line w-6 h-6 flex items-center justify-center text-black"></i>
      </div>
      <h2 className="text-3xl font-bold text-white">Privacy & Data</h2>
    </div>
    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
      <p className="text-gray-300 text-lg leading-relaxed">
        We value your privacy and are committed to protecting your personal data. Information collected is used solely to improve your learning experience and is never sold to third parties.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <div className="bg-gray-800/50 p-4 rounded-lg">
          <h4 className="text-green-400 font-semibold mb-2">We Do</h4>
          <p className="text-gray-400 text-sm">Encrypt your data and store it securely</p>
        </div>
        <div className="bg-gray-800/50 p-4 rounded-lg">
          <h4 className="text-red-400 font-semibold mb-2">We Don't</h4>
          <p className="text-gray-400 text-sm">Share your personal details without consent</p>
        </div>
      </div>
    </div>
  </div>
)}

{/* Termination */}
{activeSection === 8 && (
  <div className="p-8 animate-fade-in">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
        <i className="ri-logout-box-line w-6 h-6 flex items-center justify-center text-black"></i>
      </div>
      <h2 className="text-3xl font-bold text-white">Termination</h2>
    </div>
    <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 p-6 rounded-xl border border-orange-500/20">
      <p className="text-gray-300 text-lg leading-relaxed">
        We reserve the right to suspend or terminate your account if you violate our terms or engage in unlawful activities. In such cases, no refunds will be issued.
      </p>
      <ul className="text-gray-300 space-y-2 mt-4">
        <li className="flex items-start gap-3">
          <i className="ri-forbid-line text-red-400 w-4 h-4 mt-1"></i>
          <span>Violation of intellectual property rights</span>
        </li>
        <li className="flex items-start gap-3">
          <i className="ri-forbid-line text-red-400 w-4 h-4 mt-1"></i>
          <span>Harassment or abuse of community members</span>
        </li>
      </ul>
    </div>
  </div>
)}

{/* Changes to Terms */}
{activeSection === 9 && (
  <div className="p-8 animate-fade-in">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
        <i className="ri-refresh-line w-6 h-6 flex items-center justify-center text-black"></i>
      </div>
      <h2 className="text-3xl font-bold text-white">Changes to Terms</h2>
    </div>
    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
      <p className="text-gray-300 text-lg leading-relaxed">
        We may update these terms from time to time to reflect changes in our services, laws, or policies. Continued use of the platform after updates means you agree to the revised terms.
      </p>
      <div className="bg-gray-800/50 p-4 rounded-lg mt-4">
        <p className="text-yellow-400 font-semibold">Stay Updated:</p>
        <p className="text-gray-400 text-sm mt-1">We will notify you of major changes via email or platform announcements.</p>
      </div>
    </div>
  </div>
)}

              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-black mb-4">Ready to Start Your Web Design Journey?</h3>
              <p className="text-black/80 mb-6">Join thousands of students who've mastered web design with our proven methods</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 whitespace-nowrap">
                  Browse Courses
                </button>
                <button className="bg-white/20 text-black px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105 whitespace-nowrap">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
