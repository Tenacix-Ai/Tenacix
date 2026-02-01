'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface LaptopMockupProps {
    screenContent?: React.ReactNode;
    screenImage?: string;
    className?: string;
    rotateY?: number;
    rotateX?: number;
}

// Web Development Dashboard Screen
function WebDashboardScreen() {
    return (
        <div className="w-full h-full bg-gradient-to-br from-neutral-900 to-neutral-950 p-2 text-[6px]">
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-2 px-1">
                <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
                </div>
                <div className="flex-1 mx-2 h-2 bg-white/5 rounded-full" />
            </div>
            {/* Content Grid */}
            <div className="grid grid-cols-3 gap-1 h-[calc(100%-16px)]">
                {/* Sidebar */}
                <div className="bg-white/5 rounded p-1 space-y-1">
                    {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="h-1.5 bg-neutral-600/30 rounded-sm" style={{ width: `${60 + Math.random() * 30}%` }} />
                    ))}
                </div>
                {/* Main Content */}
                <div className="col-span-2 space-y-1">
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-1">
                        {['neutral', 'slate', 'zinc'].map((color, i) => (
                            <div key={i} className={`bg-${color}-800/20 rounded p-1 border border-white/5`}>
                                <div className="h-1 bg-white/20 rounded-full w-1/2 mb-0.5" />
                                <div className={`h-3 bg-${color}-500/20 rounded`} />
                            </div>
                        ))}
                    </div>
                    {/* Chart Area */}
                    <div className="bg-white/5 rounded p-1 flex-1 h-12 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-500/5 to-transparent" />
                        <div className="flex items-end h-full gap-0.5 relative z-10">
                            {[40, 60, 45, 80, 55, 70, 50, 65, 75, 85, 60, 90].map((h, i) => (
                                <div
                                    key={i}
                                    className="flex-1 bg-neutral-600 rounded-t opacity-40"
                                    style={{ height: `${h}%` }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// AI Agent Chat Screen
function AIChatScreen() {
    return (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-black p-2 text-[6px]">
            {/* Chat Messages */}
            <div className="space-y-1 h-[calc(100%-12px)] overflow-hidden">
                {/* User Message */}
                <div className="flex justify-end">
                    <div className="bg-neutral-800 rounded-lg px-1.5 py-0.5 max-w-[70%] border border-white/5">
                        <div className="h-1 bg-white/40 rounded-full w-12" />
                    </div>
                </div>
                {/* AI Response */}
                <div className="flex justify-start">
                    <div className="bg-transparent rounded-lg px-1.5 py-1 max-w-[80%] space-y-0.5">
                        <div className="h-1 bg-white/20 rounded-full w-16" />
                        <div className="h-1 bg-white/20 rounded-full w-12" />
                    </div>
                </div>
                {/* AI Response with Code */}
                <div className="flex justify-start">
                    <div className="bg-transparent rounded-lg px-1.5 py-1 max-w-[85%] space-y-0.5">
                        <div className="h-1 bg-white/20 rounded-full w-14" />
                        <div className="bg-black/50 rounded p-0.5 space-y-0.5 mt-0.5 border border-white/5">
                            <div className="h-0.5 bg-zinc-400/40 rounded-full w-8" />
                            <div className="h-0.5 bg-neutral-400/40 rounded-full w-10" />
                            <div className="h-0.5 bg-neutral-400/40 rounded-full w-6" />
                        </div>
                    </div>
                </div>
                {/* Typing Indicator */}
                <div className="flex justify-start">
                    <div className="bg-transparent rounded-lg px-2 py-1">
                        <div className="flex gap-0.5">
                            <div className="w-0.5 h-0.5 rounded-full bg-white/40 animate-pulse" />
                            <div className="w-0.5 h-0.5 rounded-full bg-white/40 animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <div className="w-0.5 h-0.5 rounded-full bg-white/40 animate-pulse" style={{ animationDelay: '0.4s' }} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Input Area */}
            <div className="flex gap-1 mt-1">
                <div className="flex-1 h-2 bg-white/5 rounded-full border border-white/5" />
                <div className="w-2 h-2 bg-neutral-700 rounded-full" />
            </div>
        </div>
    );
}

// Brand Design Screen
function BrandDesignScreen() {
    return (
        <div className="w-full h-full bg-neutral-950 p-2 text-[6px]">
            {/* Tool Bar */}
            <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="w-2 h-2 bg-white/10 rounded" />
                ))}
            </div>
            {/* Canvas Area */}
            <div className="grid grid-cols-4 gap-2 h-[calc(100%-16px)]">
                {/* Design Canvas */}
                <div className="col-span-3 bg-neutral-900 rounded p-2 flex items-center justify-center border border-white/5">
                    {/* Logo Preview */}
                    <div className="relative">
                        <div className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center">
                            <div className="text-white/80 font-bold text-[8px] tracking-widest">TX</div>
                        </div>
                        {/* Guidelines */}
                        <div className="absolute -inset-2 border border-dashed border-white/10" />
                    </div>
                </div>
                {/* Color Palette - Grayscale/Muted */}
                <div className="space-y-1">
                    <div className="h-3 w-full rounded bg-neutral-200" />
                    <div className="h-3 w-full rounded bg-neutral-400" />
                    <div className="h-3 w-full rounded bg-neutral-600" />
                    <div className="h-3 w-full rounded bg-neutral-800" />
                </div>
            </div>
        </div>
    );
}

// Workflow Automation Screen
function WorkflowScreen() {
    return (
        <div className="w-full h-full bg-neutral-950 p-2 text-[6px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
                <div className="h-1.5 bg-white/20 rounded w-8" />
                <div className="flex gap-1">
                    <div className="w-4 h-1.5 bg-white/10 rounded" />
                    <div className="w-4 h-1.5 bg-white/5 rounded" />
                </div>
            </div>
            {/* Workflow Nodes */}
            <div className="flex items-center justify-center h-[calc(100%-16px)] gap-1">
                {/* Start Node */}
                <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white/40" />
                </div>
                {/* Connector */}
                <div className="w-4 h-px bg-white/10" />
                {/* Process Node */}
                <div className="w-8 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center">
                    <div className="w-4 h-1 bg-white/20 rounded" />
                </div>
                {/* Connector */}
                <div className="w-4 h-px bg-white/10" />
                {/* Branch */}
                <div className="relative w-6 h-6 flex items-center justify-center">
                    <div className="w-5 h-5 rotate-45 bg-transparent border border-white/10" />
                </div>
                {/* Connector */}
                <div className="w-4 h-px bg-white/10" />
                {/* End Node */}
                <div className="w-6 h-6 rounded bg-white/10 border border-white/20 flex items-center justify-center">
                    <div className="w-3 h-1 bg-white/40 rounded" />
                </div>
            </div>
        </div>
    );
}

export function LaptopMockup({
    screenContent,
    screenImage,
    className = '',
    rotateY = -15,
    rotateX = 10
}: LaptopMockupProps) {
    return (
        <div
            className={`relative ${className}`}
            style={{
                perspective: '800px',
                transformStyle: 'preserve-3d',
            }}
        >
            {/* 3D Container */}
            <motion.div
                style={{
                    transformStyle: 'preserve-3d',
                    transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg) rotateZ(0deg)`,
                }}
                whileHover={{
                    rotateY: rotateY * 0.8,
                    rotateX: rotateX * 0.8,
                    y: -5,
                    transition: { duration: 0.4, ease: 'easeOut' }
                }}
                className="relative w-full aspect-[16/10]"
            >
                {/* --- LID (Screen) --- */}
                <div
                    className="absolute inset-0 origin-bottom"
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: 'rotateX(0deg)', // Lid angle relative to hinge
                    }}
                >
                    {/* Screen Bezel (Front Face) */}
                    <div
                        className="absolute inset-0 rounded-t-xl bg-[#1a1a1a] p-2"
                        style={{
                            transform: 'translateZ(1px)',
                            background: 'linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 50%, #0d0d0d 100%)',
                            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)',
                        }}
                    >
                        {/* Camera */}
                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#0d0d0d] border border-white/5" />

                        {/* Actual Screen Content */}
                        <div className="w-full h-full bg-black overflow-hidden rounded relative border border-white/5">
                            {screenImage ? (
                                <Image
                                    src={screenImage}
                                    alt="Screen content"
                                    fill
                                    className="object-cover"
                                />
                            ) : screenContent ? (
                                <div className="w-full h-full">
                                    {screenContent}
                                </div>
                            ) : (
                                <div className="w-full h-full bg-neutral-900" />
                            )}
                            {/* Screen Reflection/Gloss */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                        </div>
                    </div>

                    {/* Lid Back (for 3D completeness when rotating far) */}
                    <div
                        className="absolute inset-0 rounded-t-xl bg-[#0d0d0d]"
                        style={{ transform: 'translateZ(-2px) rotateY(180deg)', backfaceVisibility: 'hidden' }}
                    />
                </div>

                {/* --- BASE (Keyboard) --- */}
                <div
                    className="absolute top-full left-0 right-0 origin-top"
                    style={{
                        height: '140%', // Depth of the base
                        transformStyle: 'preserve-3d',
                        transform: 'rotateX(82deg)', // Folded out towards user
                    }}
                >
                    {/* Top Surface of Base */}
                    <div
                        className="absolute inset-x-0 top-0 h-full rounded-b-lg overflow-hidden"
                        style={{
                            background: 'linear-gradient(180deg, #dddddd 0%, #c0c0c0 20%, #a0a0a0 100%)', // Silver/Aluminum
                            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4)'
                        }}
                    >
                        <div className="relative w-full h-full p-3 pt-6 flex flex-col items-center">

                            {/* Keyboard Area */}
                            <div
                                className="w-[90%] grid gap-1 p-1 rounded bg-[#2a2a2a] shadow-inner"
                                style={{
                                    gridTemplateRows: 'repeat(5, 1fr)',
                                    aspectRatio: '3/1.4'
                                }}
                            >
                                {/* Row 1 (Function keys) */}
                                <div className="grid grid-cols-[repeat(14,1fr)] gap-[2px]">
                                    {Array.from({ length: 14 }).map((_, i) => (
                                        <div key={`r1-${i}`} className="bg-[#111] rounded-[1px] h-full shadow-[0_1px_0_rgba(255,255,255,0.1)]" />
                                    ))}
                                </div>
                                {/* Row 2 */}
                                <div className="grid grid-cols-[1.5fr_repeat(12,1fr)_1.5fr] gap-[2px]">
                                    {Array.from({ length: 14 }).map((_, i) => (
                                        <div key={`r2-${i}`} className="bg-[#111] rounded-[2px] h-full shadow-[0_1px_0_rgba(255,255,255,0.1)]" />
                                    ))}
                                </div>
                                {/* Row 3 */}
                                <div className="grid grid-cols-[1.8fr_repeat(11,1fr)_2.2fr] gap-[2px]">
                                    {Array.from({ length: 13 }).map((_, i) => (
                                        <div key={`r3-${i}`} className="bg-[#111] rounded-[2px] h-full shadow-[0_1px_0_rgba(255,255,255,0.1)]" />
                                    ))}
                                </div>
                                {/* Row 4 */}
                                <div className="grid grid-cols-[2.2fr_repeat(10,1fr)_2.8fr] gap-[2px]">
                                    {Array.from({ length: 12 }).map((_, i) => (
                                        <div key={`r4-${i}`} className="bg-[#111] rounded-[2px] h-full shadow-[0_1px_0_rgba(255,255,255,0.1)]" />
                                    ))}
                                </div>
                                {/* Row 5 (Spacebar) */}
                                <div className="grid grid-cols-[1.25fr_1.25fr_1.25fr_6fr_1.25fr_1.25fr_1.25fr_1.25fr] gap-[2px]">
                                    {Array.from({ length: 8 }).map((_, i) => (
                                        <div key={`r5-${i}`} className="bg-[#111] rounded-[2px] h-full shadow-[0_1px_0_rgba(255,255,255,0.1)]" />
                                    ))}
                                </div>
                            </div>

                            {/* Trackpad */}
                            <div className="mt-2 w-[40%] h-[25%] rounded bg-[#b0b0b0] shadow-[0_1px_0_rgba(255,255,255,0.2),inset_0_1px_2px_rgba(0,0,0,0.1)]" />

                        </div>
                    </div>

                    {/* Side Thickness (creates the slab effect) */}
                    <div
                        className="absolute inset-x-1 top-full h-2 bg-[#999999] rounded-b-lg"
                        style={{ transformOrigin: 'top', transform: 'rotateX(-90deg)' }}
                    />
                </div>

                {/* Shadow */}
                <div
                    className="absolute -bottom-[120%] left-1/2 -translate-x-1/2 w-[120%] h-32 opacity-20 blur-2xl"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, transparent 70%)',
                        transform: 'rotateX(90deg) translateZ(-50px)',
                    }}
                />
            </motion.div>
        </div>
    );
}

// Get screen content based on service type
function getScreenContent(serviceId: string) {
    switch (serviceId) {
        case 'web-dev':
            return <WebDashboardScreen />;
        case 'ai-agents':
            return <AIChatScreen />;
        case 'branding':
            return <BrandDesignScreen />;
        case 'automation':
            return <WorkflowScreen />;
        default:
            return null;
    }
}

// Service showcase with laptop mockup
interface ServiceShowcaseData {
    id: string;
    title: string;
    subtitle: string;
    gradient: string;
    mockupRotation: { y: number; x: number };
}

const showcaseData: ServiceShowcaseData[] = [
    {
        id: 'web-dev',
        title: 'WEB',
        subtitle: 'Development',
        gradient: 'from-slate-500/10 to-zinc-500/10',
        mockupRotation: { y: -20, x: 12 },
    },
    {
        id: 'ai-agents',
        title: 'AI',
        subtitle: 'Agents',
        gradient: 'from-zinc-500/10 to-slate-500/10',
        mockupRotation: { y: 15, x: 10 },
    },
    {
        id: 'branding',
        title: 'BRAND',
        subtitle: 'Identity',
        gradient: 'from-neutral-500/10 to-stone-500/10',
        mockupRotation: { y: -18, x: 8 },
    },
    {
        id: 'automation',
        title: 'WORK',
        subtitle: 'Automation',
        gradient: 'from-zinc-500/10 to-neutral-500/10',
        mockupRotation: { y: 22, x: 14 },
    },
];

export function ServiceShowcase() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {showcaseData.map((service, index) => (
                <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative"
                >
                    {/* Card Container */}
                    <div
                        className="relative rounded-2xl border border-white/10 bg-black/60 backdrop-blur-sm p-8 pb-12
                                   hover:border-white/20 transition-all duration-500 cursor-pointer overflow-hidden" // Revisit overflow if needed, but scaling should fix it
                    >
                        {/* Background Gradient */}
                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                        />

                        {/* Cross Icon */}
                        <div className="absolute top-4 left-4 w-3 h-3 opacity-40">
                            <div className="absolute top-1/2 left-0 w-full h-px bg-white/60 -translate-y-1/2" />
                            <div className="absolute top-0 left-1/2 w-px h-full bg-white/60 -translate-x-1/2" />
                        </div>

                        {/* Title */}
                        <div className="relative z-10 mb-6">
                            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-none">
                                {service.title}
                            </h3>
                            <p className="text-lg text-white/60 font-light mt-1">
                                {service.subtitle}
                            </p>
                        </div>

                        {/* Laptop Mockup with Screen Content */}
                        <div className="relative z-10 flex justify-center mt-8 scale-75 origin-top">
                            <LaptopMockup
                                rotateY={service.mockupRotation.y}
                                rotateX={service.mockupRotation.x}
                                className="w-full max-w-[280px]"
                                screenContent={getScreenContent(service.id)}
                            />
                        </div>

                        {/* Add some bottom padding via a spacer if needed, or rely on pb-12 and scaling */}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

export default LaptopMockup;

