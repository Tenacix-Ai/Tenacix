/**
 * Text Effects Module
 * Split text animations, scramble effects, and typewriter
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export class TextEffects {
    constructor() {
        this.splitInstances = [];
    }

    init() {
        this.setupSplitText();
        this.setupScrambleText();
        this.setupTypewriter();
        this.setupGradientReveal();
    }

    setupSplitText() {
        const splitElements = document.querySelectorAll('[data-split]');

        splitElements.forEach((element) => {
            const splitType = element.dataset.split || 'chars';
            const split = new SplitType(element, { types: splitType });
            this.splitInstances.push(split);

            const targets = splitType === 'chars' ? split.chars :
                splitType === 'words' ? split.words :
                    split.lines;

            gsap.fromTo(targets,
                {
                    opacity: 0,
                    y: splitType === 'chars' ? 50 : 30,
                    rotateX: splitType === 'chars' ? -90 : 0
                },
                {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    duration: splitType === 'chars' ? 0.6 : 0.8,
                    stagger: splitType === 'chars' ? 0.02 : 0.05,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });
    }

    setupScrambleText() {
        const scrambleElements = document.querySelectorAll('[data-scramble]');

        scrambleElements.forEach((element) => {
            const originalText = element.textContent;
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
            let isAnimating = false;

            const scramble = () => {
                if (isAnimating) return;
                isAnimating = true;

                let iteration = 0;
                const interval = setInterval(() => {
                    element.textContent = originalText
                        .split('')
                        .map((char, index) => {
                            if (index < iteration) {
                                return originalText[index];
                            }
                            if (char === ' ') return ' ';
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join('');

                    if (iteration >= originalText.length) {
                        clearInterval(interval);
                        isAnimating = false;
                    }

                    iteration += 1 / 3;
                }, 30);
            };

            // Trigger on scroll
            ScrollTrigger.create({
                trigger: element,
                start: 'top 80%',
                onEnter: scramble,
                once: true
            });

            // Also on hover
            element.addEventListener('mouseenter', scramble);
        });
    }

    setupTypewriter() {
        const typewriterElements = document.querySelectorAll('[data-typewriter]');

        typewriterElements.forEach((element) => {
            const text = element.textContent;
            const speed = parseInt(element.dataset.typewriter) || 50;
            element.textContent = '';
            element.style.visibility = 'visible';

            let charIndex = 0;

            const type = () => {
                if (charIndex < text.length) {
                    element.textContent += text.charAt(charIndex);
                    charIndex++;
                    setTimeout(type, speed);
                }
            };

            ScrollTrigger.create({
                trigger: element,
                start: 'top 80%',
                onEnter: type,
                once: true
            });
        });
    }

    setupGradientReveal() {
        const gradientTexts = document.querySelectorAll('.gradient-text-reveal');

        gradientTexts.forEach((element) => {
            gsap.fromTo(element,
                {
                    backgroundPosition: '200% center'
                },
                {
                    backgroundPosition: '0% center',
                    duration: 1.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });
    }

    // Animate hero title on load
    animateHeroTitle(element) {
        const split = new SplitType(element, { types: 'chars' });
        this.splitInstances.push(split);

        gsap.fromTo(split.chars,
            {
                opacity: 0,
                y: 100,
                rotateX: -90,
                transformOrigin: '50% 50% -50px'
            },
            {
                opacity: 1,
                y: 0,
                rotateX: 0,
                duration: 1,
                stagger: 0.03,
                ease: 'power4.out',
                delay: 0.2
            }
        );
    }

    revert() {
        this.splitInstances.forEach(instance => instance.revert());
        this.splitInstances = [];
    }
}

export default TextEffects;
