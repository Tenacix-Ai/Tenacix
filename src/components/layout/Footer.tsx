'use client';

import Link from 'next/link';
import { MapPin, Mail, Instagram, Linkedin } from 'lucide-react';

const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services-highlight', label: 'Services' },
    { href: '#about', label: 'About Us' },
    { href: '#contact', label: 'Contact' },
];

const founders = [
    { name: 'Arnav Vasisht Sharma', color: 'bg-purple-500' },
    { name: 'Sandesh Rajbhar', color: 'bg-indigo-500' },
];

const socialLinks = [
    { href: '#', icon: Instagram, hoverColor: 'hover:bg-purple-500' },
    { href: '#', icon: Linkedin, hoverColor: 'hover:bg-indigo-500' },
    { href: 'mailto:vrtxbuisness@gmail.com', icon: Mail, hoverColor: 'hover:bg-pink-500' },
];

export default function Footer() {
    return (
        <footer className="dark:bg-black bg-gray-900 text-white py-16 relative overflow-hidden">
            {/* Animated gradient line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

            {/* Glow effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-purple-500/20 blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Branding */}
                    <div className="lg:col-span-1">
                        <Link
                            href="#home"
                            className="text-3xl font-bold tracking-tight text-white inline-block mb-4"
                        >
                            VRTX
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Crafting digital experiences that push boundaries. AI-powered solutions for modern
                            businesses.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-400 mb-6">
                            Quick Links
                        </h4>
                        <ul className="space-y-3 text-gray-400">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Founders */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-400 mb-6">
                            Founders
                        </h4>
                        <ul className="space-y-3 text-gray-400">
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
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-400 mb-6">
                            Connect
                        </h4>
                        <div className="flex gap-4">
                            {socialLinks.map((social, idx) => (
                                <Link
                                    key={idx}
                                    href={social.href}
                                    className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center ${social.hoverColor} transition-all duration-300`}
                                >
                                    <social.icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© 2025 VRTX. All rights reserved.</p>
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                        Made with <span className="text-purple-500">♥</span> in India
                    </p>
                </div>
            </div>
        </footer>
    );
}
