/**
 * VRTX Website - Main Entry Point
 * Enhanced with GSAP, Lenis, and premium animations
 */

// Import styles
import './styles/main.css';

// Import GSAP and plugins
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import Lenis for smooth scroll
import Lenis from 'lenis';

// Import animation modules
import { Preloader } from './animations/preloader.js';
import { ScrollAnimations } from './animations/scroll-animations.js';
import { TextEffects } from './animations/text-effects.js';
import { Interactions } from './animations/interactions.js';
import { HeroEffects } from './animations/hero.js';
import { LiquidMergeBurst } from './animations/liquid-burst.js';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

class VRTXApp {
    constructor() {
        this.lenis = null;
        this.preloader = null;
        this.scrollAnimations = null;
        this.textEffects = null;
        this.interactions = null;
        this.heroEffects = null;
        this.liquidBurst = null;
    }

    async init() {
        // Start with preloader
        this.preloader = new Preloader();
        await this.preloader.init();

        // Initialize smooth scroll
        this.initSmoothScroll();

        // Initialize all animation modules
        this.initAnimations();

        // Initialize Lucide icons if present
        this.initIcons();

        console.log('🚀 VRTX Website initialized');
    }

    initSmoothScroll() {
        this.lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        // Connect Lenis to GSAP ScrollTrigger
        this.lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            this.lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        // Handle anchor links
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    this.lenis.scrollTo(target, {
                        offset: -80, // Account for fixed header
                        duration: 1.5,
                    });
                }
            });
        });
    }

    initAnimations() {
        // Liquid merge burst background animation
        this.liquidBurst = new LiquidMergeBurst();
        this.liquidBurst.init();

        // Hero effects (particles, entrance)
        this.heroEffects = new HeroEffects();
        this.heroEffects.init();

        // Scroll-triggered animations
        this.scrollAnimations = new ScrollAnimations();
        this.scrollAnimations.init();

        // Text effects (split, scramble)
        this.textEffects = new TextEffects();
        this.textEffects.init();

        // Interactive elements (cursor, magnetic, tilt)
        this.interactions = new Interactions();
        this.interactions.init();

        // Add reveal classes to elements that should animate
        this.setupRevealElements();

        // Refresh ScrollTrigger after setup
        ScrollTrigger.refresh();
    }

    setupRevealElements() {
        // Add reveal animations to key sections
        const sections = document.querySelectorAll('section');

        sections.forEach((section) => {
            // Add reveal to section headings
            const headings = section.querySelectorAll('h2, h3');
            headings.forEach((heading) => {
                if (!heading.classList.contains('reveal') &&
                    !heading.hasAttribute('data-split')) {
                    heading.classList.add('reveal');
                }
            });

            // Add reveal to paragraphs
            const paragraphs = section.querySelectorAll('p');
            paragraphs.forEach((p) => {
                if (!p.classList.contains('reveal')) {
                    p.classList.add('reveal');
                }
            });
        });

        // Add stagger to card containers
        const cardContainer = document.querySelector('.card-container');
        if (cardContainer) {
            cardContainer.classList.add('stagger-container');
        }

        // Add tilt to service cards
        const serviceCards = document.querySelectorAll('.card-box');
        serviceCards.forEach((card) => {
            card.setAttribute('data-tilt', '8');
        });

        // Add magnetic effect to CTA buttons
        const ctaButtons = document.querySelectorAll('[href="#contact"].bg-gray-900');
        ctaButtons.forEach((btn) => {
            btn.classList.add('magnetic-btn', 'ripple-btn');
            btn.setAttribute('data-magnetic', '0.2');
        });

        // Add data-scramble to key headings
        const heroTitle = document.querySelector('h1');
        if (heroTitle) {
            heroTitle.setAttribute('data-text', heroTitle.textContent);
        }
    }

    initIcons() {
        // Check if Lucide is available (loaded from CDN in HTML)
        if (typeof lucide !== 'undefined') {
            lucide.createIcons({
                attrs: {
                    class: 'lucide',
                    'stroke-width': 1.5,
                },
            });
        }
    }

    destroy() {
        if (this.lenis) {
            this.lenis.destroy();
        }
        if (this.scrollAnimations) {
            this.scrollAnimations.destroy();
        }
        if (this.heroEffects) {
            this.heroEffects.destroy();
        }
        if (this.textEffects) {
            this.textEffects.revert();
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new VRTXApp();
    app.init();
});

// Export for debugging
window.VRTXApp = VRTXApp;
