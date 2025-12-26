/**
 * Liquid Merge Burst - Refined Premium Animation
 * 1. Central circle with orbiting liquid circles
 * 2. Orbiting circles merge into center
 * 3. Center explodes into small dots
 * 4. Dots react to cursor with liquid wave motion
 */

export class LiquidMergeBurst {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.orbiters = [];
        this.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        this.center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        this.animationId = null;
        this.phase = 'orbit'; // 'orbit', 'merge', 'burst', 'reactive'
        this.time = 0;
        this.centerRadius = 60;
        this.maxCenterRadius = 100;
        this.isDarkMode = document.documentElement.classList.contains('dark');
    }

    getColor() {
        return this.isDarkMode ? '#a855f7' : '#6b21a8';
    }

    init() {
        this.createCanvas();
        this.createOrbiters();
        this.bindEvents();
        this.lastTime = 0;
        requestAnimationFrame((t) => this.animate(t));
    }

    createCanvas() {
        // Remove old backgrounds
        const existingContainer = document.querySelector('.aura-background-component');
        const oldElements = document.querySelectorAll('#gravity-field, #aurora-bg, #circle-burst, #liquid-burst');
        oldElements.forEach(el => el.remove());

        this.canvas = document.createElement('canvas');
        this.canvas.id = 'liquid-burst';
        this.canvas.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            z-index: 0;
            pointer-events: none;
            background: transparent;
        `;

        // Find hero section and add canvas there
        const heroSection = document.querySelector('.hero-section') || document.querySelector('#hero') || document.querySelector('section');
        if (heroSection) {
            heroSection.style.position = 'relative';
            heroSection.insertBefore(this.canvas, heroSection.firstChild);
        } else if (existingContainer) {
            existingContainer.innerHTML = '';
            existingContainer.appendChild(this.canvas);
        } else {
            document.body.prepend(this.canvas);
        }

        this.ctx = this.canvas.getContext('2d');
        this.resize();
    }

    createOrbiters() {
        const count = 10;
        this.orbiters = [];

        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 * i) / count;
            this.orbiters.push({
                angle: angle,
                distance: 140 + Math.random() * 40,
                size: 10 + Math.random() * 8,
                speed: 0.015 + Math.random() * 0.01,
                phase: Math.random() * Math.PI * 2
            });
        }
    }

    createParticles() {
        const count = 250; // Optimized count for 60fps
        this.particles = [];

        const width = this.canvas.width;
        const height = this.canvas.height;
        const centerX = width / 2;
        const centerY = height / 2;
        const minDistFromCenter = 320; // Large clear zone for hero content

        for (let i = 0; i < count; i++) {
            let tx, ty, dist;

            // Random distribution - NEVER target inside the clear zone
            do {
                tx = Math.random() * width;
                ty = Math.random() * height;
                dist = Math.sqrt((tx - centerX) ** 2 + (ty - centerY) ** 2);
            } while (dist < minDistFromCenter);

            const dx = tx - centerX;
            const dy = ty - centerY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx);

            this.particles.push({
                x: centerX,
                y: centerY,
                targetX: tx,
                targetY: ty,
                progress: 0, // Animation progress 0-1
                size: 2 + Math.random() * 2,
                originalSize: 2 + Math.random() * 2,
                wobble: Math.random() * Math.PI * 2,
                wobbleSpeed: 0.02 + Math.random() * 0.03,
                delay: Math.random() * 0.3 // Staggered start
            });
        }
    }

    bindEvents() {
        window.addEventListener('resize', () => this.resize());
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        // Watch for theme changes
        const observer = new MutationObserver(() => {
            this.isDarkMode = document.documentElement.classList.contains('dark');
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.center = { x: this.canvas.width / 2, y: this.canvas.height / 2 };
    }

    animate(timestamp) {
        // Delta time for consistent 60fps animation
        if (!this.lastTime) this.lastTime = timestamp;
        const deltaTime = (timestamp - this.lastTime) / 1000;
        this.lastTime = timestamp;
        this.time += deltaTime;

        // Clear canvas - transparent for dark hero background
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        switch (this.phase) {
            case 'orbit':
                this.drawOrbitPhase();
                break;
            case 'merge':
                this.drawMergePhase();
                break;
            case 'burst':
                this.drawBurstPhase();
                break;
            case 'reactive':
                this.drawReactivePhase();
                break;
        }

        this.animationId = requestAnimationFrame((t) => this.animate(t));
    }

    drawOrbitPhase() {
        // No center circle - only orbiting liquid circles that will merge

        // Draw orbiting circles coming together
        this.orbiters.forEach((orb) => {
            orb.angle += orb.speed;

            // Liquid wobble effect
            const wobble = Math.sin(this.time * 3 + orb.phase) * 15;
            const dist = orb.distance + wobble;

            const x = this.center.x + Math.cos(orb.angle) * dist;
            const y = this.center.y + Math.sin(orb.angle) * dist;

            // Liquid size variation
            const sizeWobble = 1 + Math.sin(this.time * 4 + orb.phase) * 0.2;

            this.ctx.beginPath();
            this.ctx.arc(x, y, orb.size * sizeWobble, 0, Math.PI * 2);
            this.ctx.fillStyle = this.getColor();
            this.ctx.fill();
        });

        // Transition to merge after 1.5 seconds (faster)
        if (this.time > 1.5) {
            this.phase = 'merge';
            this.time = 0;
        }
    }

    drawMergePhase() {
        // Small circles merge to form one big circle
        const progress = Math.min(this.time / 1, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        // Center circle grows as orbiters merge into it
        const mergedRadius = easeProgress * 80; // Grows from 0 to 80

        // Only show center circle once orbiters start merging
        if (easeProgress > 0.3) {
            // Glow effect
            const gradient = this.ctx.createRadialGradient(
                this.center.x, this.center.y, mergedRadius * 0.5,
                this.center.x, this.center.y, mergedRadius * 2
            );
            gradient.addColorStop(0, `rgba(168, 85, 247, ${easeProgress * 0.2})`);
            gradient.addColorStop(1, 'rgba(168, 85, 247, 0)');
            this.ctx.beginPath();
            this.ctx.arc(this.center.x, this.center.y, mergedRadius * 2, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();

            // Main merged circle
            this.ctx.beginPath();
            this.ctx.arc(this.center.x, this.center.y, mergedRadius, 0, Math.PI * 2);
            this.ctx.fillStyle = this.getColor();
            this.ctx.fill();
        }

        // Orbiters spiral inward and shrink
        this.orbiters.forEach((orb) => {
            orb.angle += orb.speed * (1 + easeProgress * 4);
            orb.distance *= 0.92; // Faster spiral inward

            const x = this.center.x + Math.cos(orb.angle) * orb.distance;
            const y = this.center.y + Math.sin(orb.angle) * orb.distance;
            const size = orb.size * (1 - easeProgress);

            if (size > 1 && orb.distance > 5) {
                this.ctx.beginPath();
                this.ctx.arc(x, y, size, 0, Math.PI * 2);
                this.ctx.fillStyle = this.getColor();
                this.ctx.fill();
            }
        });

        // Update center radius for burst phase
        this.centerRadius = mergedRadius;

        // Transition to burst (faster)
        if (this.time > 1) {
            this.phase = 'burst';
            this.time = 0;
            this.createParticles();
        }
    }

    drawBurstPhase() {
        const burstDuration = 1.0; // Faster burst
        const phaseProgress = Math.min(this.time / burstDuration, 1);

        // Shrinking center circle
        if (phaseProgress < 0.3) {
            const shrinkProgress = phaseProgress / 0.3;
            const shrinkRadius = this.maxCenterRadius * (1 - shrinkProgress);
            this.ctx.beginPath();
            this.ctx.arc(this.center.x, this.center.y, shrinkRadius, 0, Math.PI * 2);
            this.ctx.fillStyle = this.getColor();
            this.ctx.fill();
        }

        // Animate particles with smooth easing
        this.particles.forEach((p) => {
            // Calculate individual progress with delay
            const adjustedTime = Math.max(0, this.time - p.delay);
            p.progress = Math.min(adjustedTime / (burstDuration - 0.3), 1);

            // Smooth cubic ease-out
            const ease = 1 - Math.pow(1 - p.progress, 3);

            // Interpolate position from center to target
            p.x = this.center.x + (p.targetX - this.center.x) * ease;
            p.y = this.center.y + (p.targetY - this.center.y) * ease;

            // Draw simple dot
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = this.getColor();
            this.ctx.fill();
        });

        // Transition to reactive (faster)
        if (this.time > 1.0) {
            this.phase = 'reactive';
            // Initialize velocity for reactive phase
            this.particles.forEach(p => {
                p.vx = 0;
                p.vy = 0;
                // Ensure particles are at their final positions
                p.x = p.targetX;
                p.y = p.targetY;
            });
        }
    }

    drawReactivePhase() {
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        const clearRadius = 320; // Large clear zone for hero content

        this.particles.forEach((p) => {
            // Liquid wobble/drift
            p.wobble += p.wobbleSpeed;
            const driftX = Math.sin(p.wobble + p.targetX * 0.005) * 0.4;
            const driftY = Math.cos(p.wobble + p.targetY * 0.005) * 0.4;

            // Mouse interaction - cursor creates ripples
            const dx = p.x - this.mouse.x;
            const dy = p.y - this.mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const waveRadius = 120;

            if (dist < waveRadius && dist > 0) {
                const force = Math.pow((waveRadius - dist) / waveRadius, 1.5) * 1.5;
                p.vx += (dx / dist) * force;
                p.vy += (dy / dist) * force;
            }

            // Smooth center repulsion - keep dots away from hero content
            const cdx = p.x - centerX;
            const cdy = p.y - centerY;
            const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

            if (cdist < clearRadius && cdist > 0) {
                const repelForce = Math.pow((clearRadius - cdist) / clearRadius, 2) * 1.2;
                p.vx += (cdx / cdist) * repelForce;
                p.vy += (cdy / cdist) * repelForce;
            }

            // Return to target position
            p.vx += (p.targetX - p.x) * 0.015;
            p.vy += (p.targetY - p.y) * 0.015;

            // Apply velocity with drift and damping
            p.x += p.vx + driftX;
            p.y += p.vy + driftY;
            p.vx *= 0.92;
            p.vy *= 0.92;

            // Keep on screen
            p.x = Math.max(p.size, Math.min(this.canvas.width - p.size, p.x));
            p.y = Math.max(p.size, Math.min(this.canvas.height - p.size, p.y));

            // Draw simple circle (optimized for 60fps)
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = this.getColor();
            this.ctx.fill();
        });
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
    }
}

export default LiquidMergeBurst;
