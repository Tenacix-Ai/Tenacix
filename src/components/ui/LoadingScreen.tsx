'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface LoadingScreenProps {
    onLoadingComplete?: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
    const preloaderRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (!preloaderRef.current || !logoRef.current || !progressBarRef.current || !counterRef.current) return;

        document.body.classList.add('is-loading');
        document.documentElement.classList.add('is-loading');
        document.body.style.overflow = 'hidden';

        const logo = logoRef.current;
        const progressBar = progressBarRef.current;
        const counter = counterRef.current;
        const preloader = preloaderRef.current;

        // Ease function
        const easeOutExpo = (x: number) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x));

        // Animate logo in
        gsap.fromTo(logo,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
        );

        // Simulate loading progress
        const duration = 1.5;
        const startTime = Date.now();

        const updateProgress = () => {
            const elapsed = (Date.now() - startTime) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutExpo(progress);
            const progressValue = Math.round(easedProgress * 100);

            progressBar.style.width = `${progressValue}%`;
            counter.textContent = `${progressValue}%`;

            if (progress < 1) {
                requestAnimationFrame(updateProgress);
            } else {
                // Loading complete - start hide animation
                setTimeout(() => {
                    hidePreloader();
                }, 300);
            }
        };

        const hidePreloader = () => {
            const tl = gsap.timeline();

            // Scale logo and fade
            tl.to(logo, {
                scale: 0.9,
                opacity: 0,
                duration: 0.4,
                ease: 'power2.in'
            })
                .to([progressBar.parentElement, counter], {
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.in'
                }, '<')
                .to(preloader, {
                    clipPath: 'inset(0 0 100% 0)',
                    duration: 0.8,
                    ease: 'power4.inOut',
                    onComplete: () => {
                        document.body.classList.remove('is-loading');
                        document.documentElement.classList.remove('is-loading');
                        document.body.style.overflow = '';
                        setIsVisible(false);
                        onLoadingComplete?.();
                    }
                });
        };

        requestAnimationFrame(updateProgress);

        return () => {
            document.body.classList.remove('is-loading');
            document.documentElement.classList.remove('is-loading');
            document.body.style.overflow = '';
        };
    }, [onLoadingComplete]);

    if (!isVisible) return null;

    return (
        <div
            ref={preloaderRef}
            className="preloader"
            style={{ clipPath: 'inset(0 0 0 0)' }}
        >
            <div ref={logoRef} className="preloader__logo">
                TENACIX
            </div>
            <div className="preloader__progress">
                <div ref={progressBarRef} className="preloader__progress-bar" />
            </div>
            <div ref={counterRef} className="preloader__counter">
                0%
            </div>
        </div>
    );
}
