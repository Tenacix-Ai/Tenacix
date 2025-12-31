import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesHighlight from '@/components/sections/ServicesHighlight';
import AboutSection from '@/components/sections/AboutSection';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import ContactSection from '@/components/sections/ContactSection';
import ChatBot from '@/components/widgets/ChatBot';

export default function Home() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white transition-colors duration-300">
      <Header />

      <main className="pt-16">
        <HeroSection />
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
