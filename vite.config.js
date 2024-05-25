import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import basicSsl from '@vitejs/plugin-basic-ssl'

const env = loadEnv('', process.cwd());

const host = env.VITE_HOST;

export default defineConfig({
    plugins: [
        basicSsl(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    server: {
        host,
        hmr: {
            host,
            clientPort: 443
        },
    },
});
