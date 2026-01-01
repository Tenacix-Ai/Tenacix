'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
    onLoadingComplete?: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
    const [isVisible, setIsVisible] = useState(true);
    const [progress, setProgress] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const letters = ['V', 'R', 'T', 'X'];

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        // Animate progress bar
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + 3;
            });
        }, 40);

        // Start fading out - background fades but VRTX stays
        const fadeTimer = setTimeout(() => {
            setIsFadingOut(true);
            onLoadingComplete?.();
        }, 1800);

        // Remove loading screen completely
        const removeTimer = setTimeout(() => {
            setIsVisible(false);
            document.body.style.overflow = '';
        }, 2800);

        return () => {
            clearInterval(progressInterval);
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
            document.body.style.overflow = '';
        };
    }, [onLoadingComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[9999]"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.01 }}
                >
                    {/* Black background - this fades away */}
                    <motion.div
                        className="absolute inset-0 bg-black dark:bg-neutral-950"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: isFadingOut ? 0 : 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    />

                    {/* Content container - matches hero section layout EXACTLY */}
                    <div className="relative min-h-[90vh] w-full flex flex-col items-center justify-center pointer-events-none">
                        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">

                            {/* VRTX Text - exact same styling as hero, fades with background */}
                            <motion.h1
                                className="md:text-8xl lg:text-9xl leading-[0.9] text-6xl font-black tracking-tighter mb-8 cursor-default text-white"
                                initial={{ opacity: 1 }}
                                animate={{ opacity: isFadingOut ? 0 : 1 }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            >
                                {letters.map((letter, index) => (
                                    <motion.span
                                        key={letter}
                                        initial={{ y: 80, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay: 0.1 + index * 0.03,
                                            type: 'spring',
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </motion.h1>

                            {/* Loading bar - positioned below VRTX */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isFadingOut ? 0 : 1 }}
                                transition={{ delay: 0.4, duration: 0.3 }}
                                className="mx-auto w-32"
                            >
                                <div className="h-[2px] w-full bg-neutral-800 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-white"
                                        initial={{ width: '0%' }}
                                        animate={{ width: `${progress}%` }}
                                        transition={{ duration: 0.05, ease: 'linear' }}
                                    />
                                </div>
                                <p className="mt-3 text-[10px] uppercase tracking-[0.4em] text-neutral-500">
                                    Loading
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
