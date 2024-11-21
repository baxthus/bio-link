import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@nuxt/fonts', '@primevue/nuxt-module'],
    devtools: { enabled: true },
    app: {
        head: {
            title: 'baxthus',
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
                name: 'Inter',
                provider: 'bunny',
                global: true,
            },
        ],
    },

    primevue: {
        options: {
            theme: {
                preset: Aura,
            },
            ripple: true,
        },
    },
});
