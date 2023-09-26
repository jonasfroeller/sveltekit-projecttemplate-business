import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [sveltekit()],
    server: {
        port: 5000,
        strictPort: false,
    },
    preview: {
        port: 6000,
        strictPort: false,
    },
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
});
