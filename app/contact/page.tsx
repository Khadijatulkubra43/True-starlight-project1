
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 w-72 h-72 bg-yellow-500/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-24 right-20 w-48 h-48 bg-yellow-400/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-yellow-500/30 rotate-45 animate-spin"></div>
      </div>

      <Header />
      <ContactHero />
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
