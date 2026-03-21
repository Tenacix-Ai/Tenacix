'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
  isStatic?: boolean;
}

export function NavBar({ items, className, isStatic }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track which section is in view and update the active spotlight accordingly
  // Uses scroll events instead of IntersectionObserver to handle very tall
  // sections (e.g. Process at 400vh) where threshold-based detection fails.
  useEffect(() => {
    const sectionIds = items.map((item) => item.url.replace('#', ''));

    const handleScroll = () => {
      let currentSection = items[0].name;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (!element) continue;

        const rect = element.getBoundingClientRect();

        // If the top of the section is at or above 40% of the viewport height,
        // this section is considered "active"
        if (rect.top <= window.innerHeight * 0.4) {
          currentSection = items[i].name;
          break;
        }
      }

      setActiveTab(currentSection);
    };

    handleScroll(); // set initial state
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items, isStatic]);

  return (
    <div
      className={cn(
        !isStatic &&
          'fixed bottom-4 sm:bottom-auto sm:top-6 left-1/2 -translate-x-1/2 z-50 mb-safe',
        isStatic && 'relative z-50',
        className,
      )}
    >
      <div className="flex items-center gap-1 sm:gap-2 bg-white/5 border border-white/10 backdrop-blur-lg py-2 px-2 sm:py-1.5 sm:px-1.5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                'relative cursor-pointer text-xs sm:text-sm font-semibold px-4 py-2 sm:px-6 rounded-full transition-colors',
                'text-foreground/80 hover:text-primary',
                isActive && 'bg-muted text-primary',
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={16} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-white/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-8 sm:w-10 h-[2px] bg-white rounded-t-full shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                    <div className="absolute w-12 sm:w-16 h-6 sm:h-8 bg-white/20 rounded-full blur-xl -top-4 -left-2 sm:-left-3" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
