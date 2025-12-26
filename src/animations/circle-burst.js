/**
 * Circle Burst - A central circle explodes into reactive particles
 * Small black circles that react to cursor movement
 */

export class CircleBurst {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        this.center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        this.animationId = null;
        this.hasBurst = false;
        this.initialCircleRadius = 80;
        this.burstProgress = 0;
    }

    init() {
        this.createCanvas();
        this.bindEvents();
        this.startBurstSequence();
    }

    createCanvas() {
        // Remove old backgrounds
        const existingContainer = document.querySelector('.aura-background-component');
        const oldCanvas = document.getElementById('gravity-field');
        const oldAurora = document.getElementById('aurora-bg');
        if (oldCanvas) oldCanvas.remove();
        if (oldAurora) oldAurora.remove();

        this.canvas = document.createElement('canvas');
        this.canvas.id = 'circle-burst';
        this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            pointer-events: none;
            background: #ffffff;
        `;

        if (existingContainer) {
            existingContainer.innerHTML = '';
            existingContainer.appendChild(this.canvas);
        } else {
            document.body.prepend(this.canvas);
        }

        this.ctx = this.canvas.getContext('2d');
        this.resize();
    }

    createParticles() {
        const count = 120;
        this.particles = [];

        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.3;
            const speed = 8 + Math.random() * 12;
            const size = 4 + Math.random() * 10;

            this.particles.push({
                x: this.center.x,
                y: this.center.y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                baseX: 0, // Will be set after explosion
                baseY: 0,
                size: size,
                originalSize: size,
                settled: false,
                friction: 0.96 + Math.random() * 0.02
            });
        }
    }

    bindEvents() {
        window.addEventListener('resize', () => this.resize());

        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.center = { x: this.canvas.width / 2, y: this.canvas.height / 2 };
    }

    startBurstSequence() {
        // Phase 1: Draw initial circle, then burst
        this.burstProgress = 0;
        this.hasBurst = false;
        this.animateInitialCircle();
    }

    animateInitialCircle() {
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw pulsing circle
        this.burstProgress += 0.03;
        const pulse = 1 + Math.sin(this.burstProgress * 5) * 0.1;
        const radius = this.initialCircleRadius * pulse;

        // Circle with subtle shadow
        this.ctx.beginPath();
        this.ctx.arc(this.center.x, this.center.y, radius, 0, Math.PI * 2);
        this.ctx.fillStyle = '#111111';
        this.ctx.fill();

        // Glow effect
        this.ctx.beginPath();
        this.ctx.arc(this.center.x, this.center.y, radius + 20, 0, Math.PI * 2);
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fill();

        if (this.burstProgress < 1.5) {
            this.animationId = requestAnimationFrame(() => this.animateInitialCircle());
        } else {
            // BURST!
            this.createParticles();
            this.hasBurst = true;
            this.animate();
        }
    }

    animate() {
        // Semi-transparent clear for subtle trails
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach((p) => {
            // Mouse repulsion
            const dx = p.x - this.mouse.x;
            const dy = p.y - this.mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const repelRadius = 150;

            if (dist < repelRadius && dist > 0) {
                const force = (repelRadius - dist) / repelRadius;
                const repelX = (dx / dist) * force * 8;
                const repelY = (dy / dist) * force * 8;
                p.vx += repelX;
                p.vy += repelY;

                // Increase size when near cursor
                p.size = p.originalSize * (1 + force * 0.5);
            } else {
                p.size = p.originalSize;
            }

            // If settled, gently return to base position
            if (p.settled) {
                const returnForce = 0.02;
                p.vx += (p.baseX - p.x) * returnForce;
                p.vy += (p.baseY - p.y) * returnForce;
            }

            // Apply velocity with friction
            p.x += p.vx;
            p.y += p.vy;
            p.vx *= p.friction;
            p.vy *= p.friction;

            // Check if particle has settled (low velocity)
            const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
            if (!p.settled && speed < 0.5) {
                p.settled = true;
                p.baseX = p.x;
                p.baseY = p.y;
            }

            // Keep particles on screen
            if (p.x < p.size) { p.x = p.size; p.vx *= -0.5; }
            if (p.x > this.canvas.width - p.size) { p.x = this.canvas.width - p.size; p.vx *= -0.5; }
            if (p.y < p.size) { p.y = p.size; p.vy *= -0.5; }
            if (p.y > this.canvas.height - p.size) { p.y = this.canvas.height - p.size; p.vy *= -0.5; }

            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = '#111111';
            this.ctx.fill();
        });

        this.animationId = requestAnimationFrame(() => this.animate());
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

export default CircleBurst;
