'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { LavaLamp } from '@/components/ui/fluid-blob';

import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const tickerItems = [
  { text: 'Strategy', highlight: false },
  { text: 'Development', highlight: true },
  { text: 'Design', highlight: false },
  { text: 'Growth', highlight: true },
  { text: 'AI Agents', highlight: false },
  { text: 'Engineering', highlight: true },
  { text: 'Automation', highlight: false },
  { text: 'Scale', highlight: true },
];

interface HeroSectionProps {
  isLoaded?: boolean;
}

export default function HeroSection({ isLoaded = false }: HeroSectionProps) {
  const title = 'TENACIX';
  const words = title.split(' ');

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min' });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden border-b border-black/10 dark:border-white/10 bg-black"
    >
      {/* Background Animation - Reverted to LavaLamp but Monochrome */}
      <div className="absolute inset-0 z-0 opacity-50 contrast-125 grayscale">
        <LavaLamp />
      </div>

      <div className="relative z-10 text-center max-w-7xl mx-auto px-6 pointer-events-none">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-zinc-100/10 dark:bg-white/5 border border-zinc-200/20 dark:border-white/10 backdrop-blur-md pointer-events-auto"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          <span className="uppercase text-[10px] font-sans font-medium text-zinc-400 tracking-widest">
            AI Agents & Websites
          </span>
        </motion.div>

        {/* Main Title with Letter Animation */}
        <h1 className="md:text-9xl lg:text-[10rem] leading-[0.85] text-5xl sm:text-6xl font-black tracking-tighter mb-8 cursor-default text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mix-blend-difference">
          {words.map((word, wordIndex) => (
            <span
              key={wordIndex}
              className="inline-block mr-4 last:mr-0 hover:text-zinc-400 transition-colors duration-500"
            >
              {word.split('').map((letter, letterIndex) => (
                <span
                  key={`${wordIndex}-${letterIndex}`}
                  className="inline-block hover:-translate-y-4 transition-transform duration-300"
                >
                  {letter}
                </span>
              ))}
            </span>
          ))}
        </h1>

        {/* Description */}
        <div className="max-w-3xl mx-auto mb-12">
          <TextGenerateEffect
            words="At TENACIX, we design high-performance websites and AI agents that automate, convert, and scale modern businesses."
            className="md:text-xl text-lg font-light text-neutral-300"
          />
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 items-center justify-center pointer-events-auto"
        >
          <button
            data-cal-namespace="30min"
            data-cal-link="tenacix/30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className="inline-flex items-center gap-2 hover:gap-3 rounded-full px-8 py-4 text-base font-semibold liquid-glass-button
                        group hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] border-white/20 bg-white/5 transition-all duration-300 cursor-pointer"
          >
            <span className="opacity-90 group-hover:opacity-100 transition-opacity text-white">
              Book a Call
            </span>
            <span
              className="ml-2 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                            transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5 text-zinc-300" />
            </span>
          </button>

          <Link
            href="#services-highlight"
            className="group inline-flex items-center justify-center text-neutral-400 hover:text-white text-sm font-medium transition-colors duration-300 px-6 py-4"
          >
            <span>Explore Services</span>
            <ArrowDown className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-1" />
          </Link>
        </motion.div>
      </div>

      {/* Ticker */}
      <div className="overflow-hidden bg-black/20 w-full border-t border-white/5 py-4 absolute bottom-0 backdrop-blur-sm z-20 pointer-events-none">
        <div className="flex whitespace-nowrap gap-16 animate-marquee">
          {/* Double the items for seamless loop */}
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <span
              key={idx}
              className={`text-xs font-medium uppercase tracking-widest ${
                item.highlight ? 'text-white font-bold' : 'text-zinc-600'
              }`}
            >
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
