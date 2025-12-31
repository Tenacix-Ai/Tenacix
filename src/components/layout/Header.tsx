'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import CinematicThemeSwitcher from '@/components/ui/cinematic-theme-switcher';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services-highlight', label: 'Services' },
    { href: '#about', label: 'About Us' },
    { href: '#contact', label: 'Contact' },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 backdrop-blur-md border-b dark:bg-black/80 bg-white/80 dark:border-gray-800/50 border-gray-200/50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
                {/* Brand */}
                <Link href="#home" className="flex items-center gap-2 group z-20">
                    <span className="font-bold text-xl tracking-tight dark:text-white text-gray-900 uppercase font-sans">
                        VRTX
                    </span>
                </Link>

                {/* Nav (Desktop) - Centered */}
                <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900 transition-colors duration-200"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA & Theme Toggle */}
                <div className="flex items-center gap-3 z-20">
                    {/* Cinematic Theme Switcher */}
                    <div className="hidden sm:block scale-[0.55] origin-center">
                        <CinematicThemeSwitcher />
                    </div>

                    {/* Start Project CTA - Liquid Glass Style */}
                    <Link
                        href="#contact"
                        className="hidden sm:flex items-center gap-2 hover:gap-3 transition-all duration-300 group text-xs font-semibold rounded-full py-2.5 px-5 liquid-glass-button"
                    >
                        <span className="flex items-center gap-2">
                            Start Project
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden dark:text-white text-gray-900 p-2"
                        aria-label="Open menu"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full dark:bg-black/95 bg-white/95 backdrop-blur-lg border-b dark:border-gray-800 border-gray-200">
                    <nav className="flex flex-col p-6 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-lg font-medium dark:text-gray-300 text-gray-700 dark:hover:text-white hover:text-gray-900 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-4 flex items-center gap-4">
                            <CinematicThemeSwitcher />
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
