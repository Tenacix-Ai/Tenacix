'use client';

import React from 'react';

interface Icon3DProps {
    className?: string;
    size?: number;
}

// Reusable gradients for consistency
const Gradients = () => (
    <svg width="0" height="0" className="absolute">
        <defs>
            {/* Cyber Blue Gradient */}
            <linearGradient id="cyberBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.8" />
            </linearGradient>

            {/* Dark Tech Gradient */}
            <linearGradient id="techDark" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            {/* Accent Glow */}
            <radialGradient id="accentGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
        </defs>
    </svg>
);

// Cyber 3D Globe
export function Globe3D({ className = '', size = 48 }: Icon3DProps) {
    return (
        <div className={`relative ${className}`} style={{ width: size, height: size }}>
            <Gradients />
            <div className="absolute inset-0 rounded-full bg-white/5 blur-xl" />
            <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                <circle cx="50" cy="50" r="40" fill="none" stroke="url(#cyberBlue)" strokeWidth="0.5" opacity="0.5" />

                {/* Tech Rings */}
                <path d="M50 10 A40 40 0 0 1 50 90 A40 40 0 0 1 50 10" fill="none" stroke="url(#cyberBlue)" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="20s" repeatCount="indefinite" />
                </path>

                {/* Latitude/Longitude */}
                <ellipse cx="50" cy="50" rx="38" ry="12" fill="none" stroke="url(#cyberBlue)" strokeWidth="0.5" opacity="0.6" transform="rotate(-15 50 50)" />
                <ellipse cx="50" cy="50" rx="38" ry="24" fill="none" stroke="url(#cyberBlue)" strokeWidth="0.5" opacity="0.4" transform="rotate(-15 50 50)" />
                <line x1="50" y1="12" x2="50" y2="88" stroke="url(#cyberBlue)" strokeWidth="0.5" opacity="0.4" />

                {/* Nodes */}
                <circle cx="50" cy="50" r="1.5" fill="white" className="animate-pulse" />
                <circle cx="70" cy="40" r="1" fill="white" opacity="0.6" />
                <circle cx="30" cy="60" r="1" fill="white" opacity="0.6" />
            </svg>
        </div>
    );
}

// Cyber 3D Bot
export function Bot3D({ className = '', size = 48 }: Icon3DProps) {
    return (
        <div className={`relative ${className}`} style={{ width: size, height: size }}>
            <Gradients />
            <div className="absolute inset-0 rounded-lg bg-white/5 blur-xl" />
            <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                {/* Head */}
                <path d="M25 35 H75 V75 C75 80 70 85 65 85 H35 C30 85 25 80 25 75 V35 Z" fill="none" stroke="url(#cyberBlue)" strokeWidth="1" />
                <path d="M20 35 H80" stroke="url(#cyberBlue)" strokeWidth="1" opacity="0.5" />

                {/* Eyes */}
                <rect x="35" y="50" width="10" height="4" rx="1" fill="white" />
                <rect x="55" y="50" width="10" height="4" rx="1" fill="white" />

                {/* Antenna */}
                <line x1="50" y1="35" x2="50" y2="20" stroke="url(#cyberBlue)" strokeWidth="1" />
                <circle cx="50" cy="18" r="3" fill="none" stroke="url(#cyberBlue)" strokeWidth="1" />
                <circle cx="50" cy="18" r="1" fill="white">
                    <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
                </circle>

                {/* Tech Accents */}
                <rect x="25" y="75" width="50" height="10" rx="2" fill="url(#cyberBlue)" opacity="0.1" />
                <path d="M30 80 H40" stroke="url(#cyberBlue)" strokeWidth="0.5" opacity="0.5" />
            </svg>
        </div>
    );
}

// Cyber 3D Brain
export function BrainCircuit3D({ className = '', size = 48 }: Icon3DProps) {
    return (
        <div className={`relative ${className}`} style={{ width: size, height: size }}>
            <Gradients />
            <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                {/* Brain Outline */}
                <path
                    d="M30 40 C30 25 40 15 50 15 C60 15 70 25 70 40 C70 50 65 55 65 60 C65 65 70 70 65 80 C60 85 55 85 50 85 C45 85 40 85 35 80 C30 70 35 65 35 60 C35 55 30 50 30 40"
                    fill="none"
                    stroke="url(#cyberBlue)"
                    strokeWidth="1"
                    strokeLinecap="round"
                    opacity="0.8"
                />

                {/* Circuit Traces */}
                <path d="M50 25 V45" stroke="url(#cyberBlue)" strokeWidth="0.5" />
                <path d="M50 45 L35 55" stroke="url(#cyberBlue)" strokeWidth="0.5" />
                <path d="M50 45 L65 55" stroke="url(#cyberBlue)" strokeWidth="0.5" />
                <circle cx="50" cy="45" r="2" fill="white" />
                <circle cx="35" cy="55" r="1.5" fill="none" stroke="url(#cyberBlue)" strokeWidth="0.5" />
                <circle cx="65" cy="55" r="1.5" fill="none" stroke="url(#cyberBlue)" strokeWidth="0.5" />

                {/* Data Flow */}
                <circle cx="50" cy="30" r="1" fill="white">
                    <animate attributeName="cy" values="25;45" dur="1.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
                </circle>
            </svg>
        </div>
    );
}

// Cyber 3D Scan Eye
export function ScanEye3D({ className = '', size = 48 }: Icon3DProps) {
    return (
        <div className={`relative ${className}`} style={{ width: size, height: size }}>
            <Gradients />
            <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                {/* Brackets */}
                <path d="M20 30 V20 H30" fill="none" stroke="url(#cyberBlue)" strokeWidth="1" />
                <path d="M80 30 V20 H70" fill="none" stroke="url(#cyberBlue)" strokeWidth="1" />
                <path d="M20 70 V80 H30" fill="none" stroke="url(#cyberBlue)" strokeWidth="1" />
                <path d="M80 70 V80 H70" fill="none" stroke="url(#cyberBlue)" strokeWidth="1" />

                {/* Eye */}
                <path d="M25 50 Q50 25 75 50 Q50 75 25 50" fill="none" stroke="url(#cyberBlue)" strokeWidth="0.8" opacity="0.7" />
                <circle cx="50" cy="50" r="8" fill="none" stroke="url(#cyberBlue)" strokeWidth="1" />
                <circle cx="50" cy="50" r="3" fill="white" />

                {/* Scan Line */}
                <line x1="15" y1="20" x2="85" y2="20" stroke="url(#cyberBlue)" strokeWidth="0.5" opacity="0.3">
                    <animate attributeName="y1" values="20;80;20" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="y2" values="20;80;20" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.1;0.5;0.1" dur="3s" repeatCount="indefinite" />
                </line>
            </svg>
        </div>
    );
}

// Cyber 3D Network
export function Network3D({ className = '', size = 48 }: Icon3DProps) {
    return (
        <div className={`relative ${className}`} style={{ width: size, height: size }}>
            <Gradients />
            <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                {/* Central Hub */}
                <circle cx="50" cy="50" r="8" fill="none" stroke="url(#cyberBlue)" strokeWidth="1" />
                <circle cx="50" cy="50" r="3" fill="white" />

                {/* Satellites */}
                <g opacity="0.6">
                    <circle cx="20" cy="30" r="4" fill="none" stroke="url(#cyberBlue)" strokeWidth="1" />
                    <circle cx="80" cy="30" r="4" fill="none" stroke="url(#cyberBlue)" strokeWidth="1" />
                    <circle cx="20" cy="70" r="4" fill="none" stroke="url(#cyberBlue)" strokeWidth="1" />
                    <circle cx="80" cy="70" r="4" fill="none" stroke="url(#cyberBlue)" strokeWidth="1" />
                </g>

                {/* Connections */}
                <path d="M50 50 L24 33" stroke="url(#cyberBlue)" strokeWidth="0.5" strokeDasharray="2 2" />
                <path d="M50 50 L76 33" stroke="url(#cyberBlue)" strokeWidth="0.5" strokeDasharray="2 2" />
                <path d="M50 50 L24 67" stroke="url(#cyberBlue)" strokeWidth="0.5" strokeDasharray="2 2" />
                <path d="M50 50 L76 67" stroke="url(#cyberBlue)" strokeWidth="0.5" strokeDasharray="2 2" />
            </svg>
        </div>
    );
}

// Cyber Check Icon
export function Check3D({ className = '', size = 16 }: Icon3DProps) {
    return (
        <div className={`relative ${className}`} style={{ width: size, height: size }}>
            <Gradients />
            <svg viewBox="0 0 24 24" className="w-full h-full">
                <path d="M20 6L9 17L4 12" fill="none" stroke="url(#cyberBlue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
}

// Cyber Star Icon
export function Star3D({ className = '', size = 16 }: Icon3DProps) {
    return (
        <div className={`relative ${className}`} style={{ width: size, height: size }}>
            <Gradients />
            <svg viewBox="0 0 24 24" className="w-full h-full">
                <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="none"
                    stroke="url(#cyberBlue)"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
                <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="url(#cyberBlue)"
                    opacity="0.2"
                />
            </svg>
        </div>
    );
}

// Cyber Social Icons (Simplified for cleaner look)
export function Instagram3D({ className = '', size = 18 }: Icon3DProps) {
    return (
        <div className={`relative ${className}`} style={{ width: size, height: size }}>
            <Gradients />
            <svg viewBox="0 0 24 24" className="w-full h-full">
                <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="url(#cyberBlue)" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3" fill="none" stroke="url(#cyberBlue)" strokeWidth="1.5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="url(#cyberBlue)" />
            </svg>
        </div>
    );
}

export function Twitter3D({ className = '', size = 18 }: Icon3DProps) {
    return (
        <div className={`relative ${className}`} style={{ width: size, height: size }}>
            <Gradients />
            <svg viewBox="0 0 24 24" className="w-full h-full">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="url(#cyberBlue)" />
            </svg>
        </div>
    );
}

export function Mail3D({ className = '', size = 18 }: Icon3DProps) {
    return (
        <div className={`relative ${className}`} style={{ width: size, height: size }}>
            <Gradients />
            <svg viewBox="0 0 24 24" className="w-full h-full">
                <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="url(#cyberBlue)" strokeWidth="1.5" />
                <path d="M3 7L12 13L21 7" stroke="url(#cyberBlue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
}

export function Sun3D({ className = '', size = 20 }: Icon3DProps) {
    return (
        <div className={`relative ${className}`} style={{ width: size, height: size }}>
            <Gradients />
            <svg viewBox="0 0 24 24" className="w-full h-full">
                <circle cx="12" cy="12" r="5" fill="none" stroke="url(#cyberBlue)" strokeWidth="1.5" />
                <path d="M12 1V3 M12 21V23 M4.22 4.22L5.64 5.64 M18.36 18.36L19.78 19.78 M1 12H3 M21 12H23 M4.22 19.78L5.64 18.36 M18.36 5.64L19.78 4.22" stroke="url(#cyberBlue)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        </div>
    );
}

export function Moon3D({ className = '', size = 20 }: Icon3DProps) {
    return (
        <div className={`relative ${className}`} style={{ width: size, height: size }}>
            <Gradients />
            <svg viewBox="0 0 24 24" className="w-full h-full">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="none" stroke="url(#cyberBlue)" strokeWidth="1.5" />
            </svg>
        </div>
    );
}

export function Sparkles3D({ className = '', size = 16 }: Icon3DProps) {
    return (
        <div className={`relative ${className}`} style={{ width: size, height: size }}>
            <Gradients />
            <svg viewBox="0 0 24 24" className="w-full h-full">
                <path d="M12 2L14.4 7.2L20 9.6L14.4 12L12 17.2L9.6 12L4 9.6L9.6 7.2L12 2Z" fill="url(#cyberBlue)" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
                </path>
                <path d="M18 16L19 18L21 19L19 20L18 22L17 20L15 19L17 18L18 16Z" fill="url(#cyberBlue)" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2s" repeatCount="indefinite" begin="0.5s" />
                </path>
            </svg>
        </div>
    );
}

export function MessageCircle3D({ className = '', size = 22 }: Icon3DProps) {
    return (
        <div className={`relative ${className}`} style={{ width: size, height: size }}>
            <Gradients />
            <svg viewBox="0 0 24 24" className="w-full h-full">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="none" stroke="url(#cyberBlue)" strokeWidth="1.5" />
            </svg>
        </div>
    );
}

export function Send3D({ className = '', size = 16 }: Icon3DProps) {
    return (
        <div className={`relative ${className}`} style={{ width: size, height: size }}>
            <Gradients />
            <svg viewBox="0 0 24 24" className="w-full h-full">
                <line x1="22" y1="2" x2="11" y2="13" stroke="url(#cyberBlue)" strokeWidth="1.5" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" fill="none" stroke="url(#cyberBlue)" strokeWidth="1.5" />
            </svg>
        </div>
    );
}
