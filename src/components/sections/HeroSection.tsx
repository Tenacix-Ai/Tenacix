'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import Link from 'next/link';

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
    return (
        <section
            id="home"
            className="min-h-[90vh] flex flex-col overflow-hidden dark:border-gray-800 border-gray-200 border-b relative items-center justify-center dark:bg-black bg-white transition-colors duration-300"
        >
            <div className="z-10 text-center max-w-5xl mx-auto px-6">
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex gap-2 dark:bg-white/10 bg-purple-100 dark:border-purple-500/30 border-purple-300 border rounded-full mb-8 py-1.5 px-4 items-center backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
                    </span>
                    <span className="uppercase text-xs font-medium dark:text-white text-purple-700 tracking-wider">
                        AI Agents and Websites
                    </span>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="md:text-8xl lg:text-9xl leading-[0.9] text-6xl font-bold dark:text-white text-gray-900 tracking-tighter mb-8"
                >
                    VRTX
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:text-xl leading-relaxed text-lg font-light dark:text-gray-400 text-gray-600 max-w-2xl mx-auto mb-12"
                >
                    At VRTX, we design{' '}
                    <span className="dark:text-white text-gray-900 font-medium">high-performance websites</span> and{' '}
                    <span className="dark:text-white text-gray-900 font-medium">AI agents</span> that automate, convert, and
                    scale modern businesses.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 items-center justify-center"
                >
                    <Link
                        href="#contact"
                        className="group inline-flex items-center justify-center overflow-hidden transition-all duration-300 text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-full py-3.5 px-8 relative shadow-lg hover:shadow-xl hover:shadow-purple-500/25"
                    >
                        <span className="z-10 text-sm font-medium relative flex items-center gap-2">
                            Book a Call
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                        </span>
                    </Link>
                    <Link
                        href="#services-highlight"
                        className="group inline-flex items-center justify-center dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900 text-sm font-medium transition-colors duration-300"
                    >
                        <span>Explore Services</span>
                        <ArrowDown className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-1" />
                    </Link>
                </motion.div>
            </div>

            {/* Ticker */}
            <div className="overflow-hidden dark:bg-black/80 bg-white/80 w-full dark:border-gray-800 border-gray-200 border-t py-4 absolute bottom-0 backdrop-blur-sm">
                <div className="flex whitespace-nowrap gap-16 animate-marquee">
                    {/* Double the items for seamless loop */}
                    {[...tickerItems, ...tickerItems].map((item, idx) => (
                        <span
                            key={idx}
                            className={`text-xs font-medium uppercase tracking-widest ${item.highlight
                                    ? 'text-purple-400 font-semibold'
                                    : 'text-gray-500'
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
