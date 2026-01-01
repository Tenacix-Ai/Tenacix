'use client';

import { motion } from 'framer-motion';
import { BrainCircuit, ScanEye, Network } from 'lucide-react';

const features = [
    {
        icon: BrainCircuit,
        title: 'Cognitive Architecture',
        description: 'We architect digital ecosystems that think. Scalable, self-correcting design systems built for the next decade of web evolution.',
        iconColor: 'dark:text-zinc-200 text-zinc-900',
    },
    {
        icon: ScanEye,
        title: 'Visual Intelligence',
        description: 'Design that speaks before you do. We craft distinct aesthetic identities that command authority and dissolve competition.',
        iconColor: 'dark:text-zinc-200 text-zinc-900',
    },
    {
        icon: Network,
        title: 'Neural Operations',
        description: 'Silence the noise. Autonomous AI agents that handle complex workflows, support, and sales while you sleep.',
        iconColor: 'dark:text-zinc-200 text-zinc-900',
    },
];

export default function AboutSection() {
    return (
        <section
            id="about"
            className="dark:bg-black bg-white py-24 md:py-32 border-b dark:border-white/10 border-gray-100 relative overflow-hidden"
        >
            {/* Decorative Glass Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-zinc-200/20 to-transparent dark:from-zinc-800/20 blur-[100px] rounded-full mix-blend-overlay pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-zinc-200/20 to-transparent dark:from-zinc-800/20 blur-[100px] rounded-full mix-blend-overlay pointer-events-none" />

            {/* Hard Glass Shards - Floating Decorations */}
            <div className="absolute top-20 right-[10%] w-32 h-32 border border-black/5 dark:border-white/10 rounded-2xl bg-white/5 backdrop-blur-md rotate-12 animate-float pointer-events-none z-0" />
            <div className="absolute bottom-20 left-[5%] w-24 h-24 border border-black/5 dark:border-white/10 rounded-xl bg-white/5 backdrop-blur-md -rotate-6 animate-float pointer-events-none z-0" style={{ animationDelay: '1.5s' }} />

            <div className="relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 text-center md:text-left"
                    >
                        <span className="block text-xs font-mono mb-3 dark:text-zinc-400 text-zinc-500 uppercase tracking-widest">
                            Where we come into play
                        </span>
                        <h2 className="text-5xl sm:text-6xl md:text-8xl font-black dark:text-white text-black leading-[0.9] tracking-tighter uppercase mb-6">
                            About Us.
                        </h2>
                    </motion.div>

                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
                        {/* Feature 1: Cognitive Architecture - Large Horizontal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="group relative md:col-span-2 md:row-span-1 p-8 md:p-12 rounded-[2.5rem] border dark:border-white/10 border-black/5 bg-gradient-to-br dark:from-white/5 dark:to-transparent from-black/5 to-transparent backdrop-blur-3xl overflow-hidden hover:border-white/20 transition-all duration-500"
                        >
                            <div className="absolute top-12 md:top-16 right-8 text-8xl font-black text-black/5 dark:text-white/5 pointer-events-none group-hover:scale-110 transition-transform duration-700">01</div>
                            <div className="relative z-10 h-full mt-4">
                                <h3 className="text-4xl font-bold mb-4 dark:text-white text-black tracking-tight">{features[0].title}</h3>
                                <p className="text-xl dark:text-zinc-400 text-zinc-600 max-w-xl leading-relaxed">{features[0].description}</p>
                            </div>
                        </motion.div>

                        {/* Feature 2: Visual Intelligence - Vertical */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="group relative md:col-span-1 md:row-span-2 p-8 md:p-12 rounded-[2.5rem] border dark:border-white/10 border-black/5 bg-gradient-to-b dark:from-white/5 dark:to-transparent from-black/5 to-transparent backdrop-blur-3xl overflow-hidden hover:border-white/20 transition-all duration-500"
                        >
                            <div className="absolute bottom-[-20px] left-[-20px] text-[12rem] font-black text-black/5 dark:text-white/5 pointer-events-none group-hover:rotate-12 transition-transform duration-700">02</div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold mb-4 dark:text-white text-black tracking-tight">{features[1].title}</h3>
                                <p className="text-lg dark:text-zinc-400 text-zinc-600 leading-relaxed">{features[1].description}</p>
                            </div>
                            <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                                <span className="text-xl">↗</span>
                            </div>
                        </motion.div>

                        {/* Feature 3: Neural Operations - Remaining Horizontal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="group relative md:col-span-2 md:row-span-1 p-8 md:p-12 rounded-[2.5rem] border dark:border-white/10 border-black/5 bg-gradient-to-br dark:from-white/5 dark:to-transparent from-black/5 to-transparent backdrop-blur-3xl overflow-hidden hover:border-white/20 transition-all duration-500"
                        >
                            <div className="absolute top-12 md:top-16 right-8 text-8xl font-black text-black/5 dark:text-white/5 pointer-events-none group-hover:scale-110 transition-transform duration-700">03</div>
                            <div className="relative z-10 h-full mt-4">
                                <h3 className="text-4xl font-bold mb-4 dark:text-white text-black tracking-tight">{features[2].title}</h3>
                                <p className="text-xl dark:text-zinc-400 text-zinc-600 max-w-xl leading-relaxed">{features[2].description}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
