'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const steps = [
    {
        id: 'discover',
        label: '1. Audit & Discover',
        title: 'Think it.',
        description: 'Deep dive into technical constraints, audience psychology, and market gaps.',
    },
    {
        id: 'design',
        label: '2. Architect & Design',
        title: 'Build it.',
        description: 'Iterative prototyping and high-fidelity models aligned with OKRs.',
    },
    {
        id: 'deploy',
        label: '3. Deploy & Scale',
        title: 'Extend it.',
        description: 'CI/CD pipelines, seamless launch, and continuous optimization.',
    },
];

export default function ProcessTimeline() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-zinc-900 dark:text-white tracking-tight mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 to-zinc-900 dark:from-zinc-300 dark:to-white">Think it.</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 to-zinc-900 dark:from-zinc-300 dark:to-white">Build it.</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 to-zinc-900 dark:from-zinc-300 dark:to-white">Extend it.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Simple enough to ship in hours, sophisticated enough to scale. We help you automate business processes without limits on your logic.
                    </p>
                </motion.div>

                {/* Tab Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {steps.map((step, idx) => (
                        <button
                            key={step.id}
                            onClick={() => setActiveStep(idx)}
                            className={`
                                px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                                ${activeStep === idx
                                    ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-lg'
                                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                                }
                            `}
                        >
                            {step.label}
                        </button>
                    ))}
                </motion.div>

                {/* Screenshot/Image Container */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="relative"
                >
                    {/* Browser Frame */}
                    <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl bg-zinc-100 dark:bg-zinc-900">
                        {/* Browser Header */}
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                            <div className="flex-1 flex justify-center">
                                <div className="px-4 py-1 rounded-md bg-zinc-200 dark:bg-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                                    app.tenacix.com
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative aspect-[16/10] bg-zinc-900">
                            <Image
                                src="/images/ai-workflow.png"
                                alt="AI Workflow Dashboard"
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* Gradient Overlays for Premium Effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent pointer-events-none" />
                            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-900/60 to-transparent pointer-events-none" />
                        </div>
                    </div>

                    {/* Decorative Glow */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-zinc-500/10 via-slate-500/10 to-zinc-500/10 blur-3xl -z-10 opacity-50" />
                </motion.div>
            </div>
        </section>
    );
}
