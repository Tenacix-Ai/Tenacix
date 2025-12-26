/**
 * Scroll Animations Module
 * GSAP ScrollTrigger powered reveal animations
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class ScrollAnimations {
    constructor() {
        this.animations = [];
    }

    init() {
        this.setupRevealAnimations();
        this.setupParallax();
        this.setupStaggerAnimations();
        this.setupSectionTransitions();
    }

    setupRevealAnimations() {
        // Basic reveal animations
        const reveals = document.querySelectorAll('.reveal');

        reveals.forEach((element) => {
            gsap.fromTo(element,
                {
                    opacity: 0,
                    y: 60
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });

        // Reveal from left
        const revealsLeft = document.querySelectorAll('.reveal-left');
        revealsLeft.forEach((element) => {
            gsap.fromTo(element,
                { opacity: 0, x: -60 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });

        // Reveal from right
        const revealsRight = document.querySelectorAll('.reveal-right');
        revealsRight.forEach((element) => {
            gsap.fromTo(element,
                { opacity: 0, x: 60 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });

        // Scale reveal
        const revealsScale = document.querySelectorAll('.reveal-scale');
        revealsScale.forEach((element) => {
            gsap.fromTo(element,
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });
    }

    setupStaggerAnimations() {
        const staggerContainers = document.querySelectorAll('.stagger-container');

        staggerContainers.forEach((container) => {
            const children = container.children;

            gsap.fromTo(children,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: container,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });
    }

    setupParallax() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');

        parallaxElements.forEach((element) => {
            const speed = parseFloat(element.dataset.parallax) || 0.5;

            gsap.to(element, {
                yPercent: -50 * speed,
                ease: 'none',
                scrollTrigger: {
                    trigger: element.parentElement || element,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });
        });
    }

    setupSectionTransitions() {
        // Animate section headings
        const sectionHeadings = document.querySelectorAll('h2');

        sectionHeadings.forEach((heading) => {
            gsap.fromTo(heading,
                {
                    opacity: 0,
                    y: 40,
                    clipPath: 'inset(100% 0 0 0)'
                },
                {
                    opacity: 1,
                    y: 0,
                    clipPath: 'inset(0% 0 0 0)',
                    duration: 1.2,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: heading,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });

        // Timeline steps animation
        const timelineSteps = document.querySelectorAll('[class*="grid-cols"] > div');

        timelineSteps.forEach((step, index) => {
            gsap.fromTo(step,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: step,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });
    }

    // Counter animation for stats
    animateCounter(element, target, duration = 2) {
        const obj = { value: 0 };

        gsap.to(obj, {
            value: target,
            duration: duration,
            ease: 'power2.out',
            onUpdate: () => {
                element.textContent = Math.round(obj.value);
            },
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    }

    refresh() {
        ScrollTrigger.refresh();
    }

    destroy() {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
}

export default ScrollAnimations;
