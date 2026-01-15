'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, Bot, X } from 'lucide-react';

interface ServiceCardData {
    id: string;
    badge: string;
    title: string;
    shortDescription: string;
    fullDescription: string[];
    features: string[];
    cta: string;
    icon: 'globe' | 'bot';
}

const servicesData: ServiceCardData[] = [
    {
        id: 'web-scalability',
        badge: 'Fixed Scope',
        title: 'Web\nScalability',
        shortDescription: 'Plan-driven engineering for massive growth. Instant, secure, and infinitely scalable digital environments.',
        fullDescription: [
            'Our web scalability solutions are designed to grow with your business, handling millions of requests seamlessly while maintaining lightning-fast performance.',
            'We architect distributed systems that auto-scale based on demand, ensuring your platform never misses a beat during peak traffic moments.',
        ],
        features: [
            'Auto-scaling cloud infrastructure',
            'Global CDN distribution',
            'Database optimization & sharding',
            'Load balancing & failover systems',
            'Performance monitoring dashboards',
            'Zero-downtime deployments',
        ],
        cta: 'Explore Infrastructure',
        icon: 'globe',
    },
    {
        id: 'ai-agents',
        badge: 'Flexible Scale',
        title: 'AI\nAgents',
        shortDescription: 'Change-driven autonomous workflows. Deploy custom LLMs to handle complex decision-making 24/7.',
        fullDescription: [
            'Deploy intelligent AI agents that work around the clock, handling customer inquiries, automating workflows, and making data-driven decisions autonomously.',
            'Our custom LLM solutions are tailored to your specific business needs, learning from your data to provide contextually relevant responses and actions.',
        ],
        features: [
            'Custom LLM fine-tuning',
            '24/7 autonomous operations',
            'Multi-modal AI capabilities',
            'Seamless API integrations',
            'Intelligent workflow automation',
            'Real-time learning & adaptation',
        ],
        cta: 'Deploy Intelligence',
        icon: 'bot',
    },
];

function ServiceIcon({ type, className }: { type: 'globe' | 'bot'; className?: string }) {
    if (type === 'globe') {
        return <Globe className={className} />;
    }
    return <Bot className={className} />;
}

interface ServiceCardProps {
    service: ServiceCardData;
    isExpanded: boolean;
    onToggle: () => void;
    index: number;
}

function ServiceCard({ service, isExpanded, onToggle, index }: ServiceCardProps) {
    const titleLines = service.title.split('\n');
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, [isExpanded]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            onClick={onToggle}
            className={`
                relative cursor-pointer overflow-hidden
                rounded-2xl border 
                bg-neutral-900/80 backdrop-blur-xl
                p-8
                transition-all duration-500 ease-out
                ${isExpanded
                    ? 'border-white/25 bg-neutral-800/90'
                    : 'border-white/10 hover:border-white/20 hover:bg-neutral-800/80'
                }
            `}
        >
            {/* Gradient overlay */}
            <div
                className={`
                    absolute inset-0 pointer-events-none
                    transition-opacity duration-500 ease-out
                    ${isExpanded ? 'opacity-100' : 'opacity-0'}
                `}
                style={{
                    background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.05), transparent 60%)',
                }}
            />

            {/* Content container */}
            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                        {/* Index */}
                        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                            0{index + 1}
                        </span>
                        {/* Badge */}
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/70 backdrop-blur-md">
                            {service.badge}
                        </span>
                    </div>

                    {/* Icon / Close button */}
                    <div
                        className={`
                            w-12 h-12 rounded-full border border-white/10 
                            flex items-center justify-center 
                            transition-all duration-300 ease-out
                            ${isExpanded ? 'bg-white/10 rotate-0' : 'bg-white/5'}
                        `}
                    >
                        <div className={`transition-transform duration-300 ease-out ${isExpanded ? 'rotate-90' : 'rotate-0'}`}>
                            {isExpanded ? (
                                <X className="w-5 h-5 text-white/80" />
                            ) : (
                                <ServiceIcon type={service.icon} className="w-5 h-5 text-white/60" />
                            )}
                        </div>
                    </div>
                </div>

                {/* Title */}
                <div className="mb-4">
                    {titleLines.map((line, idx) => (
                        <div key={idx} className="overflow-hidden">
                            <span
                                className={`
                                    block text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter leading-[0.95]
                                    transition-colors duration-300 ease-out
                                    ${isExpanded ? 'text-white' : 'text-neutral-400'}
                                `}
                            >
                                {line}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Short Description - always visible */}
                <p
                    className={`
                        text-base md:text-lg leading-relaxed max-w-md mb-6
                        transition-colors duration-300 ease-out
                        ${isExpanded ? 'text-neutral-300' : 'text-neutral-400'}
                    `}
                >
                    {service.shortDescription}
                </p>

                {/* Expanded Content with smooth height animation */}
                <div
                    className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                    style={{
                        maxHeight: isExpanded ? `${contentHeight}px` : '0px',
                        opacity: isExpanded ? 1 : 0,
                    }}
                >
                    <div ref={contentRef}>
                        {/* Full Description */}
                        <div className="space-y-4 mb-8">
                            {service.fullDescription.map((paragraph, idx) => (
                                <p
                                    key={idx}
                                    className={`
                                        text-neutral-300 leading-relaxed
                                        transition-all duration-500 ease-out
                                        ${isExpanded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                                    `}
                                    style={{
                                        transitionDelay: isExpanded ? `${idx * 50 + 100}ms` : '0ms',
                                    }}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                            {service.features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className={`
                                        flex items-center gap-3 px-4 py-3 
                                        rounded-lg bg-white/5 border border-white/5 
                                        hover:bg-white/10 hover:border-white/10 
                                        transition-all duration-300 ease-out
                                        ${isExpanded ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0'}
                                    `}
                                    style={{
                                        transitionDelay: isExpanded ? `${idx * 30 + 200}ms` : '0ms',
                                    }}
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                                    <span className="text-sm text-white/80">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="flex items-center gap-4 group/cta pt-2">
                    <span
                        className={`
                            text-sm font-bold uppercase text-white
                            transition-all duration-300 ease-out
                            ${isExpanded ? 'tracking-[0.15em]' : 'tracking-[0.1em]'}
                        `}
                    >
                        {service.cta}
                    </span>

                    <div
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center relative overflow-hidden
                            hover:scale-110 hover:border-white/30 transition-all duration-300"
                    >
                        {/* Background fill on hover */}
                        <div className="absolute inset-0 bg-white/10 scale-0 group-hover/cta:scale-100 transition-transform duration-300 rounded-full" />
                        <ArrowRight className="w-4 h-4 text-white/60 group-hover/cta:text-white relative z-10 transition-colors" />
                    </div>
                </div>
            </div>

            {/* Decorative gradient border glow */}
            <div
                className={`
                    absolute inset-0 rounded-2xl pointer-events-none
                    transition-all duration-500 ease-out
                    ${isExpanded
                        ? 'shadow-[0_0_60px_rgba(255,255,255,0.06),inset_0_0_30px_rgba(255,255,255,0.02)]'
                        : 'shadow-none'
                    }
                `}
            />
        </motion.div>
    );
}

export default function ServiceCards() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const handleToggle = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {servicesData.map((service, index) => (
                <ServiceCard
                    key={service.id}
                    service={service}
                    isExpanded={expandedId === service.id}
                    onToggle={() => handleToggle(service.id)}
                    index={index}
                />
            ))}
        </div>
    );
}

export { ServiceCard, servicesData };
export type { ServiceCardData };
