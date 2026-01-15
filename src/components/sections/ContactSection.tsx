'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BookingModal } from '@/components/ui/booking-modal';
import { LampContainer } from '@/components/ui/lamp';
import { PricingSection } from '@/components/ui/pricing';
import { useState } from 'react';

const PLANS = [
    {
        id: 'starter',
        name: 'Starter',
        info: 'For individuals & startups',
        price: {
            monthly: 499,
            yearly: Math.round(499 * 12 * (1 - 0.15)),
        },
        features: [
            { text: 'Single page website' },
            { text: 'Basic AI chatbot integration' },
            { text: '3 revision rounds' },
            { text: 'Mobile responsive design' },
            {
                text: '2 weeks delivery',
                tooltip: 'Standard delivery time for starter projects',
            },
            {
                text: 'Email support',
                tooltip: 'Get responses within 24-48 hours',
            },
        ],
        btn: {
            text: 'Get Started',
            href: '#',
        },
    },
    {
        highlighted: true,
        id: 'professional',
        name: 'Professional',
        info: 'For growing businesses',
        price: {
            monthly: 1499,
            yearly: Math.round(1499 * 12 * (1 - 0.15)),
        },
        features: [
            { text: 'Multi-page web application' },
            { text: 'Custom AI agent development' },
            { text: 'Unlimited revisions' },
            { text: 'Advanced animations & interactions' },
            { text: 'SEO optimization' },
            { text: 'Priority support', tooltip: 'Get 24/7 dedicated support' },
            {
                text: 'API integrations',
                tooltip: 'Connect with your existing tools and services',
            },
        ],
        btn: {
            text: 'Get Started',
            href: '#',
        },
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        info: 'For large organizations',
        price: {
            monthly: 4999,
            yearly: Math.round(4999 * 12 * (1 - 0.15)),
        },
        features: [
            { text: 'Full-stack development' },
            { text: 'Multiple AI agents & automations' },
            { text: 'Dedicated project manager' },
            { text: 'Custom integrations & workflows' },
            {
                text: 'White-label solutions',
                tooltip: 'Fully branded solutions for your business',
            },
            { text: '24/7 priority support' },
            {
                text: 'Ongoing maintenance',
                tooltip: 'Monthly updates and improvements included',
            },
        ],
        btn: {
            text: 'Contact Us',
            href: '#',
        },
    },
];

export default function ContactSection() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <section
            id="contact"
            className="min-h-screen relative overflow-hidden"
        >
            {/* Lamp animation header */}
            <LampContainer className="pt-20">
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
            </LampContainer>

            {/* Pricing Section */}
            <div className="relative z-10 -mt-20 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <PricingSection
                        plans={PLANS}
                        heading="Flexible Pricing for Every Need"
                        description="Choose a plan that fits your project scope. All plans include our signature attention to detail and pixel-perfect execution."
                        className="text-white"
                    />
                </motion.div>
            </div>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </section>
    );
}
