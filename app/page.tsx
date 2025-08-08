
'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import AboutTeam from '@/components/home/AboutTeam';
import ProductShowcase from '@/components/home/ProductShowcase';
import CallToAction from '@/components/home/CallToAction';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-500/5 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-yellow-400/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-48 h-48 bg-yellow-300/5 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-yellow-500/20 rotate-45 animate-spin"></div>
      </div>
      
      <Header />
      <HeroSection />
      <AboutTeam />
      <ProductShowcase />
      <CallToAction />
      <Footer />
    </main>
  );
}
