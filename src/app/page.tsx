'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesHighlight from '@/components/sections/ServicesHighlight';
import AboutSection from '@/components/sections/AboutSection';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import ContactSection from '@/components/sections/ContactSection';
import ChatBot from '@/components/widgets/ChatBot';
import LoadingScreen from '@/components/ui/LoadingScreen';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="min-h-screen w-full transition-colors duration-300 relative z-10">
      <LoadingScreen onLoadingComplete={() => setIsLoaded(true)} />

      <Header />

      <main className="pt-16">
        <HeroSection isLoaded={isLoaded} />
        <ServicesHighlight />
        <AboutSection />
        <ProcessTimeline />
        <ContactSection />
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}
