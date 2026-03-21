# Tenacix Website

A premium, high-performance digital agency website featuring cinematic 3D backgrounds, interactive components, and fluid animations.

## 🚀 Tech Stack

### Framework & Language

- **Next.js 15+**: App Router architecture for optimal performance and SEO.
- **TypeScript**: Strict type-checking for a robust codebase.
- **React 19**: Utilizing the latest concurrent features and hooks.

### Graphics & 3D Rendering

- **React Three Fiber / Three.js**: High-performance 3D scene rendering.
- **Drei**: Essential helpers for WebGL scenes.
- **Spline**: Integrated 3D design assets with interactive states.
- **Custom Shaders**: Fluid-blob and lava-lamp effects powered by GLSL.

### UI & Styling

- **Tailwind CSS**: Utility-first styling for rapid, responsive design.
- **Framer Motion**: Complex layout transitions and scroll-driven animations.
- **GSAP**: Precision sequencing for high-fidelity motion.
- **Radix UI**: Accessible, unstyled primitives for headless components.
- **Lucide React**: Clean and consistent iconography.

### Quality Control & Tooling

- **ESLint**: Strict linting rules to ensure code consistency.
- **Prettier**: Automated code formatting.
- **Husky**: Git hooks to prevent poor quality code from being committed.
- **lint-staged**: Targeted linting for changed files only.

## 🛠️ Development

### Prerequisites

- Node.js 20+
- npm or pnpm

### Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Lint and check for errors
npm run lint

# Format codebase
npm run format
```

### Quality Gate

This project uses **Husky** hooks. Every `git commit` will automatically run `eslint --fix` and `prettier --write` on your staged files. If there are unfixable linting errors, the commit will be blocked to maintain the 100% clean baseline.

---

_Updated By Arnav - Dec 2025_
