'use client';

import Link from 'next/link';
import { Home, Briefcase, User, Phone, FileText, ArrowRight } from 'lucide-react';

import { NavBar } from '@/components/ui/tubelight-navbar';

const navItems = [
  { name: 'Home', url: '#home', icon: Home },
  { name: 'Services', url: '#services-highlight', icon: Briefcase },
  { name: 'About', url: '#about', icon: User },
  { name: 'Process', url: '#process', icon: FileText },
  { name: 'Contact', url: '#contact', icon: Phone },
];

export default function Header() {
  // Mobile menu state removed as NavBar handles it

  return (
    <>
      <header className="fixed top-0 w-full z-40 backdrop-blur-md border-b bg-black/80 border-gray-800/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
          {/* Brand */}
          <Link href="#home" className="flex items-center gap-2 group z-20">
            <div className="flex items-center gap-1">
              <span className="font-bold text-2xl tracking-tighter text-white font-sans">
                TENACIX
              </span>
            </div>
          </Link>

          {/* CTA & Theme Toggle */}
          <div className="flex items-center gap-3 z-20">
            {/* Start Project CTA - Liquid Glass Style */}
            <Link
              href="#contact"
              className="flex items-center gap-2 hover:gap-3 transition-all duration-300 group text-[10px] sm:text-xs font-semibold rounded-full py-1.5 px-3 sm:py-2.5 sm:px-5 liquid-glass-button"
            >
              <span className="flex items-center gap-1 sm:gap-2">
                <span className="hidden sm:inline">Start Project</span>
                <span className="sm:hidden">Start</span>
                <ArrowRight className="w-3 h-3 sm:w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>

          {/* Integrated NavBar - Hidden on extremely small screens if needed, otherwise centered */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden md:block">
            <NavBar items={navItems} isStatic />
          </div>
        </div>
      </header>

      {/* Render mobile-only version if floating at bottom is preferred, or let NavBar handle it */}
      <div className="md:hidden">
        <NavBar items={navItems} />
      </div>
    </>
  );
}
