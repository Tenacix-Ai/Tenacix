'use client';

import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2, Search, Braces, Globe } from 'lucide-react';
import { Card } from '@/components/ui/container-scroll-animation';

const steps = [
    {
        id: 'discover',
        title: 'Think it.',
        subtitle: 'Audit & Discover',
        description: 'We simply do not start without deep understanding. We disassemble your current workflows, identify bottlenecks, and map out the cognitive architecture of your future system.',
        icon: Search,
        pattern: (
            <div className="relative w-full h-full bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
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
        ),
        checks: ['Full system audit', 'Technical roadmap']
    },
    {
        id: 'design',
        title: 'Build it.',
        subtitle: 'Architect & Design',
        description: 'Iterative prototyping meets rigorous engineering. We build high-fidelity models and scalable backend logic simultaneously, ensuring form always follows function.',
        icon: Braces,
        pattern: (
            <div className="relative w-full h-full bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 flex items-center justify-center">
                {/* Abstract Tech Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#09090b_100%)]" />

                {/* Main Architecture Diagram Container */}
                <div className="relative w-[90%] h-[80%] flex items-center justify-center">

                    {/* Central Connection Nodes */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-zinc-700 to-transparent opacity-50" />
                        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-50" />
                    </div>

                    {/* Node 1: Client / Interface */}
                    <motion.div
                        className="absolute top-8 left-8 p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-md shadow-lg"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-2 h-2 rounded-full bg-zinc-500" />
                            <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono">Client_Layer</span>
                        </div>
                        <div className="h-2 w-24 bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-zinc-500"
                                animate={{ width: ["0%", "100%", "0%"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                    </motion.div>

                    {/* Node 2: Logic Core */}
                    <motion.div
                        className="relative z-10 w-48 p-5 rounded-2xl border border-violet-500/20 bg-zinc-900/80 backdrop-blur-xl shadow-2xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute -top-3 -right-3 w-6 h-6 border-t border-r border-violet-500/50 rounded-tr-lg" />
                        <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b border-l border-violet-500/50 rounded-bl-lg" />

                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <Braces className="w-4 h-4 text-violet-400" />
                                <span className="text-xs font-semibold text-zinc-300">Logic Core</span>
                            </div>
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                        </div>
                        <div className="space-y-2">
                            <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                                <div className="h-full w-2/3 bg-violet-500/50 rounded-full" />
                            </div>
                            <div className="h-1.5 w-3/4 bg-zinc-800 rounded-full overflow-hidden">
                                <div className="h-full w-1/2 bg-violet-500/30 rounded-full" />
                            </div>
                            <div className="h-1.5 w-5/6 bg-zinc-800 rounded-full overflow-hidden">
                                <div className="h-full w-3/4 bg-violet-500/40 rounded-full" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Node 3: Database */}
                    <motion.div
                        className="absolute bottom-8 right-8 p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-md shadow-lg"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-[10px] uppercase tracking-wider text-emerald-500 font-mono">Data_Store</span>
                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        </div>
                        <div className="flex gap-1">
                            <div className="w-1 h-3 bg-zinc-800 rounded-sm animate-pulse" />
                            <div className="w-1 h-3 bg-zinc-800 rounded-sm animate-pulse delay-75" />
                            <div className="w-1 h-3 bg-zinc-800 rounded-sm animate-pulse delay-150" />
                            <div className="w-1 h-3 bg-zinc-800 rounded-sm" />
                        </div>
                    </motion.div>

                    {/* Connecting Lines (Decorators) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                        <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="80%" y1="80%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                    </svg>
                </div>
            </div>
        ),
        checks: ['High-fidelity prototypes', 'Scalable architecture']
    },
    {
        id: 'deploy',
        title: 'Extend it.',
        subtitle: 'Deploy & Scale',
        description: 'Launch is just the beginning. We set up CI/CD pipelines and autonomous monitoring agents that keep your digital ecosystem healthy and evolving.',
        icon: Globe,
        pattern: (
            <div className="relative w-full h-full bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 flex items-center justify-center">
                {/* Map Background */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
                </div>

                {/* Connection Arcs */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                    <defs>
                        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <motion.path
                        d="M 120 250 Q 250 100 380 250"
                        fill="none"
                        stroke="url(#line-gradient)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <motion.circle r="2" fill="#60a5fa">
                        <motion.animateMotion
                            path="M 120 250 Q 250 100 380 250"
                            dur="3s"
                            repeatCount="indefinite"
                            rotate="auto"
                        />
                    </motion.circle>
                </svg>

                {/* Nodes */}
                <div className="absolute inset-0">
                    {/* US Node */}
                    <div className="absolute top-[40%] left-[20%]">
                        <div className="relative">
                            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                            <div className="absolute inset-0 w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-75" />
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] font-mono text-zinc-500 whitespace-nowrap">US-EAST</div>
                        </div>
                    </div>

                    {/* EU Node */}
                    <div className="absolute top-[30%] left-[50%]">
                        <div className="relative">
                            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-75" />
                            <div className="absolute inset-0 w-3 h-3 bg-purple-500 rounded-full animate-ping opacity-75 delay-75" />
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] font-mono text-zinc-500 whitespace-nowrap">EU-WEST</div>
                        </div>
                    </div>

                    {/* ASIA Node */}
                    <div className="absolute top-[45%] left-[80%]">
                        <div className="relative">
                            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse delay-150" />
                            <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping opacity-75 delay-150" />
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] font-mono text-zinc-500 whitespace-nowrap">AP-SOUTH</div>
                        </div>
                    </div>
                </div>

                {/* Stats Panel */}
                <div className="absolute bottom-6 left-6 right-6 bg-zinc-900/80 backdrop-blur-md rounded-xl border border-zinc-800 p-4">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-mono text-zinc-400">Global Status</span>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span className="text-[10px] text-emerald-500 font-mono">LIVE</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2 rounded bg-zinc-800/50">
                            <div className="text-[10px] text-zinc-500">Requests/s</div>
                            <div className="text-sm font-mono text-white">24.5k</div>
                        </div>
                        <div className="p-2 rounded bg-zinc-800/50">
                            <div className="text-[10px] text-zinc-500">Latency</div>
                            <div className="text-sm font-mono text-emerald-400">12ms</div>
                        </div>
                        <div className="p-2 rounded bg-zinc-800/50">
                            <div className="text-[10px] text-zinc-500">Uptime</div>
                            <div className="text-sm font-mono text-blue-400">99.99%</div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        checks: ['CI/CD automation', '24/7 intelligent monitoring']
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

    // Motion values for Card (Static for now to serve as a container)
    const rotate = useMotionValue(0);
    const scale = useMotionValue(1);
    const translate = useMotionValue(0);

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
                                    {step.checks.map((check, i) => (
                                        <li key={i} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                                            <CheckCircle2 className="w-5 h-5 text-zinc-900 dark:text-white" />
                                            <span>{check}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column - Sticky Visual */}
                    <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full">
                        <div className="sticky top-[10vh] h-[80vh] w-full flex items-center justify-center">
                            {steps.map((step, idx) => (
                                <motion.div
                                    key={step.id}
                                    className="absolute w-full"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{
                                        opacity: activeStep === idx ? 1 : 0,
                                        scale: activeStep === idx ? 1 : 0.95,
                                        zIndex: activeStep === idx ? 10 : 0
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Card rotate={rotate} translate={translate} scale={scale}>
                                        {step.pattern}
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
