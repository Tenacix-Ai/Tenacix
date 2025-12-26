/**
 * Aurora Background - Minimal, Premium Animated Gradient
 * Soft, flowing color blobs that move subtly
 * Clean, minimal, impressive
 */

export class AuroraBackground {
    constructor() {
        this.container = null;
        this.blobs = [];
        this.animationId = null;
        this.time = 0;
    }

    init() {
        this.createBackground();
        this.animate();
    }

    createBackground() {
        // Find or create container
        const existingContainer = document.querySelector('.aura-background-component');

        // Remove old canvas if exists
        const oldCanvas = document.getElementById('gravity-field');
        if (oldCanvas) oldCanvas.remove();

        this.container = document.createElement('div');
        this.container.id = 'aurora-bg';
        this.container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            overflow: hidden;
            background: linear-gradient(180deg, #fafafa 0%, #f5f5f7 50%, #ffffff 100%);
        `;

        // Create soft gradient blobs
        const blobConfigs = [
            {
                color: 'rgba(99, 102, 241, 0.15)', // Indigo
                size: 600,
                x: 20,
                y: 20,
                speedX: 0.02,
                speedY: 0.015,
                offsetX: 0,
                offsetY: 0
            },
            {
                color: 'rgba(139, 92, 246, 0.12)', // Purple
                size: 500,
                x: 70,
                y: 60,
                speedX: 0.018,
                speedY: 0.022,
                offsetX: 2,
                offsetY: 1
            },
            {
                color: 'rgba(59, 130, 246, 0.1)', // Blue
                size: 450,
                x: 80,
                y: 15,
                speedX: 0.015,
                speedY: 0.02,
                offsetX: 1,
                offsetY: 3
            },
            {
                color: 'rgba(168, 85, 247, 0.08)', // Violet
                size: 550,
                x: 40,
                y: 70,
                speedX: 0.012,
                speedY: 0.018,
                offsetX: 4,
                offsetY: 2
            }
        ];

        blobConfigs.forEach((config, i) => {
            const blob = document.createElement('div');
            blob.className = 'aurora-blob';
            blob.style.cssText = `
                position: absolute;
                width: ${config.size}px;
                height: ${config.size}px;
                left: ${config.x}%;
                top: ${config.y}%;
                background: radial-gradient(circle, ${config.color} 0%, transparent 70%);
                border-radius: 50%;
                filter: blur(60px);
                transform: translate(-50%, -50%);
                pointer-events: none;
                will-change: transform;
            `;

            this.blobs.push({
                element: blob,
                baseX: config.x,
                baseY: config.y,
                speedX: config.speedX,
                speedY: config.speedY,
                offsetX: config.offsetX,
                offsetY: config.offsetY
            });

            this.container.appendChild(blob);
        });

        if (existingContainer) {
            existingContainer.innerHTML = '';
            existingContainer.appendChild(this.container);
        } else {
            document.body.prepend(this.container);
        }
    }

    animate() {
        this.time += 0.01;

        this.blobs.forEach((blob) => {
            // Gentle sine wave movement
            const moveX = Math.sin(this.time * blob.speedX * 50 + blob.offsetX) * 8;
            const moveY = Math.cos(this.time * blob.speedY * 50 + blob.offsetY) * 6;

            blob.element.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
        });

        this.animationId = requestAnimationFrame(() => this.animate());
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.container && this.container.parentNode) {
            this.container.parentNode.removeChild(this.container);
        }
    }
}

export default AuroraBackground;
