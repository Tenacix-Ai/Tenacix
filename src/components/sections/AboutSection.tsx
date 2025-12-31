'use client';

import { motion } from 'framer-motion';
import { LayoutDashboard, Moon, Bot } from 'lucide-react';

const features = [
    {
        icon: LayoutDashboard,
        title: 'Digital Product',
        description: 'We build scalable design systems and high-fidelity interfaces. Focusing on interaction patterns that drive user retention and operational efficiency.',
        iconColor: 'text-indigo-400',
    },
    {
        icon: Moon,
        title: 'Brand Identity',
        description: 'Translating complex business logic into singular visual narratives. We create brands that feel inevitable in their respective markets.',
        iconColor: 'text-purple-400',
    },
    {
        icon: Bot,
        title: 'AI Agents',
        description: 'Deploy autonomous workflows that handle complex decision-making and scale your operations 24/7.',
        iconColor: 'text-pink-400',
    },
];

export default function AboutSection() {
    return (
        <section
            id="about"
            className="bg-gradient-to-b from-black via-gray-900 to-black py-24 md:py-32 border-b border-gray-800 relative overflow-hidden"
        >
            {/* Gradient orbs for background */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 text-center md:text-left"
                    >
                        <span className="block text-xs font-mono mb-3 text-indigo-400 uppercase tracking-widest">
                            Where we come into play
                        </span>
                        <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-6">
                            About Us.
                        </h2>
                    </motion.div>

                    {/* Feature Cards */}
                    <div className="flex flex-wrap justify-center gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="relative w-80 min-h-[280px] flex flex-col justify-start p-10 transition-all duration-400 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:translate-y-[-8px] hover:bg-white/10 hover:border-indigo-500/30 hover:shadow-[0_25px_50px_rgba(102,126,234,0.2)]"
                            >
                                <div className="mb-4">
                                    <feature.icon size={32} className={feature.iconColor} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                                <p className="text-base text-gray-300 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
