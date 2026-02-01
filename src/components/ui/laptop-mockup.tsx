'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

interface LaptopMockupProps {
    screenContent?: React.ReactNode;
    screenImage?: string;
    className?: string;
    rotateY?: number;
    rotateX?: number;
    popupElements?: React.ReactNode;
}

// Web Development Dashboard Screen
function WebDashboardScreen() {
    return (
        <div className="w-full h-full bg-neutral-900 p-2 text-[6px] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />

            {/* Top Bar */}
            <div className="flex items-center justify-between mb-2 px-1 relative z-10">
                <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 mx-2 h-2 bg-white/10 rounded-full" />
            </div>
            {/* Content Grid */}
            <div className="grid grid-cols-3 gap-1 h-[calc(100%-16px)] relative z-10">
                {/* Sidebar */}
                <div className="bg-white/5 rounded p-1 space-y-1">
                    {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className={`h-1.5 rounded-sm w-3/4 ${i === 1 ? 'bg-blue-500' : 'bg-white/10'}`} />
                    ))}
                </div>
                {/* Main Content */}
                <div className="col-span-2 space-y-1">
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-1">
                        {['blue', 'violet', 'emerald'].map((color, i) => (
                            <div key={i} className={`bg-${color}-500/20 rounded p-1 border border-${color}-500/20`}>
                                <div className={`h-1 bg-${color}-500/60 rounded-full w-1/2 mb-0.5`} />
                                <div className={`h-3 bg-${color}-500/20 rounded`} />
                            </div>
                        ))}
                    </div>
                    {/* Chart Area */}
                    <div className="bg-white/5 rounded p-1 flex-1 h-12 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent" />
                        <div className="flex items-end h-full gap-0.5 relative z-10">
                            {[40, 60, 45, 80, 55, 70, 50, 65, 75, 85, 60, 90].map((h, i) => (
                                <div
                                    key={i}
                                    className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t opacity-80"
                                    style={{ height: `${h}%` }}
                                    title={`Bar ${i}`}
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
        <div className="w-full h-full bg-neutral-950 p-2 text-[6px] relative">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-black" />

            {/* Chat Messages */}
            <div className="space-y-1 h-[calc(100%-12px)] overflow-hidden relative z-10">
                {/* User Message */}
                <div className="flex justify-end">
                    <div className="bg-blue-600 rounded-lg px-2 py-1 max-w-[70%] text-white">
                        <div className="h-1 bg-white/80 rounded-full w-10" />
                    </div>
                </div>
                {/* AI Response */}
                <div className="flex justify-start">
                    <div className="bg-zinc-800 rounded-lg px-2 py-1 max-w-[80%] space-y-0.5 border border-white/5">
                        <div className="h-1 bg-emerald-400/60 rounded-full w-16" />
                        <div className="h-1 bg-zinc-400/60 rounded-full w-12" />
                    </div>
                </div>
                {/* AI Response with Code */}
                <div className="flex justify-start">
                    <div className="bg-zinc-800 rounded-lg px-1.5 py-1 max-w-[85%] space-y-0.5 border border-white/5">
                        <div className="h-1 bg-emerald-400/60 rounded-full w-14" />
                        <div className="bg-black/50 rounded p-1 space-y-0.5 mt-0.5 border border-white/5 font-mono">
                            <div className="flex gap-0.5">
                                <span className="h-0.5 w-2 bg-pink-500 rounded-full" />
                                <span className="h-0.5 w-6 bg-blue-400 rounded-full" />
                            </div>
                            <div className="h-0.5 bg-zinc-500 rounded-full w-8" />
                        </div>
                    </div>
                </div>
                {/* Typing Indicator */}
                <div className="flex justify-start">
                    <div className="bg-zinc-800 rounded-lg px-2 py-1">
                        <div className="flex gap-0.5">
                            <div className="w-0.5 h-0.5 rounded-full bg-emerald-400 animate-pulse" />
                            <div className="w-0.5 h-0.5 rounded-full bg-emerald-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <div className="w-0.5 h-0.5 rounded-full bg-emerald-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Input Area */}
            <div className="flex gap-1 mt-1 relative z-10">
                <div className="flex-1 h-3 bg-white/10 rounded-full border border-white/5 flex items-center px-1">
                    <div className="w-0.5 h-2 bg-emerald-500/50" />
                </div>
                <div className="w-3 h-3 bg-emerald-600 rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 border-t border-r border-white rotate-45 transform -translate-x-[0.5px]" />
                </div>
            </div>
        </div>
    );
}

// Brand Design Screen
function BrandDesignScreen() {
    return (
        <div className="w-full h-full bg-neutral-900 p-2 text-[6px] relative">
            <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-pink-500/10 to-transparent" />

            {/* Tool Bar */}
            <div className="flex gap-1 mb-2 relative z-10">
                {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className={`w-2 h-2 rounded ${i === 1 ? 'bg-pink-500' : 'bg-white/10'}`} />
                ))}
            </div>
            {/* Canvas Area */}
            <div className="grid grid-cols-4 gap-2 h-[calc(100%-16px)] relative z-10">
                {/* Design Canvas */}
                <div className="col-span-3 bg-neutral-800 rounded p-2 flex items-center justify-center border border-white/5 shadow-2xl">
                    {/* Logo Preview */}
                    <div className="relative transform hover:scale-110 transition-transform">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-lg shadow-pink-500/20">
                            <div className="text-white font-bold text-[8px] tracking-widest">TX</div>
                        </div>
                        {/* Guidelines */}
                        <div className="absolute -inset-2 border border-dashed border-pink-500/30" />
                        <div className="absolute -right-3 top-0 text-[4px] text-pink-400">1024px</div>
                    </div>
                </div>
                {/* Color Palette - Vibrant */}
                <div className="space-y-1">
                    <div className="h-3 w-full rounded bg-pink-500 shadow-sm" />
                    <div className="h-3 w-full rounded bg-purple-500 shadow-sm" />
                    <div className="h-3 w-full rounded bg-orange-500 shadow-sm" />
                    <div className="h-3 w-full rounded bg-zinc-800 border border-white/10" />
                </div>
            </div>
        </div>
    );
}

// Workflow Automation Screen
function WorkflowScreen() {
    return (
        <div className="w-full h-full bg-neutral-900 p-2 text-[6px] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent)]" />

            {/* Header */}
            <div className="flex items-center justify-between mb-2 relative z-10">
                <div className="h-1.5 bg-blue-500/50 rounded w-8" />
                <div className="flex gap-1">
                    <div className="w-4 h-1.5 bg-blue-500 rounded" />
                    <div className="w-4 h-1.5 bg-white/10 rounded" />
                </div>
            </div>
            {/* Workflow Nodes */}
            <div className="flex items-center justify-center h-[calc(100%-16px)] gap-1 relative z-10">
                {/* Start Node */}
                <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                </div>
                {/* Connector */}
                <div className="w-4 h-px bg-gradient-to-r from-blue-500/50 to-white/10" />
                {/* Process Node */}
                <div className="w-8 h-6 rounded bg-zinc-800 border border-white/10 flex items-center justify-center">
                    <div className="w-4 h-1 bg-white/20 rounded" />
                </div>
                {/* Connector */}
                <div className="w-4 h-px bg-white/10" />
                {/* Branch */}
                <div className="relative w-6 h-6 flex items-center justify-center">
                    <div className="w-5 h-5 rotate-45 bg-orange-500/10 border border-orange-500/50" />
                </div>
                {/* Connector */}
                <div className="w-4 h-px bg-white/10" />
                {/* End Node */}
                <div className="w-6 h-6 rounded bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center">
                    <div className="w-3 h-1 bg-emerald-400/80 rounded" />
                </div>
            </div>
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
    description: string;
    gradient: string;
    mockupRotation: { y: number; x: number };
}

const showcaseData: ServiceShowcaseData[] = [
    {
        id: 'web-dev',
        title: 'Web',
        subtitle: 'Development',
        description: 'Modern, responsive, and performant web applications.',
        gradient: 'from-zinc-800/50 to-neutral-900/50',
        mockupRotation: { y: -20, x: 12 },
    },
    {
        id: 'ai-agents',
        title: 'AI',
        subtitle: 'Agents',
        description: 'Autonomous agents that work 24/7.',
        gradient: 'from-zinc-800/50 to-neutral-900/50',
        mockupRotation: { y: 15, x: 10 },
    },
    {
        id: 'branding',
        title: 'Brand',
        subtitle: 'Identity',
        description: 'Distinctive visual identities that leave a mark.',
        gradient: 'from-zinc-800/50 to-neutral-900/50',
        mockupRotation: { y: -18, x: 8 },
    },
    {
        id: 'automation',
        title: 'Work',
        subtitle: 'Automation',
        description: 'Streamline workflows and save valuable time.',
        gradient: 'from-zinc-800/50 to-neutral-900/50',
        mockupRotation: { y: 22, x: 14 },
    },
];

// Popup elements generator
function getPopupElements(serviceId: string) {
    const floatAnim: Variants = {
        initial: { z: 0, opacity: 0, scale: 0.5 },
        hover: { z: 40, opacity: 1, scale: 1, transition: { duration: 0.5, type: 'spring' } }
    };

    switch (serviceId) {
        case 'web-dev':
            return (
                <>
                    <motion.div variants={floatAnim} custom={1} className="absolute -right-4 top-0 bg-blue-500 rounded-lg p-2 shadow-xl border border-white/10" style={{ transform: 'translateZ(40px) rotateY(-10deg) rotateX(5deg)' }}>
                        <div className="text-[10px] font-mono text-white font-bold">&lt;/&gt;</div>
                    </motion.div>
                    <motion.div variants={floatAnim} custom={2} className="absolute -left-6 bottom-8 bg-black/80 backdrop-blur rounded-lg p-2 shadow-xl border border-white/10" style={{ transform: 'translateZ(60px) rotateY(15deg)' }}>
                        <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        </div>
                    </motion.div>
                </>
            );
        case 'ai-agents':
            return (
                <>
                    <motion.div variants={floatAnim} className="absolute -right-5 top-4 bg-emerald-500 rounded-xl p-2 shadow-lg border border-white/10" style={{ transform: 'translateZ(50px)' }}>
                        <div className="w-4 h-4 text-black font-bold flex items-center justify-center text-[10px]">AI</div>
                    </motion.div>
                    <motion.div variants={floatAnim} className="absolute -left-2 top-[-20px] bg-zinc-800 rounded-lg py-1 px-2 border border-white/10" style={{ transform: 'translateZ(30px)' }}>
                        <div className="flex gap-1">
                            <div className="w-1 h-1 bg-white rounded-full animate-bounce" />
                            <div className="w-1 h-1 bg-white rounded-full animate-bounce delay-100" />
                            <div className="w-1 h-1 bg-white rounded-full animate-bounce delay-200" />
                        </div>
                    </motion.div>
                </>
            );
        case 'branding':
            return (
                <>
                    <motion.div variants={floatAnim} className="absolute -right-4 bottom-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg w-8 h-10 shadow-xl border border-white/10 -rotate-6" style={{ transform: 'translateZ(40px)' }} />
                    <motion.div variants={floatAnim} className="absolute -right-8 bottom-6 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg w-8 h-10 shadow-xl border border-white/10 rotate-12" style={{ transform: 'translateZ(20px)' }} />
                    <motion.div variants={floatAnim} className="absolute -left-4 top-0 bg-black/90 text-white rounded px-2 py-0.5 text-[8px] font-bold border border-white/20" style={{ transform: 'translateZ(60px)' }}>
                        #FF0055
                    </motion.div>
                </>
            );
        case 'automation':
            return (
                <>
                    <motion.div variants={floatAnim} className="absolute right-0 -top-6 bg-orange-500 rounded-full p-1.5 shadow-lg border border-white/10" style={{ transform: 'translateZ(40px)' }}>
                        <div className="w-3 h-3 border-2 border-white rounded-full border-t-transparent animate-spin" />
                    </motion.div>
                    <motion.div variants={floatAnim} className="absolute -left-4 bottom-4 bg-zinc-800 rounded p-1.5 shadow-xl border border-white/10" style={{ transform: 'translateZ(50px) rotateY(10deg)' }}>
                        <div className="h-1 w-6 bg-green-500 rounded-full" />
                        <div className="h-1 w-4 bg-zinc-600 rounded-full mt-1" />
                    </motion.div>
                </>
            );
        default:
            return null;
    }
}

export function LaptopMockup({
    screenContent,
    screenImage,
    className = '',
    rotateY = -15,
    rotateX = 10,
    popupElements
}: LaptopMockupProps) {
    return (
        <div
            className={`relative ${className}`}
            style={{
                perspective: '800px',
                transformStyle: 'preserve-3d',
            }}
        >
            {/* 3D Container - Variants synced with parent Card hover */}
            <motion.div
                style={{
                    transformStyle: 'preserve-3d',
                }}
                variants={{
                    initial: {
                        rotateY: rotateY,
                        rotateX: rotateX,
                        y: 0
                    },
                    hover: {
                        rotateY: rotateY * 0.8,
                        rotateX: rotateX * 0.8,
                        y: -5,
                        transition: { duration: 0.4, ease: 'easeOut' }
                    }
                }}
                // Removed whileHover="hover" to allow parent propagation
                className="relative w-full aspect-[16/10]"
            >
                {/* Popup Elements (Floating in 3D space) */}
                <div className="absolute inset-0 pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
                    {popupElements}
                </div>

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
                        height: '140%',
                        transformStyle: 'preserve-3d',
                        transform: 'rotateX(82deg)',
                    }}
                >
                    {/* Layer 1: Top Surface (Keyboard Deck) */}
                    <div
                        className="absolute inset-0 rounded-b-xl overflow-hidden"
                        style={{
                            transform: 'translateZ(0.5px)',
                            background: 'linear-gradient(180deg, #dddddd 0%, #c0c0c0 20%, #a0a0a0 100%)', // Silver/Aluminum
                            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4)',
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

                    {/* Layer 2: Main Body Thickness */}
                    <div
                        className="absolute inset-0 rounded-b-xl bg-[#a0a0a0]"
                        style={{ transform: 'translateZ(-1px)' }}
                    />
                    <div
                        className="absolute inset-0 rounded-b-xl bg-[#909090]"
                        style={{ transform: 'translateZ(-2px)' }}
                    />

                    {/* Layer 3: Bottom Tapered Pan */}
                    <div
                        className="absolute inset-x-2 bottom-0 h-[98%] rounded-b-xl bg-[#808080]"
                        style={{ transform: 'translateZ(-3px)' }} // Recessed and indented to create taper
                    />
                    <div
                        className="absolute inset-x-4 bottom-0 h-[96%] rounded-b-xl bg-[#707070]"
                        style={{ transform: 'translateZ(-3.5px)' }} // Further taper
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



export function ServiceShowcase() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full max-w-[1600px] mx-auto px-4 md:px-8">
            {showcaseData.map((service, index) => (
                <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative"
                >
                    {/* Card Container - Now uses motion for hover control */}
                    <motion.div
                        initial="initial" // Set initial state for all children
                        whileHover="hover" // Trigger hover state for all children
                        className="relative rounded-2xl border border-white/10 bg-black/60 backdrop-blur-sm p-8 pb-12
                                   hover:border-white/20 transition-all duration-500 cursor-pointer overflow-visible perspective-[2000px]"
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

                        {/* Title & Context */}
                        <div className="relative z-10 mb-6 group-hover:-translate-y-1 transition-transform duration-500">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-baseline gap-2">
                                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                                        {service.title}
                                    </h3>
                                    <span className="text-xl md:text-2xl font-light text-zinc-500">
                                        {service.subtitle}
                                    </span>
                                </div>
                                <div className="h-px w-12 bg-zinc-700 my-2 group-hover:w-full group-hover:bg-white/30 transition-all duration-700" />
                                <p className="text-sm text-zinc-400 font-normal leading-relaxed max-w-[90%]">
                                    {service.description}
                                </p>
                            </div>
                        </div>

                        {/* Laptop Mockup with Screen Content */}
                        <div className="relative z-10 flex justify-center mt-8 scale-75 origin-top transition-transform duration-500 group-hover:scale-[0.78]">
                            <LaptopMockup
                                rotateY={service.mockupRotation.y}
                                rotateX={service.mockupRotation.x}
                                className="w-full max-w-[280px]"
                                screenContent={getScreenContent(service.id)}
                                popupElements={getPopupElements(service.id)}
                            />
                        </div>

                        {/* Add some bottom padding via a spacer if needed, or rely on pb-12 and scaling */}
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
}



