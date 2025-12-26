/**
 * Preloader Animation Module
 * Creates a stunning loading experience with animated logo and progress
 */
import gsap from 'gsap';

export class Preloader {
    constructor() {
        this.preloader = null;
        this.logo = null;
        this.progressBar = null;
        this.counter = null;
        this.progress = 0;
    }

    create() {
        // Create preloader DOM
        this.preloader = document.createElement('div');
        this.preloader.className = 'preloader';
        this.preloader.innerHTML = `
      <div class="preloader__logo">VRTX</div>
      <div class="preloader__progress">
        <div class="preloader__progress-bar"></div>
      </div>
      <div class="preloader__counter">0%</div>
    `;

        document.body.prepend(this.preloader);
        document.body.classList.add('is-loading');

        this.logo = this.preloader.querySelector('.preloader__logo');
        this.progressBar = this.preloader.querySelector('.preloader__progress-bar');
        this.counter = this.preloader.querySelector('.preloader__counter');
    }

    async animate() {
        const tl = gsap.timeline();

        // Animate logo in
        tl.to(this.logo, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out'
        });

        // Simulate loading progress
        await this.simulateProgress();

        return tl;
    }

    simulateProgress() {
        return new Promise((resolve) => {
            const duration = 1.5;
            const startTime = Date.now();

            const updateProgress = () => {
                const elapsed = (Date.now() - startTime) / 1000;
                const progress = Math.min(elapsed / duration, 1);

                // Smooth easing
                const easedProgress = this.easeOutExpo(progress);
                this.progress = Math.round(easedProgress * 100);

                // Update DOM
                this.progressBar.style.width = `${this.progress}%`;
                this.counter.textContent = `${this.progress}%`;

                if (progress < 1) {
                    requestAnimationFrame(updateProgress);
                } else {
                    resolve();
                }
            };

            updateProgress();
        });
    }

    easeOutExpo(x) {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    }

    async hide() {
        const tl = gsap.timeline();

        // Scale logo and fade
        tl.to(this.logo, {
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.in'
        })
            .to([this.progressBar.parentElement, this.counter], {
                opacity: 0,
                duration: 0.3,
                ease: 'power2.in'
            }, '<')
            .to(this.preloader, {
                clipPath: 'inset(0 0 100% 0)',
                duration: 1,
                ease: 'power4.inOut'
            })
            .add(() => {
                document.body.classList.remove('is-loading');
                this.preloader.remove();
            });

        return tl;
    }

    async init() {
        this.create();
        await this.animate();
        await new Promise(resolve => setTimeout(resolve, 300));
        await this.hide();
    }
}

export default Preloader;
