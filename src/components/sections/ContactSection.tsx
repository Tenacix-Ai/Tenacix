'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BookingModal } from '@/components/ui/booking-modal';
import { useState } from 'react';
// import { LampContainer } from '@/components/ui/lamp'; // Removing LampContainer
// import { HeroSphere } from '@/components/ui/hero-sphere';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq';

export default function ContactSection() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <section
            id="contact"
            className="min-h-screen relative overflow-hidden"
        >
            {/* Subtle Ambient Glow - Premium Style - REMOVED */}


            {/* Content previously in LampContainer, now relative */}
            <div className="relative z-10 pt-20 flex flex-col items-center max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-white to-gray-400 py-4 bg-clip-text text-center text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-transparent"
                >
                    Let&apos;s Build Something
                    <br />
                    Amazing Together
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="text-lg text-gray-400 max-w-2xl text-center mt-4"
                >
                    Ready to transform your business with cutting-edge AI and stunning web experiences? Let&apos;s talk.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.7,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="flex justify-center mt-8"
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

            {/* FAQ Section */}
            <div className="relative z-10 mt-20 pb-24">
                <FAQSection />
            </div>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </section>
    );
}
