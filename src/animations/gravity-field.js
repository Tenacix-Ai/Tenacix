/**
 * Reactive Gravity Field - Interactive Background Animation
 * Particles orbit around an invisible attractor that follows the mouse
 * Features: gravitational physics, orbital mechanics, reactive trails
 */

export class GravityField {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        this.attractor = { x: window.innerWidth / 2, y: window.innerHeight / 2, mass: 800 };
        this.animationId = null;
        this.hue = 0;
    }

    init() {
        this.createCanvas();
        this.createParticles();
        this.bindEvents();
        this.animate();
    }

    createCanvas() {
        // Remove existing Spline iframe if present
        const splineContainer = document.querySelector('.aura-background-component');
        if (splineContainer) {
            splineContainer.innerHTML = '';
        }

        this.canvas = document.createElement('canvas');
        this.canvas.id = 'gravity-field';
        this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            pointer-events: none;
            background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #0a0a15 100%);
        `;

        if (splineContainer) {
            splineContainer.appendChild(this.canvas);
        } else {
            document.body.prepend(this.canvas);
        }

        this.ctx = this.canvas.getContext('2d');
        this.resize();
    }

    createParticles() {
        const count = Math.min(150, Math.floor(window.innerWidth / 12));

        for (let i = 0; i < count; i++) {
            // Create particles in orbital patterns
            const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
            const radius = 100 + Math.random() * 300;

            this.particles.push({
                x: this.attractor.x + Math.cos(angle) * radius,
                y: this.attractor.y + Math.sin(angle) * radius,
                vx: Math.sin(angle) * (2 + Math.random() * 2),
                vy: -Math.cos(angle) * (2 + Math.random() * 2),
                radius: 1 + Math.random() * 3,
                mass: 1 + Math.random() * 2,
                hue: Math.random() * 60 + 200, // Blue to purple range
                trail: [],
                maxTrail: 15 + Math.floor(Math.random() * 20),
                alpha: 0.6 + Math.random() * 0.4
            });
        }
    }

    bindEvents() {
        window.addEventListener('resize', () => this.resize());

        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        document.addEventListener('mouseleave', () => {
            this.mouse.x = window.innerWidth / 2;
            this.mouse.y = window.innerHeight / 2;
        });
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    animate() {
        this.ctx.fillStyle = 'rgba(15, 15, 26, 0.15)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Smoothly move attractor towards mouse
        this.attractor.x += (this.mouse.x - this.attractor.x) * 0.02;
        this.attractor.y += (this.mouse.y - this.attractor.y) * 0.02;

        // Draw attractor glow
        this.drawAttractorGlow();

        // Update and draw particles
        this.particles.forEach((p, i) => {
            this.updateParticle(p, i);
            this.drawParticle(p);
        });

        // Slowly shift hue for color variation
        this.hue = (this.hue + 0.1) % 360;

        this.animationId = requestAnimationFrame(() => this.animate());
    }

    updateParticle(p, index) {
        // Store trail position
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > p.maxTrail) {
            p.trail.shift();
        }

        // Calculate gravitational force
        const dx = this.attractor.x - p.x;
        const dy = this.attractor.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDist = 50;
        const maxDist = 500;

        if (distance > minDist && distance < maxDist) {
            const force = (this.attractor.mass * p.mass) / (distance * distance);
            const ax = (dx / distance) * force * 0.05;
            const ay = (dy / distance) * force * 0.05;

            p.vx += ax;
            p.vy += ay;
        } else if (distance <= minDist) {
            // Repel when too close - creates orbital effect
            const repelForce = (minDist - distance) * 0.1;
            p.vx -= (dx / distance) * repelForce;
            p.vy -= (dy / distance) * repelForce;
        }

        // Apply gentle dampening
        p.vx *= 0.998;
        p.vy *= 0.998;

        // Limit velocity
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const maxSpeed = 8;
        if (speed > maxSpeed) {
            p.vx = (p.vx / speed) * maxSpeed;
            p.vy = (p.vy / speed) * maxSpeed;
        }

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen
        if (p.x < -50) p.x = this.canvas.width + 50;
        if (p.x > this.canvas.width + 50) p.x = -50;
        if (p.y < -50) p.y = this.canvas.height + 50;
        if (p.y > this.canvas.height + 50) p.y = -50;

        // Dynamic hue based on velocity
        p.hue = 200 + (speed / maxSpeed) * 80 + this.hue * 0.1;
    }

    drawParticle(p) {
        // Draw trail
        if (p.trail.length > 1) {
            this.ctx.beginPath();
            this.ctx.moveTo(p.trail[0].x, p.trail[0].y);

            for (let i = 1; i < p.trail.length; i++) {
                const t = p.trail[i];
                this.ctx.lineTo(t.x, t.y);
            }

            const gradient = this.ctx.createLinearGradient(
                p.trail[0].x, p.trail[0].y,
                p.x, p.y
            );
            gradient.addColorStop(0, `hsla(${p.hue}, 80%, 60%, 0)`);
            gradient.addColorStop(1, `hsla(${p.hue}, 80%, 60%, ${p.alpha * 0.5})`);

            this.ctx.strokeStyle = gradient;
            this.ctx.lineWidth = p.radius * 0.8;
            this.ctx.lineCap = 'round';
            this.ctx.stroke();
        }

        // Draw particle
        const gradient = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3);
        gradient.addColorStop(0, `hsla(${p.hue}, 90%, 70%, ${p.alpha})`);
        gradient.addColorStop(0.5, `hsla(${p.hue}, 80%, 50%, ${p.alpha * 0.5})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 70%, 40%, 0)`);

        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
        this.ctx.fillStyle = gradient;
        this.ctx.fill();

        // Core
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = `hsla(${p.hue}, 100%, 80%, ${p.alpha})`;
        this.ctx.fill();
    }

    drawAttractorGlow() {
        // Multiple layers of glow
        const layers = [
            { radius: 200, alpha: 0.03 },
            { radius: 120, alpha: 0.05 },
            { radius: 60, alpha: 0.08 },
            { radius: 20, alpha: 0.15 }
        ];

        layers.forEach(layer => {
            const gradient = this.ctx.createRadialGradient(
                this.attractor.x, this.attractor.y, 0,
                this.attractor.x, this.attractor.y, layer.radius
            );
            gradient.addColorStop(0, `hsla(${220 + this.hue * 0.2}, 80%, 60%, ${layer.alpha})`);
            gradient.addColorStop(0.5, `hsla(${260 + this.hue * 0.2}, 70%, 50%, ${layer.alpha * 0.5})`);
            gradient.addColorStop(1, 'transparent');

            this.ctx.beginPath();
            this.ctx.arc(this.attractor.x, this.attractor.y, layer.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
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

export default GravityField;
