'use client';

import Link from 'next/link';
import { MapPin, Mail, Instagram, Twitter } from 'lucide-react';

const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services-highlight', label: 'Services' },
    { href: '#about', label: 'About Us' },
    { href: '#contact', label: 'Contact' },
];

const founders = [
    { name: 'Arnav Vasisht Sharma', color: 'bg-zinc-500' },
    { name: 'Sandesh Rajbhar', color: 'bg-zinc-400' },
];

const socialLinks = [
    { href: '#', icon: Instagram, hoverColor: 'hover:bg-zinc-800' },
    { href: '#', icon: Twitter, hoverColor: 'hover:bg-zinc-800' },
    { href: 'mailto:vrtxbuisness@gmail.com', icon: Mail, hoverColor: 'hover:bg-zinc-800' },
];

export default function Footer() {
    return (
        <footer className="dark:bg-neutral-900 bg-white border-t dark:border-white/10 border-black/5 text-zinc-600 dark:text-zinc-400 py-16 relative overflow-hidden">
            {/* Animated gradient line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-500/20 to-transparent" />

            {/* Glow effects - REMOVED for monochrome cleanliness, or keep subtle white */}
            {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-white/5 blur-3xl" /> */}

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Branding */}
                    <div className="lg:col-span-1">
                        <Link
                            href="#home"
                            className="text-3xl font-bold tracking-tight dark:text-white text-black inline-block mb-4"
                        >
                            VRTXZ
                        </Link>
                        <p className="dark:text-zinc-400 text-zinc-600 text-sm leading-relaxed">
                            Crafting digital experiences that push boundaries. AI-powered solutions for modern
                            businesses.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider dark:text-zinc-200 text-zinc-900 mb-6">
                            Quick Links
                        </h4>
                        <ul className="space-y-3 dark:text-zinc-400 text-zinc-600">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="dark:hover:text-white hover:text-black transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Founders */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider dark:text-zinc-200 text-zinc-900 mb-6">
                            Founders
                        </h4>
                        <ul className="space-y-3 dark:text-zinc-400 text-zinc-600">
                            {founders.map((founder) => (
                                <li key={founder.name} className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${founder.color}`} />
                                    {founder.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider dark:text-zinc-200 text-zinc-900 mb-6">
                            Connect
                        </h4>
                        <div className="flex gap-4">
                            {socialLinks.map((social, idx) => (
                                <Link
                                    key={idx}
                                    href={social.href}
                                    className={`w-10 h-10 rounded-full dark:bg-zinc-800 bg-zinc-200 flex items-center justify-center dark:hover:bg-white hover:bg-black dark:hover:text-black hover:text-white transition-all duration-300`}
                                >
                                    <social.icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t dark:border-white/10 border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="dark:text-zinc-500 text-zinc-400 text-sm">© 2025 VRTXZ. All rights reserved.</p>
                    <p className="dark:text-zinc-500 text-zinc-400 text-sm flex items-center gap-2">
                        Made with <span className="dark:text-white text-black">♥</span> in India
                    </p>
                </div>
            </div>
        </footer>
    );
}
