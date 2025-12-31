'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
    {
        badge: 'Fixed Scope',
        title: 'Web\nScalability',
        description: 'Plan-driven engineering for massive growth. Instant, secure, and infinitely scalable digital environments.',
        cta: 'Explore Infrastructure',
        color: 'purple',
        borderPosition: 'md:border-r',
    },
    {
        badge: 'Flexible Scale',
        title: 'AI Agents',
        description: 'Change-driven autonomous workflows. Deploy custom LLMs to handle complex decision-making 24/7.',
        cta: 'Deploy Intelligence',
        color: 'indigo',
        borderPosition: '',
    },
];

export default function ServicesHighlight() {
    return (
        <section
            id="services-highlight"
            className="py-24 md:py-32 dark:bg-gray-900 bg-white dark:border-gray-800 border-gray-200 border-b overflow-hidden transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto px-6 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl"
                >
                    <h2 className="block text-5xl sm:text-6xl md:text-8xl font-black dark:text-white text-gray-900 leading-[0.9] tracking-tighter uppercase mb-6">
                        Ready to build?
                        <br />
                        Let&apos;s get to work.
                    </h2>
                    <p className="text-xl font-light dark:text-gray-400 text-gray-500 leading-relaxed max-w-2xl mt-8">
                        We bridge the gap between{' '}
                        <span className="dark:text-white text-gray-900 font-medium">human creativity</span> and{' '}
                        <span className="dark:text-white text-gray-900 font-medium">machine intelligence</span>.
                    </p>
                </motion.div>
            </div>

            {/* Service Cards Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 min-h-[600px] border-t dark:border-gray-800 border-gray-100">
                {services.map((service, idx) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                        className={`group relative ${service.borderPosition} dark:border-gray-800 border-gray-100 p-12 lg:p-24 flex flex-col justify-between cursor-pointer dark:hover:bg-white/5 hover:bg-gray-50/50 transition-colors`}
                    >
                        <div className="relative z-10 transition-colors duration-300">
                            <span
                                className={`inline-block px-4 py-2 rounded-full border dark:border-gray-700 border-gray-200 dark:bg-gray-800 bg-white text-xs font-mono uppercase tracking-wider mb-6 group-hover:bg-${service.color}-600 group-hover:border-${service.color}-600 group-hover:text-white transition-all`}
                            >
                                {service.badge}
                            </span>
                            <h3 className="text-5xl lg:text-6xl font-medium dark:text-white text-gray-900 tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500 whitespace-pre-line">
                                {service.title}
                            </h3>
                        </div>
                        <div className="relative z-10">
                            <p className="text-xl dark:text-gray-400 text-gray-500 font-light max-w-sm dark:group-hover:text-white group-hover:text-gray-900 transition-colors">
                                {service.description}
                            </p>
                            <div
                                className={`mt-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-${service.color}-500 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100`}
                            >
                                {service.cta}
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
