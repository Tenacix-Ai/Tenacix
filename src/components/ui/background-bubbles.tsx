'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Bubble {
    id: number;
    size: number;
    left: number;
    top: number;
    delay: number;
    duration: number;
}

export function BackgroundBubbles() {
    const [bubbles, setBubbles] = useState<Bubble[]>([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        // Create visible bubbles across the screen
        const generatedBubbles: Bubble[] = [
            { id: 0, size: 400, left: -5, top: 10, delay: 0, duration: 18 },
            { id: 1, size: 350, left: 70, top: 5, delay: 2, duration: 20 },
            { id: 2, size: 300, left: 30, top: 50, delay: 1, duration: 16 },
            { id: 3, size: 450, left: 80, top: 60, delay: 3, duration: 22 },
            { id: 4, size: 280, left: 10, top: 70, delay: 4, duration: 19 },
            { id: 5, size: 380, left: 50, top: 30, delay: 2.5, duration: 21 },
            { id: 6, size: 320, left: 90, top: 80, delay: 1.5, duration: 17 },
            { id: 7, size: 250, left: 40, top: 90, delay: 3.5, duration: 23 },
        ];

        setBubbles(generatedBubbles);
    }, []);

    if (!isMounted) return null;

    return (
        <div
            className="fixed inset-0 pointer-events-none overflow-hidden"
            style={{ zIndex: 0 }}
        >
            {bubbles.map((bubble) => (
                <motion.div
                    key={bubble.id}
                    className="absolute rounded-full"
                    style={{
                        width: `${bubble.size}px`,
                        height: `${bubble.size}px`,
                        left: `${bubble.left}%`,
                        top: `${bubble.top}%`,
                        background: `radial-gradient(circle at 30% 30%, 
                            rgba(120, 120, 120, 0.4) 0%, 
                            rgba(80, 80, 80, 0.2) 40%, 
                            rgba(50, 50, 50, 0.1) 70%, 
                            transparent 100%)`,
                        boxShadow: 'inset 0 0 40px rgba(255,255,255,0.1)',
                    }}
                    animate={{
                        y: [0, -60, 30, -40, 0],
                        x: [0, 40, -30, 20, 0],
                        scale: [1, 1.08, 0.95, 1.05, 1],
                    }}
                    transition={{
                        duration: bubble.duration,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                        delay: bubble.delay,
                    }}
                />
            ))}
        </div>
    );
}
