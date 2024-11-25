import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@nuxt/fonts', '@primevue/nuxt-module'],
    ssr: false,
    devtools: { enabled: true },
    app: {
        head: {
            title: 'baxthus',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                { name: 'description', content: 'BREATHE SMOKE WHERE THE AIR IS FRESH' },
                { name: 'author', content: 'baxthus' },
                // Open Graph
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://baxt.fun' },
                { property: 'og:title', content: 'baxthus' },
                { property: 'og:description', content: 'BREATHE SMOKE WHERE THE AIR IS FRESH' },
                { property: 'og:image', content: '/favicon.jpg' },
                // Twitter / X
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:site', content: '@baxthus' },
                { name: 'twitter:title', content: 'baxthus' },
                { name: 'twitter:description', content: 'BREATHE SMOKE WHERE THE AIR IS FRESH' },
                { name: 'twitter:image', content: '/favicon.jpg' },
                { name: 'twitter:creator', content: '@baxthus' },
            ],
            link: [{
                rel: 'icon',
                type: 'image/jpeg',
                href: '/favicon.jpg',
            }],
        },
    },
    css: ['~/assets/css/main.css'],
    srcDir: 'src/',
    serverDir: 'src/server/',
    compatibilityDate: '2024-04-03',

    eslint: {
        config: {
            stylistic: {
                semi: true,
                indent: 4,
                quotes: 'single',
            },
        },
    },

    fonts: {
        families: [
            {
                name: 'JetBrains Mono',
                provider: 'google',
                global: true,
            },
        ],
    },

    primevue: {
        options: {
            theme: {
                preset: Aura,
                options: {
                    darkModeSelector: '.app-dark',
                },
            },
            ripple: true,
        },
    },
});
