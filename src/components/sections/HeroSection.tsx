'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { FloatingPaths } from '@/components/ui/background-paths';
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

export default function HeroSection() {
    const title = "VRTX";
    const words = title.split(" ");

    return (
        <section
            id="home"
            className="relative min-h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-neutral-950 border-b border-black/10 dark:border-white/10"
        >
            {/* Background Paths Animation */}
            <div className="absolute inset-0 z-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex gap-2 dark:bg-white/5 bg-neutral-100 dark:border-white/10 border-neutral-200 border rounded-full mb-8 py-1.5 px-4 items-center backdrop-blur-md"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-500 dark:bg-white" />
                    </span>
                    <span className="uppercase text-xs font-medium dark:text-neutral-300 text-neutral-600 tracking-wider">
                        AI Agents and Websites
                    </span>
                </motion.div>

                {/* Main Title with Letter Animation */}
                <h1 className="md:text-8xl lg:text-9xl leading-[0.9] text-6xl font-bold tracking-tighter mb-8 cursor-default">
                    {words.map((word, wordIndex) => (
                        <span
                            key={wordIndex}
                            className="inline-block mr-4 last:mr-0"
                        >
                            {word.split("").map((letter, letterIndex) => (
                                <motion.span
                                    key={`${wordIndex}-${letterIndex}`}
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        delay:
                                            wordIndex * 0.1 +
                                            letterIndex * 0.03,
                                        type: "spring",
                                        stiffness: 150,
                                        damping: 25,
                                    }}
                                    className="inline-block text-transparent bg-clip-text 
                                    bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                                    dark:from-white dark:to-white/80"
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </span>
                    ))}
                </h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:text-xl leading-relaxed text-lg font-light dark:text-neutral-400 text-neutral-600 max-w-2xl mx-auto mb-12"
                >
                    At VRTX, we design{' '}
                    <span className="dark:text-white text-neutral-900 font-medium">high-performance websites</span> and{' '}
                    <span className="dark:text-white text-neutral-900 font-medium">AI agents</span> that automate, convert, and
                    scale modern businesses.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 items-center justify-center"
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
                        className="group inline-flex items-center justify-center dark:text-neutral-400 text-neutral-600 dark:hover:text-white hover:text-neutral-900 text-sm font-medium transition-colors duration-300 px-6 py-4"
                    >
                        <span>Explore Services</span>
                        <ArrowDown className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-1" />
                    </Link>
                </motion.div>
            </div>

            {/* Ticker */}
            <div className="overflow-hidden dark:bg-black/0 bg-white/0 w-full dark:border-white/5 border-black/5 border-t py-4 absolute bottom-0 backdrop-blur-sm z-20">
                <div className="flex whitespace-nowrap gap-16 animate-marquee">
                    {/* Double the items for seamless loop */}
                    {[...tickerItems, ...tickerItems].map((item, idx) => (
                        <span
                            key={idx}
                            className={`text-xs font-medium uppercase tracking-widest ${item.highlight
                                ? 'dark:text-white text-black font-bold'
                                : 'dark:text-neutral-500 text-neutral-400'
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
