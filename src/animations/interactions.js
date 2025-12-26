/**
 * Interactions Module
 * Magnetic buttons, enhanced cursor, 3D tilt cards, ripple effects
 */
import gsap from 'gsap';

export class Interactions {
    constructor() {
        this.cursor = {
            bigBall: null,
            smallBall: null
        };
        this.magneticElements = [];
    }

    init() {
        this.setupCursor();
        this.setupMagneticButtons();
        this.setupTiltCards();
        this.setupRippleEffects();
        this.setupHoverEffects();
    }

    setupCursor() {
        // Check for touch device
        if ('ontouchstart' in window) return;

        this.cursor.bigBall = document.querySelector('.cursor__ball--big');
        this.cursor.smallBall = document.querySelector('.cursor__ball--small');

        if (!this.cursor.bigBall || !this.cursor.smallBall) {
            this.createCursor();
        }

        const hoverables = document.querySelectorAll('a, button, .hoverable, .card-box, [data-cursor]');

        // Mouse move
        document.addEventListener('mousemove', (e) => {
            gsap.to(this.cursor.bigBall, {
                duration: 0.4,
                x: e.clientX - 15,
                y: e.clientY - 15,
                opacity: 1,
                ease: 'power2.out'
            });

            gsap.to(this.cursor.smallBall, {
                duration: 0.1,
                x: e.clientX - 5,
                y: e.clientY - 7,
                opacity: 1
            });
        });

        // Hover effects
        hoverables.forEach((el) => {
            el.addEventListener('mouseenter', () => {
                gsap.to(this.cursor.bigBall, {
                    duration: 0.3,
                    scale: 4,
                    opacity: 0.8
                });
            });

            el.addEventListener('mouseleave', () => {
                gsap.to(this.cursor.bigBall, {
                    duration: 0.3,
                    scale: 1,
                    opacity: 1
                });
            });
        });

        // Hide on mouse leave
        document.addEventListener('mouseleave', () => {
            gsap.to([this.cursor.bigBall, this.cursor.smallBall], {
                duration: 0.3,
                opacity: 0
            });
        });

        // Show on mouse enter
        document.addEventListener('mouseenter', () => {
            gsap.to([this.cursor.bigBall, this.cursor.smallBall], {
                duration: 0.3,
                opacity: 1
            });
        });
    }

    createCursor() {
        const cursorWrapper = document.createElement('div');
        cursorWrapper.className = 'cursor';
        cursorWrapper.innerHTML = `
      <div class="cursor__ball cursor__ball--big">
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" stroke-width="0"></circle>
        </svg>
      </div>
      <div class="cursor__ball cursor__ball--small">
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" stroke-width="0"></circle>
        </svg>
      </div>
    `;

        document.body.appendChild(cursorWrapper);
        this.cursor.bigBall = cursorWrapper.querySelector('.cursor__ball--big');
        this.cursor.smallBall = cursorWrapper.querySelector('.cursor__ball--small');
    }

    setupMagneticButtons() {
        const magneticBtns = document.querySelectorAll('.magnetic-btn, [data-magnetic]');

        magneticBtns.forEach((btn) => {
            const strength = parseFloat(btn.dataset.magnetic) || 0.3;

            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(btn, {
                    duration: 0.3,
                    x: x * strength,
                    y: y * strength,
                    ease: 'power2.out'
                });

                const content = btn.querySelector('.magnetic-btn__content');
                if (content) {
                    gsap.to(content, {
                        duration: 0.3,
                        x: x * strength * 0.5,
                        y: y * strength * 0.5,
                        ease: 'power2.out'
                    });
                }
            });

            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    duration: 0.5,
                    x: 0,
                    y: 0,
                    ease: 'elastic.out(1, 0.3)'
                });

                const content = btn.querySelector('.magnetic-btn__content');
                if (content) {
                    gsap.to(content, {
                        duration: 0.5,
                        x: 0,
                        y: 0,
                        ease: 'elastic.out(1, 0.3)'
                    });
                }
            });

            this.magneticElements.push(btn);
        });
    }

    setupTiltCards() {
        const tiltCards = document.querySelectorAll('.tilt-card, .card-box, [data-tilt]');

        tiltCards.forEach((card) => {
            const maxTilt = parseFloat(card.dataset.tilt) || 10;

            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const xPercent = (x / rect.width - 0.5) * 2;
                const yPercent = (y / rect.height - 0.5) * 2;

                gsap.to(card, {
                    duration: 0.3,
                    rotateY: xPercent * maxTilt,
                    rotateX: -yPercent * maxTilt,
                    transformPerspective: 1000,
                    ease: 'power2.out'
                });

                // Move shine effect
                const shine = card.querySelector('.tilt-card__shine');
                if (shine) {
                    gsap.to(shine, {
                        duration: 0.3,
                        x: xPercent * 20,
                        y: yPercent * 20,
                        opacity: 0.3
                    });
                }
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    duration: 0.5,
                    rotateY: 0,
                    rotateX: 0,
                    ease: 'power3.out'
                });

                const shine = card.querySelector('.tilt-card__shine');
                if (shine) {
                    gsap.to(shine, {
                        duration: 0.3,
                        opacity: 0
                    });
                }
            });
        });
    }

    setupRippleEffects() {
        const rippleBtns = document.querySelectorAll('.ripple-btn, [data-ripple]');

        rippleBtns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const rect = btn.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                ripple.style.width = ripple.style.height = `${size}px`;
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;

                btn.appendChild(ripple);

                ripple.addEventListener('animationend', () => {
                    ripple.remove();
                });
            });
        });
    }

    setupHoverEffects() {
        // Service cards hover enhancement
        const serviceCards = document.querySelectorAll('.card-box');

        serviceCards.forEach((card) => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    duration: 0.3,
                    scale: 1.02,
                    ease: 'power2.out'
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    duration: 0.5,
                    scale: 1,
                    ease: 'power3.out'
                });
            });
        });

        // CTA buttons hover
        const ctaButtons = document.querySelectorAll('[href="#contact"]');

        ctaButtons.forEach((btn) => {
            if (btn.classList.contains('bg-gray-900')) {
                btn.addEventListener('mouseenter', () => {
                    gsap.to(btn, {
                        duration: 0.3,
                        scale: 1.05,
                        ease: 'power2.out'
                    });
                });

                btn.addEventListener('mouseleave', () => {
                    gsap.to(btn, {
                        duration: 0.3,
                        scale: 1,
                        ease: 'power2.out'
                    });
                });
            }
        });
    }

    destroy() {
        // Clean up event listeners if needed
        this.magneticElements = [];
    }
}

export default Interactions;
