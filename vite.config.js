const Path = require('path');
const vuePlugin = require('@vitejs/plugin-vue')
import vueJsx from '@vitejs/plugin-vue-jsx'
const { defineConfig } = require('vite');

const config = defineConfig({
    root: Path.join(__dirname, 'src', 'renderer'),
    publicDir: 'public',
    server: {
        port: 8080,
    },
    open: false,
    build: {
        outDir: Path.join(__dirname, 'build', 'renderer'),
        emptyOutDir: true,
    },
    plugins: [
        vuePlugin(),
        vueJsx(),
    ],
});

module.exports = config;
