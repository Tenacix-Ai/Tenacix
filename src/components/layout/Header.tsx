'use client';

import Link from 'next/link';
import { Home, Briefcase, User, Phone, FileText, ArrowRight } from 'lucide-react';

import { NavBar } from "@/components/ui/tubelight-navbar";

const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'Services', url: '#services-highlight', icon: Briefcase },
    { name: 'About', url: '#about', icon: User },
    { name: 'Process', url: '#process', icon: FileText },
    { name: 'Contact', url: '#contact', icon: Phone },
];

export default function Header() {
    // Mobile menu state removed as NavBar handles it


    return (
        <>
            <header className="fixed top-0 w-full z-40 backdrop-blur-md border-b bg-black/80 border-gray-800/50 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
                    {/* Brand */}
                    <Link href="#home" className="flex items-center gap-2 group z-20">
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-2xl tracking-tighter text-white font-sans">
                                TENACIX
                            </span>
                        </div>
                    </Link>


                    {/* CTA & Theme Toggle */}
                    <div className="flex items-center gap-3 z-20">


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

                        {/* Mobile Menu Button Removed - handled by NavBar */}
                    </div>
                </div>
            </header>

            {/* Nav (Desktop & Mobile) - Centered via TubelightNavbar - Rendered outside Header to avoid containing block issues with fixed position */}
            <NavBar items={navItems} className="top-0 pt-2" />
        </>
    );
}
