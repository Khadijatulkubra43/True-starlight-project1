
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductsHero from '@/components/products/ProductsHero';
import CourseGrid from '@/components/products/CourseGrid';
import PricingSection from '@/components/products/PricingSection';

export default function Products() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-yellow-500/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-56 h-56 bg-yellow-400/10 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/3 left-1/2 w-12 h-12 bg-yellow-500/20 rotate-45 animate-spin delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-yellow-400/40 rounded-full animate-pulse delay-2000"></div>
      </div>

      <Header />
      <ProductsHero />
      <CourseGrid />
      <PricingSection />
      <Footer />
    </main>
  );
}
