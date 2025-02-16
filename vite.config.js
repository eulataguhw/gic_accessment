/// <reference types="vitest/config" />
import { defineConfig } from 'vite'

export default defineConfig({
    setupFilesAfterEnv: ['src/setupTest.js'],
    test: {
        globals: true,
        environment: "jsdom",
        exclude: ['**/node_modules/**', '**/e2e/**'],
        setupFiles: 'src/setupTests.js',
        // ... Specify options here.
    },

})