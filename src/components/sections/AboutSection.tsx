'use client';

import { motion } from 'framer-motion';
import { LayoutDashboard, Moon, Bot } from 'lucide-react';

const features = [
    {
        icon: LayoutDashboard,
        title: 'Digital Product',
        description: 'We build scalable design systems and high-fidelity interfaces. Focusing on interaction patterns that drive user retention and operational efficiency.',
        iconColor: 'dark:text-zinc-200 text-zinc-900',
    },
    {
        icon: Moon,
        title: 'Brand Identity',
        description: 'Translating complex business logic into singular visual narratives. We create brands that feel inevitable in their respective markets.',
        iconColor: 'dark:text-zinc-200 text-zinc-900',
    },
    {
        icon: Bot,
        title: 'AI Agents',
        description: 'Deploy autonomous workflows that handle complex decision-making and scale your operations 24/7.',
        iconColor: 'dark:text-zinc-200 text-zinc-900',
    },
];

export default function AboutSection() {
    return (
        <section
            id="about"
            className="dark:bg-black bg-white py-24 md:py-32 border-b dark:border-white/10 border-gray-100 relative overflow-hidden"
        >
            {/* Gradient orbs for background - REMOVED */}
            {/* <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" /> */}

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

                    {/* Feature Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                                className="group relative flex flex-col justify-between p-8 md:p-10 rounded-3xl border dark:border-white/10 border-black/5 bg-gradient-to-br dark:from-white/5 dark:to-transparent from-black/5 to-transparent backdrop-blur-2xl overflow-hidden hover:border-white/30 transition-all duration-500"
                            >
                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div>
                                    <div className="mb-8 w-14 h-14 rounded-2xl flex items-center justify-center dark:bg-white/10 bg-black/5 dark:border-white/10 border-black/5 border group-hover:scale-110 transition-transform duration-500">
                                        <feature.icon size={28} className={feature.iconColor} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4 dark:text-white text-black tracking-tight">{feature.title}</h3>
                                    <p className="text-lg dark:text-zinc-400 text-zinc-600 leading-relaxed">{feature.description}</p>
                                </div>
                                <div className="mt-8">
                                    <div className="h-px w-full dark:bg-white/10 bg-black/10 group-hover:dark:bg-white/30 transition-colors duration-500" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
