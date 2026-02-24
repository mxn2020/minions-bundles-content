import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    base: '/',
    optimizeDeps: {
        include: ['@mxn2020/minions-bundles-content-core'],
    },
    build: {
        commonjsOptions: {
            include: [/content/, /node_modules/],
        },
    },
});
