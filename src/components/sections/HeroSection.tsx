'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { LavaLamp } from '@/components/ui/fluid-blob';
import { Button } from '@/components/ui/button';

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
    const title = "VRTX";
    const words = title.split(" ");

    return (
        <section
            id="home"
            className="relative min-h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-neutral-950 border-b border-black/10 dark:border-white/10"
        >
            {/* Background Lava Lamp Animation */}
            <div className="absolute inset-0 z-0">
                <LavaLamp />
            </div>

            <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pointer-events-none">
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex gap-2 bg-neutral-100/50 dark:bg-white/10 border-neutral-200 dark:border-white/20 border rounded-full mb-8 py-1.5 px-4 items-center backdrop-blur-md pointer-events-auto dark:mix-blend-difference"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-900 dark:bg-white opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-900 dark:bg-white" />
                    </span>
                    <span className="uppercase text-xs font-medium text-neutral-900 dark:text-white tracking-wider">
                        AI Agents and Websites
                    </span>
                </motion.div>

                {/* Main Title with Letter Animation */}
                <h1 className="md:text-8xl lg:text-9xl leading-[0.9] text-6xl font-black tracking-tighter mb-8 cursor-default text-neutral-950 dark:text-white dark:mix-blend-difference">
                    {words.map((word, wordIndex) => (
                        <span
                            key={wordIndex}
                            className="inline-block mr-4 last:mr-0"
                        >
                            {word.split("").map((letter, letterIndex) => (
                                <span
                                    key={`${wordIndex}-${letterIndex}`}
                                    className="inline-block"
                                >
                                    {letter}
                                </span>
                            ))}
                        </span>
                    ))}
                </h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="md:text-xl leading-relaxed text-lg font-light text-neutral-600 dark:text-white max-w-2xl mx-auto mb-12 dark:mix-blend-difference"
                >
                    At VRTX, we design{' '}
                    <span className="font-bold text-neutral-900 dark:text-white">high-performance websites</span> and{' '}
                    <span className="font-bold text-neutral-900 dark:text-white">AI agents</span> that automate, convert, and
                    scale modern businesses.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 items-center justify-center pointer-events-auto"
                >
                    <Link href="#contact" passHref>
                        <Button
                            className="rounded-full h-auto px-8 py-4 text-base font-semibold liquid-glass-button
                            group hover:shadow-lg"
                        >
                            <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                Book a Call
                            </span>
                            <span
                                className="ml-2 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                transition-all duration-300"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </span>
                        </Button>
                    </Link>

                    <Link
                        href="#services-highlight"
                        className="group inline-flex items-center justify-center text-neutral-600 dark:text-white dark:mix-blend-difference hover:text-neutral-900 dark:hover:text-white/80 text-sm font-medium transition-colors duration-300 px-6 py-4"
                    >
                        <span>Explore Services</span>
                        <ArrowDown className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-1" />
                    </Link>
                </motion.div>
            </div>

            {/* Ticker */}
            <div className="overflow-hidden bg-neutral-100/50 dark:bg-white/5 w-full border-t border-neutral-200 dark:border-white/10 py-4 absolute bottom-0 backdrop-blur-sm z-20 dark:mix-blend-difference pointer-events-none">
                <div className="flex whitespace-nowrap gap-16 animate-marquee">
                    {/* Double the items for seamless loop */}
                    {[...tickerItems, ...tickerItems].map((item, idx) => (
                        <span
                            key={idx}
                            className={`text-xs font-medium uppercase tracking-widest ${item.highlight
                                ? 'text-neutral-900 dark:text-white font-bold'
                                : 'text-neutral-400'
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
