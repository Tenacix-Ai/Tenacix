'use client';

import { useRef, ReactNode } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ScrollExpandMediaProps {
    mediaType?: 'video' | 'image';
    mediaSrc: string;
    posterSrc?: string;
    bgImageSrc: string;
    title?: string;
    date?: string;
    scrollToExpand?: string;
    textBlend?: boolean;
    children?: ReactNode;
}

const ScrollExpandMedia = ({
    mediaType = 'video',
    mediaSrc,
    posterSrc,
    bgImageSrc,
    title,
    date,
    scrollToExpand = "Scroll to Interact",
    textBlend,
    children,
}: ScrollExpandMediaProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Animations
    // 0 -> 0.6 : Expansion phase
    // 0.6 -> 1.0 : Content reveal phase

    // Media Size Expansion
    // Starts small (e.g. 300px width) and grows to full screen
    const width = useTransform(smoothProgress, [0, 0.6], ['300px', '100%']);
    const height = useTransform(smoothProgress, [0, 0.6], ['400px', '100%']);
    const borderRadius = useTransform(smoothProgress, [0, 0.6], ['16px', '0px']);

    // Background Image Opacity - Fades out as we expand (optional, or keeps it visible)
    // The original component faded the background image OUT (opacity 1 -> 0).
    // Let's replicate: Background Image covers the whole screen initially?
    // In the original, there was a background image covering the screen `absolute inset-0`.
    // And it faded out: `opacity: 1 - scrollProgress`.
    const bgOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

    // Text Movements
    // Title splits and moves away
    const textTranslateLeft = useTransform(smoothProgress, [0, 0.4], ['0%', '-100%']);
    const textTranslateRight = useTransform(smoothProgress, [0, 0.4], ['0%', '100%']);
    const textOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

    // Content (Children) Reveal
    // Appears after expansion
    const contentOpacity = useTransform(smoothProgress, [0.6, 0.8], [0, 1]);
    const contentY = useTransform(smoothProgress, [0.6, 0.8], [50, 0]);
    const contentPointerEvents = useTransform(smoothProgress, (v) => v > 0.6 ? 'auto' : 'none');

    const firstWord = title ? title.split(' ')[0] : '';
    const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

    return (
        <div ref={containerRef} className="relative w-full" style={{ height: '300vh' }}>
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

                {/* Background Image - Absolute Full Screen */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ opacity: bgOpacity }}
                >
                    <Image
                        src={bgImageSrc}
                        alt='Background'
                        fill
                        className='object-cover'
                        priority
                    />
                    <div className='absolute inset-0 bg-black/40' />
                </motion.div>

                {/* Central Expanding Media */}
                <motion.div
                    className='relative z-10 overflow-hidden shadow-2xl'
                    style={{
                        width,
                        height,
                        borderRadius,
                        maxWidth: useTransform(smoothProgress, [0, 0.6], ['90vw', '100vw']),
                        maxHeight: useTransform(smoothProgress, [0, 0.6], ['80vh', '100vh']),
                    }}
                >
                    {mediaType === 'video' ? (
                        mediaSrc.includes('youtube.com') ? (
                            <iframe
                                width='100%'
                                height='100%'
                                src={mediaSrc}
                                className='w-full h-full object-cover'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen
                            />
                        ) : (
                            <video
                                src={mediaSrc}
                                poster={posterSrc}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className='w-full h-full object-cover'
                            />
                        )
                    ) : (
                        <Image
                            src={mediaSrc}
                            alt={title || 'Media content'}
                            fill
                            className='object-cover'
                        />
                    )}

                    {/* Overlay on the media itself */}
                    <motion.div
                        className='absolute inset-0 bg-black/20'
                        style={{ opacity: useTransform(smoothProgress, [0, 0.6], [0.5, 0]) }}
                    />
                </motion.div>

                {/* Title Text - Overlaying the center */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
                    <div className="flex items-center justify-center gap-4 text-center">
                        <motion.h2
                            className='text-5xl md:text-7xl lg:text-9xl font-black text-white mix-blend-overlay'
                            style={{ x: textTranslateLeft, opacity: textOpacity }}
                        >
                            {firstWord}
                        </motion.h2>
                        <motion.h2
                            className='text-5xl md:text-7xl lg:text-9xl font-black text-white mix-blend-overlay'
                            style={{ x: textTranslateRight, opacity: textOpacity }}
                        >
                            {restOfTitle}
                        </motion.h2>
                    </div>

                    {/* Subtitle / CTA */}
                    <motion.div
                        className="mt-8 text-white/80 font-medium tracking-widest uppercase text-sm"
                        style={{ opacity: textOpacity }}
                    >
                        {scrollToExpand}
                    </motion.div>
                </div>

                {/* Content Container (Children) - Appears on top or below? 
            Original code had children in a section below.
            In this setup, we want children to appear INSIDE the media or ON TOP of it once expanded.
            Since the media takes full screen, children must be on top (z-30).
        */}
                <motion.div
                    className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
                    style={{ opacity: contentOpacity }}
                >
                    <motion.div
                        className="w-full h-full overflow-y-auto px-4 py-20 pointer-events-auto flex flex-col items-center"
                        style={{ y: contentY }}
                    >
                        {/* We need a container for the children that allows scrolling if content is long, 
                    but here 'sticky' prevents scrolling of parent...
                    Actually, if the parent is h-300vh, we scroll past the sticky phases.
                    Once we reach 'reveal' phase (smoothProgress > 0.6), we show content.
                    BUT, `sticky` keeps us fixed.
                    
                    If user keeps scrolling, the `sticky` container eventually scrolls up when we reach end of `h-300vh`.
                    So the content will move up out of view.
                    
                    This means the content is visible only while we are continuously scrolling.
                    This might feel weird for 'reading' content.
                    
                    However, `AboutSection` content (bento grid) is static info.
                    Maybe we should pin the content for a while.
                    `h-[300vh]` gives plenty of scroll room.
                */}
                        <div className="max-w-7xl mx-auto w-full">
                            {children}
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </div>
    );
};

export default ScrollExpandMedia;
