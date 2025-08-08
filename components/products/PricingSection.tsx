
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState('lifetime');

  const plans = [
    {
      name: "Single Course",
      description: "Perfect for focused learning",
      price: billingPeriod === 'lifetime' ? '$49-129' : '$19-39',
      originalPrice: billingPeriod === 'lifetime' ? '$79-199' : '$29-59',
      period: billingPeriod === 'lifetime' ? 'one-time' : 'per month',
      features: [
        "Access to one course",
        `${billingPeriod === 'lifetime' ? 'Lifetime' : 'Monthly'} access`,
        "HD video lessons",
        "Downloadable resources", 
        "Community support",
        "Mobile app access"
      ],
      popular: false,
      savings: billingPeriod === 'lifetime' ? '40% OFF' : null
    },
    {
      name: "Complete Bundle",
      description: "Best value for comprehensive mastery",
      price: billingPeriod === 'lifetime' ? '$299' : '$79',
      originalPrice: billingPeriod === 'lifetime' ? '$795' : '$159',
      period: billingPeriod === 'lifetime' ? 'one-time' : 'per month',
      features: [
        "All 6 courses included",
        `${billingPeriod === 'lifetime' ? 'Lifetime' : 'Monthly'} access`,
        "Priority expert support",
        "Exclusive bonus content",
        "Certificate of completion",
        "Future course updates",
        "1-on-1 mentoring sessions",
        "Portfolio review"
      ],
      popular: true,
      savings: billingPeriod === 'lifetime' ? '62% OFF' : '50% OFF'
    },
    {
      name: "Pro Mentorship",
      description: "Accelerated success with personal guidance",
      price: billingPeriod === 'lifetime' ? '$599' : '$149',
      originalPrice: billingPeriod === 'lifetime' ? '$1299' : '$299',
      period: billingPeriod === 'lifetime' ? 'one-time' : 'per month',
      features: [
        "Everything in Complete Bundle",
        "Weekly 1-on-1 mentoring",
        "Personal project reviews",
        "Career guidance",
        "Interview preparation",
        "Job placement assistance",
        "Direct instructor access",
        "Custom learning path"
      ],
      popular: false,
      savings: billingPeriod === 'lifetime' ? '54% OFF' : '50% OFF'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-500/15 rounded-full blur-2xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-400/20 text-yellow-400 text-sm font-medium border border-yellow-400/30 mb-6">
            <i className="ri-price-tag-line w-4 h-4 flex items-center justify-center mr-2"></i>
            Flexible Pricing Options
          </span>
          <h2 className="text-5xl font-bold text-white mb-6">
            Choose Your
            <span className="block text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">
              Victory Path
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Select the learning option that aligns with your goals and timeline. 
            All plans include our signature easy-learning approach and lifetime support.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-2">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                billingPeriod === 'monthly'
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Monthly Access
            </button>
            <button
              onClick={() => setBillingPeriod('lifetime')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap relative ${
                billingPeriod === 'lifetime'
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Lifetime Access
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                SAVE 60%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border transition-all duration-500 hover:scale-105 ${
                plan.popular 
                  ? 'border-yellow-400/50 ring-2 ring-yellow-400/20 shadow-2xl shadow-yellow-400/10' 
                  : 'border-gray-700/50 hover:border-yellow-400/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap shadow-lg">
                    ⭐ MOST POPULAR
                  </div>
                </div>
              )}

              {plan.savings && (
                <div className="absolute -top-4 -right-4">
                  <div className="bg-red-500 text-white px-3 py-2 rounded-full text-sm font-bold animate-pulse">
                    {plan.savings}
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-4xl font-bold text-yellow-400">{plan.price}</span>
                    {plan.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{plan.originalPrice}</span>
                    )}
                  </div>
                  <div className="text-gray-400 text-sm">{plan.period}</div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                      <i className="ri-check-line text-lg text-yellow-400"></i>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="/contact"
                className={`w-full block text-center py-4 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:scale-105 shadow-lg hover:shadow-yellow-400/25' 
                    : 'border-2 border-gray-600 text-gray-300 hover:border-yellow-400 hover:text-yellow-400 hover:bg-yellow-400/10'
                }`}
              >
                {plan.popular ? '🚀 Start Your Victory' : 'Get Started'}
              </Link>
            </div>
          ))}
        </div>

        {/* Guarantee Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl px-8 py-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-shield-check-line text-2xl text-yellow-400"></i>
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-xl">30-Day Money-Back Guarantee</div>
                <div className="text-gray-400">Learn with complete confidence - we guarantee your success</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-secure-payment-line text-xl text-green-400"></i>
                </div>
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-customer-service-2-line text-xl text-blue-400"></i>
                </div>
                <span>24/7 Expert Support</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-award-line text-xl text-purple-400"></i>
                </div>
                <span>Certified Training</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
