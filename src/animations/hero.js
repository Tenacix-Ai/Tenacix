/**
 * Hero Section Enhancements
 * Particle system, gradient effects, and entrance animations
 */
import gsap from 'gsap';

export class HeroEffects {
    constructor() {
        this.particles = [];
        this.particleContainer = null;
        this.animationFrame = null;
    }

    init() {
        this.createParticles();
        this.animateHeroEntrance();
        this.setupFloatingElements();
    }

    createParticles() {
        const hero = document.querySelector('section');
        if (!hero) return;

        // Create container
        this.particleContainer = document.createElement('div');
        this.particleContainer.className = 'particles-container';
        hero.prepend(this.particleContainer);

        // Create particles
        const particleCount = 30;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            // Random properties
            const size = Math.random() * 4 + 2;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const opacity = Math.random() * 0.4 + 0.1;
            const duration = Math.random() * 20 + 15;
            const delay = Math.random() * -20;

            particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}%;
        top: ${y}%;
        opacity: ${opacity};
      `;

            this.particleContainer.appendChild(particle);

            // Animate particle
            gsap.to(particle, {
                y: '-=100',
                x: `+=${Math.random() * 50 - 25}`,
                duration: duration,
                repeat: -1,
                delay: delay,
                ease: 'none',
                modifiers: {
                    y: gsap.utils.unitize(y => parseFloat(y) % window.innerHeight)
                }
            });

            // Subtle pulse
            gsap.to(particle, {
                opacity: opacity * 0.5,
                duration: Math.random() * 2 + 1,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut'
            });

            this.particles.push(particle);
        }
    }

    animateHeroEntrance() {
        const hero = document.querySelector('section');
        if (!hero) return;

        // Get hero elements
        const badge = hero.querySelector('.inline-flex');
        const title = hero.querySelector('h1');
        const description = hero.querySelector('p');
        const ctas = hero.querySelectorAll('.flex a, .flex button');
        const ticker = hero.querySelector('.overflow-hidden.bg-white\\/50');

        const tl = gsap.timeline({ delay: 0.3 });

        // Badge animation
        if (badge) {
            tl.fromTo(badge,
                { opacity: 0, y: 20, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out' }
            );
        }

        // Title animation
        if (title) {
            tl.fromTo(title,
                { opacity: 0, y: 60, clipPath: 'inset(100% 0 0 0)' },
                {
                    opacity: 1,
                    y: 0,
                    clipPath: 'inset(0% 0 0 0)',
                    duration: 1.2,
                    ease: 'power4.out'
                },
                '-=0.4'
            );
        }

        // Description
        if (description) {
            tl.fromTo(description,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
                '-=0.6'
            );
        }

        // CTAs
        if (ctas.length > 0) {
            tl.fromTo(ctas,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power3.out'
                },
                '-=0.4'
            );
        }

        // Ticker
        if (ticker) {
            tl.fromTo(ticker,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
                '-=0.2'
            );
        }
    }

    setupFloatingElements() {
        // Add subtle floating animation to decorative elements
        const floatingElements = document.querySelectorAll('[data-float]');

        floatingElements.forEach((element, index) => {
            const duration = 3 + Math.random() * 2;
            const delay = index * 0.2;

            gsap.to(element, {
                y: '-=15',
                duration: duration,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
                delay: delay
            });
        });

        // Floating effect for the brand logo
        const brandLogo = document.querySelector('header a .w-3');
        if (brandLogo) {
            gsap.to(brandLogo, {
                rotation: 360,
                duration: 20,
                repeat: -1,
                ease: 'none'
            });
        }
    }

    // Create gradient mesh effect
    createGradientMesh(container) {
        const mesh = document.createElement('div');
        mesh.className = 'gradient-mesh';
        mesh.style.cssText = `
      position: absolute;
      inset: 0;
      background: var(--gradient-mesh);
      opacity: 0.5;
      pointer-events: none;
      z-index: -1;
    `;

        container.prepend(mesh);

        // Animate mesh
        gsap.to(mesh, {
            backgroundPosition: '100% 100%',
            duration: 20,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }

    destroy() {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }

        if (this.particleContainer) {
            this.particleContainer.remove();
        }

        this.particles = [];
    }
}

export default HeroEffects;
