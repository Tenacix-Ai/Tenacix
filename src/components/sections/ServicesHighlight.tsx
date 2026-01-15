'use client';

import { motion } from 'framer-motion';
import ServiceCards from '@/components/ui/service-cards';

export default function ServicesHighlight() {
    return (
        <section
            id="services-highlight"
            className="py-32 text-neutral-900 dark:text-white relative overflow-hidden transition-colors duration-500"
        >
            {/* Ambient Background Animation */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-bl from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"
                    animate={{
                        x: [0, -40, 0],
                        y: [0, -20, 0],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2,
                    }}
                />
            </div>

            <div className="max-w-[90%] mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 px-4"
                >
                    <motion.h2
                        className="text-sm font-mono uppercase tracking-[0.2em] text-neutral-500 mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.p
                        className="text-3xl md:text-4xl font-light text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Precision engineering for the{' '}
                        <motion.span
                            className="text-black dark:text-white inline-block"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            autonomous age
                        </motion.span>
                        .
                    </motion.p>
                </motion.div>

                {/* New Expandable Service Cards */}
                <div className="px-4">
                    <ServiceCards />
                </div>
            </div>
        </section>
    );
}
