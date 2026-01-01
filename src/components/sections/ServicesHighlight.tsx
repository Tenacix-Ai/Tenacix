'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
    {
        badge: 'Fixed Scope',
        title: 'Web\nScalability',
        description: 'Plan-driven engineering for massive growth. Instant, secure, and infinitely scalable digital environments.',
        cta: 'Explore Infrastructure',
        color: 'zinc',
        borderPosition: 'md:border-r',
    },
    {
        badge: 'Flexible Scale',
        title: 'AI Agents',
        description: 'Change-driven autonomous workflows. Deploy custom LLMs to handle complex decision-making 24/7.',
        cta: 'Deploy Intelligence',
        color: 'zinc',
        borderPosition: '',
    },
];

export default function ServicesHighlight() {
    return (
        <section
            id="services-highlight"
            className="py-32 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white relative overflow-hidden transition-colors duration-500"
        >

            <div className="max-w-[90%] mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 px-4"
                >
                    <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-neutral-500 mb-4">
                        Our Expertise
                    </h2>
                    <p className="text-3xl md:text-4xl font-light text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
                        Precision engineering for the <span className="text-black dark:text-white">autonomous age</span>.
                    </p>
                </motion.div>

                <div className="flex flex-col">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="group relative border-t border-neutral-200 dark:border-white/10 py-16 px-6 flex flex-col md:flex-row gap-8 md:items-start justify-between transition-all duration-500 hover:border-neutral-300 dark:hover:border-white/20"
                        >
                            {/* LIQUID GLASS HOVER LAYER */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                {/* Soft Radial Shine - Adapted for Light/Dark */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)] blur-xl" />
                                {/* Glass Shimmer */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
                            </div>

                            <div className="md:w-1/2 relative z-10">
                                <div className="mb-6 overflow-hidden flex items-center gap-3">
                                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                                        0{idx + 1}
                                    </span>
                                    {/* Refined Liquid Badge */}
                                    <span className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-[10px] font-bold uppercase tracking-wider text-neutral-600 dark:text-white/70 backdrop-blur-md group-hover:bg-black/10 dark:group-hover:bg-white/10 group-hover:border-black/10 dark:group-hover:border-white/20 transition-all duration-300">
                                        {service.badge}
                                    </span>
                                </div>
                                <h3 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-neutral-400 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors duration-500 leading-[0.9] whitespace-pre-line group-hover:translate-x-2 transition-transform ease-out drop-shadow-sm dark:drop-shadow-2xl">
                                    {service.title}
                                </h3>
                            </div>

                            <div className="md:w-1/3 flex flex-col justify-between pt-4 relative z-10">
                                <p className="text-lg text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors duration-500 leading-relaxed max-w-sm">
                                    {service.description}
                                </p>

                                <div className="mt-12 flex items-center gap-4 group/btn cursor-pointer">
                                    <span className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                                        {service.cta}
                                    </span>
                                    {/* Liquid Button Circle */}
                                    <div className="w-12 h-12 rounded-full border border-neutral-200 dark:border-white/10 flex items-center justify-center group-hover:border-black/20 dark:group-hover:border-white/30 group-hover:bg-black/5 dark:group-hover:bg-white/10 group-hover:backdrop-blur-md group-hover:shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-500">
                                        <ArrowRight className="w-5 h-5 text-neutral-400 dark:text-white/50 group-hover:text-black dark:group-hover:text-white -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    {/* Bottom border */}
                    <div className="border-t border-neutral-200 dark:border-white/10" />
                </div>
            </div>
        </section>
    );
}
