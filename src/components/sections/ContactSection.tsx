'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const contactCards = [
    {
        icon: MapPin,
        label: 'Location',
        value: 'India',
        href: null,
        gradient: 'from-purple-500 to-indigo-600',
        labelColor: 'text-purple-500',
    },
    {
        icon: Mail,
        label: 'Email',
        value: 'vrtxbuisness@gmail.com',
        href: 'mailto:vrtxbuisness@gmail.com',
        gradient: 'from-pink-500 to-rose-600',
        labelColor: 'text-pink-500',
    },
    {
        icon: Instagram,
        label: 'Instagram',
        value: '@vrtx.agency',
        href: '#',
        gradient: 'from-orange-500 to-pink-600',
        labelColor: 'text-orange-500',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        value: 'VRTX Agency',
        href: '#',
        gradient: 'from-blue-500 to-indigo-600',
        labelColor: 'text-blue-500',
    },
];

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="dark:bg-gradient-to-b dark:from-gray-900 dark:via-black dark:to-black bg-gradient-to-b from-gray-50 to-white pt-32 pb-24 px-6 min-h-[60vh] relative overflow-hidden"
        >
            {/* Background gradient orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Animated gradient heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent bg-[length:300%_300%] animate-gradient"
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {contactCards.map((card, idx) => (
                        <motion.div
                            key={card.label}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group p-6 rounded-2xl dark:bg-white/5 bg-white dark:border-gray-800 border-gray-200 border backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
                        >
                            <div
                                className={`w-12 h-12 rounded-full bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                            >
                                <card.icon size={20} className="text-white" />
                            </div>
                            <span className={`block text-xs font-mono ${card.labelColor} uppercase tracking-wider mb-2`}>
                                {card.label}
                            </span>
                            {card.href ? (
                                <Link
                                    href={card.href}
                                    className="dark:text-white text-gray-900 font-semibold text-lg hover:text-purple-500 transition-colors"
                                >
                                    {card.value}
                                </Link>
                            ) : (
                                <p className="dark:text-white text-gray-900 font-semibold text-lg">{card.value}</p>
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
                    <Link
                        href="mailto:vrtxbuisness@gmail.com"
                        className="group inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-full text-white font-semibold text-lg shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 animate-glow-pulse"
                    >
                        <span>Start Your Project</span>
                        <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
