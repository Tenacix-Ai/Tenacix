'use client';

import { motion } from 'framer-motion';
import { BrainCircuit, ScanEye, Network } from 'lucide-react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

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
        <section id="about" className="relative w-full overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-8"
                        >
                            <span className="block text-xs font-mono mb-3 dark:text-zinc-400 text-zinc-500 uppercase tracking-widest">
                                Where we come into play
                            </span>
                            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black dark:text-white text-black leading-[0.9] tracking-tighter uppercase mb-6">
                                About Us.
                            </h2>
                            <p className="text-xl md:text-2xl text-zinc-600 dark:text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                                We are the architects of the new digital frontier, blending cognitive intelligence with immersive design.
                            </p>
                        </motion.div>
                    </>
                }
            >
                {/* Bento Grid Layout - Adjusted for Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-full w-full p-4 overflow-y-auto mix-blend-normal">
                    {/* Feature 1: Cognitive Architecture - Large Horizontal */}
                    <div className="group relative md:col-span-2 md:row-span-1 p-6 md:p-8 rounded-[1.5rem] border dark:border-white/10 border-black/5 bg-white dark:bg-black/40 overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col justify-center">
                        <div className="absolute top-6 right-6 text-6xl font-black text-black/5 dark:text-white/5 pointer-events-none group-hover:scale-110 transition-transform duration-700">01</div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-2 dark:text-white text-black tracking-tight">{features[0].title}</h3>
                            <p className="text-base dark:text-zinc-400 text-zinc-600 max-w-xl leading-relaxed">{features[0].description}</p>
                        </div>
                    </div>

                    {/* Feature 2: Visual Intelligence - Vertical */}
                    <div className="group relative md:col-span-1 md:row-span-2 p-6 md:p-8 rounded-[1.5rem] border dark:border-white/10 border-black/5 bg-white dark:bg-black/40 overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col justify-end">
                        <div className="absolute top-6 left-6 text-8xl font-black text-black/5 dark:text-white/5 pointer-events-none group-hover:rotate-12 transition-transform duration-700">02</div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-2 dark:text-white text-black tracking-tight">{features[1].title}</h3>
                            <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">{features[1].description}</p>
                        </div>
                    </div>

                    {/* Feature 3: Neural Operations - Remaining Horizontal */}
                    <div className="group relative md:col-span-2 md:row-span-1 p-6 md:p-8 rounded-[1.5rem] border dark:border-white/10 border-black/5 bg-white dark:bg-black/40 overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col justify-center">
                        <div className="absolute top-6 right-6 text-6xl font-black text-black/5 dark:text-white/5 pointer-events-none group-hover:scale-110 transition-transform duration-700">03</div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-2 dark:text-white text-black tracking-tight">{features[2].title}</h3>
                            <p className="text-base dark:text-zinc-400 text-zinc-600 max-w-xl leading-relaxed">{features[2].description}</p>
                        </div>
                    </div>
                </div>
            </ContainerScroll>
        </section>
    );
}
