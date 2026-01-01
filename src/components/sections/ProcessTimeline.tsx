'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        number: 1,
        title: 'Audit & Discover',
        description: 'We map the terrain. Deep dive into technical constraints, audience psychology, and market gaps.',
        phase: 'Phase 01 / Input',
        color: 'zinc',
        position: 'left',
    },
    {
        number: 2,
        title: 'Architect & Design',
        description: 'Iterative prototyping. We develop high-fidelity models and code structures aligned with OKRs.',
        phase: 'Phase 02 / Process',
        color: 'zinc',
        position: 'right',
    },
    {
        number: 3,
        title: 'Deploy & Scale',
        description: 'Execution with surgical precision. CI/CD pipelines, seamless launch, and continuous optimization.',
        phase: 'Phase 03 / Output',
        color: 'zinc',
        position: 'left',
    },
];

export default function ProcessTimeline() {
    return (
        <section className="py-24 md:py-32 dark:bg-neutral-900 bg-white relative overflow-hidden border-b dark:border-white/10 border-gray-100 transition-colors duration-300">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block bg-gradient-to-b from-transparent via-zinc-500/20 to-transparent" />

            <div className="max-w-4xl mx-auto px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="block text-xs font-mono mb-3 dark:text-zinc-400 text-zinc-500 uppercase tracking-widest">
                        Our Process
                    </span>
                    <h2 className="text-3xl md:text-4xl font-semibold dark:text-white text-black tracking-tight">
                        Systematic Execution
                    </h2>
                </motion.div>

                {/* Steps */}
                {steps.map((step, idx) => (
                    <motion.div
                        key={step.number}
                        initial={{ opacity: 0, x: step.position === 'left' ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className={`relative grid grid-cols-1 md:grid-cols-2 gap-12 ${idx < steps.length - 1 ? 'mb-20' : ''}`}
                    >
                        {step.position === 'left' ? (
                            <>
                                <div className="md:text-right md:pr-16">
                                    <h3 className="text-xl font-medium dark:text-white text-black mb-2 tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm dark:text-zinc-400 text-zinc-600">{step.description}</p>
                                </div>
                                {/* Circle */}
                                <div
                                    className={`hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 w-10 h-10 rounded-full border dark:border-white/20 border-black/10 dark:bg-neutral-900 bg-white items-center justify-center z-10 shadow-lg`}
                                >
                                    <span className={`text-sm font-semibold dark:text-white text-black`}>{step.number}</span>
                                </div>
                                <div className="md:pl-16 md:col-start-2">
                                    <span className={`text-xs font-mono dark:text-zinc-500 text-zinc-400 uppercase tracking-widest`}>
                                        {step.phase}
                                    </span>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="hidden md:block md:text-right md:pr-16">
                                    <span className={`text-xs font-mono dark:text-zinc-500 text-zinc-400 uppercase tracking-widest`}>
                                        {step.phase}
                                    </span>
                                </div>
                                {/* Circle */}
                                <div
                                    className={`hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 w-10 h-10 rounded-full border dark:border-white/20 border-black/10 dark:bg-neutral-900 bg-white items-center justify-center z-10 shadow-lg`}
                                >
                                    <span className={`text-sm font-semibold dark:text-white text-black`}>{step.number}</span>
                                </div>
                                <div className="md:pl-16">
                                    <h3 className="text-xl font-medium dark:text-white text-black mb-2 tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm dark:text-zinc-400 text-zinc-600">{step.description}</p>
                                </div>
                            </>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
