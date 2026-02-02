'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2, Search, Braces, Globe } from 'lucide-react';

const steps = [
    {
        id: 'discover',
        title: 'Think it.',
        subtitle: 'Audit & Discover',
        description: 'We simply do not start without deep understanding. We disassemble your current workflows, identify bottlenecks, and map out the cognitive architecture of your future system.',
        icon: Search,
        pattern: (
            <div className="relative w-full h-full bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.1),transparent_50%)]" />
                <div className="p-8 font-mono text-sm text-sky-400/80">
                    <div className="mb-2 text-zinc-500">// Analysis Protocol</div>
                    <div className="pl-4 border-l border-zinc-800">
                        <div>Analyzing_Data_Structures... <span className="text-green-500">Done</span></div>
                        <div>Mapping_User_Flows... <span className="text-green-500">Done</span></div>
                        <div>Identifying_Constraints... <span className="text-yellow-500">Pending</span></div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'design',
        title: 'Build it.',
        subtitle: 'Architect & Design',
        description: 'Iterative prototyping meets rigorous engineering. We build high-fidelity models and scalable backend logic simultaneously, ensuring form always follows function.',
        icon: Braces,
        pattern: (
            <div className="relative w-full h-full bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800 perspective-1000">
                {/* 3D Isometric Scene */}
                <div className="absolute inset-0 flex items-center justify-center transform-style-3d rotate-x-60 rotate-z-45 scale-125">
                    {/* Base Grid Layer */}
                    <div className="relative w-80 h-80 bg-zinc-900/30 border border-zinc-700/30 grid grid-cols-8 grid-rows-8 shadow-2xl backdrop-blur-sm transform-style-3d">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:10px_10px]" />

                        {/* Animated Data Paths */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible opacity-60">
                            <motion.path
                                d="M 20 20 L 20 60 L 60 60"
                                fill="none"
                                stroke="url(#gradient-path)"
                                strokeWidth="2"
                                strokeDasharray="4 4"
                                animate={{ strokeDashoffset: [0, -20] }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            <defs>
                                <linearGradient id="gradient-path" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Layer 1: Database Cluster */}
                        <motion.div
                            className="absolute bottom-10 right-10 w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-lg shadow-lg backdrop-blur-md flex items-center justify-center transform-style-3d"
                            animate={{ translateZ: [10, 20, 10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="text-[8px] font-mono text-emerald-400 text-center">
                                DB_SHARD_01
                                <div className="h-1 w-full bg-emerald-500/20 mt-1 overflow-hidden rounded-full">
                                    <motion.div
                                        className="h-full bg-emerald-500"
                                        animate={{ width: ["10%", "80%", "30%"] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Layer 2: API Gateway */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/10 border border-blue-500/30 rounded-xl shadow-xl backdrop-blur-md flex flex-col items-center justify-center p-4 transform-style-3d"
                            animate={{ translateZ: [30, 50, 30] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                            <div className="w-8 h-8 rounded-full border border-blue-400/50 flex items-center justify-center mb-2">
                                <Braces className="w-4 h-4 text-blue-400" />
                            </div>
                            <div className="text-[10px] font-mono text-blue-300">API_GATEWAY</div>
                            <div className="flex gap-1 mt-2">
                                <span className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
                                <span className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-75" />
                                <span className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-150" />
                            </div>
                        </motion.div>

                        {/* Layer 3: Auth Service */}
                        <motion.div
                            className="absolute top-10 left-10 w-24 h-16 bg-purple-500/10 border border-purple-500/30 rounded-lg shadow-lg backdrop-blur-md flex items-center justify-center transform-style-3d"
                            animate={{ translateZ: [40, 60, 40] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <div className="text-[9px] font-mono text-purple-300 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full border border-purple-400" />
                                AUTH_V2
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Overlay UI - Technical Status */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            SYSTEM_OPTIMAL
                        </div>
                        <div className="text-[10px] font-mono text-zinc-600">UPTIME: 99.99%</div>
                    </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 border-t border-zinc-800 pt-3">
                        <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                                animate={{ width: ["0%", "100%"] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                            />
                        </div>
                        <span className="text-[10px] font-mono text-zinc-500">COMPILING...</span>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'deploy',
        title: 'Extend it.',
        subtitle: 'Deploy & Scale',
        description: 'Launch is just the beginning. We set up CI/CD pipelines and autonomous monitoring agents that keep your digital ecosystem healthy and evolving.',
        icon: Globe,
        pattern: (
            <div className="relative w-full h-full bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.1),transparent_70%)]" />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-zinc-900 to-transparent" />
                <div className="grid grid-cols-6 gap-2 p-4 opacity-50">
                    {Array.from({ length: 24 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-8 rounded bg-zinc-800 animate-pulse"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        />
                    ))}
                </div>
            </div>
        )
    },
];

export default function ProcessTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [activeStep, setActiveStep] = useState(0);

    // Update active step based on scroll
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            // Divide scroll progress into 3 sections
            if (latest < 0.3) setActiveStep(0);
            else if (latest < 0.6) setActiveStep(1);
            else setActiveStep(2);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <section ref={containerRef} className="relative bg-zinc-50 dark:bg-black">
            <div className="py-20 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-500 mb-6">
                        The Process
                    </h2>
                    <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
                        A rigorous methodology refined for speed and precision.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 relative">
                    {/* Left Column - Scrollable Content */}
                    <div className="space-y-[40vh] py-[10vh]">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-20% 0px -20% 0px" }}
                                transition={{ duration: 0.5 }}
                                className={`transition-opacity duration-500 ${activeStep === idx ? 'opacity-100' : 'opacity-30'}`}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`p-3 rounded-2xl border ${activeStep === idx ? 'bg-zinc-900 border-zinc-900 text-white dark:bg-white dark:border-white dark:text-black' : 'bg-transparent border-zinc-300 dark:border-zinc-700 text-zinc-500'}`}>
                                        <step.icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                                        Step 0{idx + 1}
                                    </span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">
                                    {step.title}
                                </h3>
                                <h4 className="text-xl md:text-2xl font-medium text-zinc-500 dark:text-zinc-400 mb-6">
                                    {step.subtitle}
                                </h4>
                                <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-md">
                                    {step.description}
                                </p>
                                <ul className="mt-8 space-y-3">
                                    <li className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                                        <CheckCircle2 className="w-5 h-5 text-zinc-900 dark:text-white" />
                                        <span>Full system audit</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                                        <CheckCircle2 className="w-5 h-5 text-zinc-900 dark:text-white" />
                                        <span>Technical roadmap</span>
                                    </li>
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column - Sticky Visual */}
                    <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full">
                        <div className="sticky top-[20vh] h-[60vh] w-full rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden shadow-2xl">
                            {steps.map((step, idx) => (
                                <motion.div
                                    key={step.id}
                                    className="absolute inset-0 p-8"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{
                                        opacity: activeStep === idx ? 1 : 0,
                                        scale: activeStep === idx ? 1 : 0.95,
                                        zIndex: activeStep === idx ? 10 : 0
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {step.pattern}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
