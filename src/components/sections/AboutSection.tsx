'use client';

import { motion } from 'framer-motion';

const features = [
    {
        title: 'Cognitive Architecture',
        description: 'We architect digital ecosystems that think. Scalable, self-correcting design systems built for the next decade of web evolution.',
    },
    {
        title: 'Visual Intelligence',
        description: 'Design that speaks before you do. We craft distinct aesthetic identities that command authority and dissolve competition.',
    },
    {
        title: 'Neural Operations',
        description: 'Silence the noise. Autonomous AI agents that handle complex workflows, support, and sales while you sleep.',
    },
];

export default function AboutSection() {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-6">
                        <span className="w-1 h-1 rounded-full bg-zinc-400 animate-pulse" />
                        What We Do
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight mb-6">
                        About Us
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
                        We are the architects of the new digital frontier, blending cognitive intelligence with immersive design.
                    </p>
                </motion.div>

                {/* Feature List - Clean Minimal Design */}
                <div className="space-y-0">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group"
                        >
                            <div className="py-10 border-t border-zinc-200 dark:border-zinc-800 grid md:grid-cols-12 gap-8 items-start cursor-default">
                                {/* Title */}
                                <div className="md:col-span-4">
                                    <h3 className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white tracking-tight group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <div className="md:col-span-8">
                                    <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    {/* Bottom Border */}
                    <div className="border-t border-zinc-200 dark:border-zinc-800" />
                </div>
            </div>
        </section>
    );
}
