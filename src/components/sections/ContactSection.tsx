'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Instagram, Twitter, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { DisplayCard } from '@/components/ui/display-cards';
import { BookingModal } from '@/components/ui/booking-modal';
import { useState } from 'react';

const contactCards = [
    {
        icon: MapPin,
        label: 'Location',
        value: 'India',
        href: null,
        gradient: 'dark:bg-white/10 bg-black/5',
        labelColor: 'dark:text-zinc-400 text-zinc-600',
    },
    {
        icon: Mail,
        label: 'Email',
        value: 'tenacix.ai@gmail.com',
        href: 'mailto:tenacix.ai@gmail.com',
        gradient: 'dark:bg-white/10 bg-black/5',
        labelColor: 'dark:text-zinc-400 text-zinc-600',
    },
    {
        icon: Instagram,
        label: 'Instagram',
        value: '@tenacix.ai',
        href: 'https://www.instagram.com/tenacix.ai',
        gradient: 'dark:bg-white/10 bg-black/5',
        labelColor: 'dark:text-zinc-400 text-zinc-600',
    },
    {
        icon: Twitter,
        label: 'X',
        value: '@tenacix.ai',
        href: 'https://x.com/tenacix_ai',
        gradient: 'dark:bg-white/10 bg-black/5',
        labelColor: 'dark:text-zinc-400 text-zinc-600',
    },
];

export default function ContactSection() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <section
            id="contact"
            className="dark:bg-neutral-900 bg-white pt-32 pb-24 px-6 min-h-[60vh] relative overflow-hidden"
        >
            {/* Background gradient orbs - REMOVED */}
            {/* <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" /> */}

            <div className="max-w-7xl mx-auto relative z-10">
                <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
                {/* Animated gradient heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-6 dark:text-white text-black"
                >
                    Let&apos;s Build Something
                    <br />
                    Amazing Together
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-lg dark:text-gray-400 text-gray-600 max-w-2xl mb-16"
                >
                    Ready to transform your business with cutting-edge AI and stunning web experiences? Let&apos;s talk.
                </motion.p>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                    {contactCards.map((card, idx) => (
                        <motion.div
                            key={card.label}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className=""
                        >
                            {card.href ? (
                                <Link href={card.href} className="block">
                                    <DisplayCard
                                        className="w-full h-auto min-h-[9rem] dark:bg-neutral-900/50 hover:-translate-y-4"
                                        icon={<card.icon className="size-4" />}
                                        title={card.label}
                                        description={card.value}
                                        titleClassName={card.labelColor}
                                        date=""
                                    />
                                </Link>
                            ) : (
                                <div className="block cursor-default">
                                    <DisplayCard
                                        className="w-full h-auto min-h-[9rem] dark:bg-neutral-900/50 hover:-translate-y-4"
                                        icon={<card.icon className="size-4" />}
                                        title={card.label}
                                        description={card.value}
                                        titleClassName={card.labelColor}
                                        date=""
                                    />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex justify-center"
                >
                    <button
                        onClick={() => setIsBookingOpen(true)}
                        className="group inline-flex items-center gap-4 px-10 py-5 liquid-glass-button rounded-full text-white font-semibold text-lg transition-all duration-300 animate-glow-pulse"
                    >
                        <span>Start Your Project</span>
                        <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
