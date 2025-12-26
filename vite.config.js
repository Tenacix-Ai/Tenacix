import { defineConfig } from 'vite';

export default defineConfig({
    root: './',
    base: './',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        },
        rollupOptions: {
            output: {
                manualChunks: {
                    gsap: ['gsap'],
                    vendor: ['lenis', 'split-type']
                }
            }
        }
    },
    server: {
        port: 3000,
        open: true
    }
});
