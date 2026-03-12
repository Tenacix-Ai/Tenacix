'use client';

import { motion } from 'framer-motion';

import { SplineScene } from '@/components/ui/splite';

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
        <section id="about" className="py-32 relative overflow-visible">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">
                    {/* Left side - Content */}
                    <div className="flex-1 min-w-0">
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
                            <h2 className="text-7xl md:text-20xl font-bold text-zinc-900 dark:text-white tracking-tight mb-4">
                                About Us.
                            </h2>
                            <motion.p
                                className="text-3xl md:text-10xl font-light text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                We are the architects of the{' '}
                                <motion.span
                                    className="text-black dark:text-white inline-block"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    new digital frontier
                                </motion.span>
                                , blending cognitive intelligence with{' '}
                                <motion.span
                                    className="text-black dark:text-white inline-block"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    immersive design
                                </motion.span>
                                .
                            </motion.p>
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
                                    <div className="py-10 border-t border-zinc-200 dark:border-zinc-800">
                                        <h3 className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white tracking-tight group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-300 mb-3">
                                            {feature.title}
                                        </h3>
                                        <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                            {/* Bottom Border */}
                            <div className="border-t border-zinc-200 dark:border-zinc-800" />
                        </div>
                    </div>

                    {/* Right side - Spline Robot */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-[600px] xl:w-[650px] h-[550px] lg:h-[800px] relative lg:sticky lg:top-32 flex-shrink-0 overflow-visible -mx-8 lg:-mx-12"
                    >
                        <div className="w-full h-full" style={{ transform: 'scale(0.9)', transformOrigin: 'center center' }}>
                            <SplineScene
                                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                className="w-full h-full"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
