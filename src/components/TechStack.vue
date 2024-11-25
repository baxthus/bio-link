<script setup lang="ts">
const stack = ref([
    {
        name: 'Backend',
        items: [
            {
                name: 'C#',
                link: 'https://docs.microsoft.com/en-us/dotnet/csharp',
                icon: await import('@/assets/tech/CSharp.svg'),
            },
            {
                name: 'Go',
                link: 'https://go.dev',
                icon: await import('@/assets/tech/Go.svg'),
            },
            {
                name: 'Node.js',
                link: 'https://nodejs.org',
                icon: await import('@/assets/tech/Nodejs.svg'),
            },
            {
                name: 'Bun',
                link: 'https://bun.sh',
                icon: await import('@/assets/tech/Bun.svg'),
            },
            {
                name: 'Python',
                link: 'https://www.python.org',
                icon: await import('@/assets/tech/Python.svg'),
            },
        ],
    },
    {
        name: 'Frontend',
        items: [
            {
                name: 'Typescript',
                link: 'https://www.typescriptlang.org',
                icon: await import('@/assets/tech/TypeScript.svg'),
            },
            {
                name: 'Vue.js',
                link: 'https://vuejs.org',
                icon: await import('@/assets/tech/Vuejs.svg'),
            },
            {
                name: 'Svelte',
                link: 'https://svelte.dev',
                icon: await import('@/assets/tech/Svelte.svg'),
            },
            {
                name: 'Astro',
                link: 'https://astro.build',
                icon: await import('@/assets/tech/Astro.svg'),
            },
            {
                name: 'Tailwind CSS',
                link: 'https://tailwindcss.com',
                icon: await import('@/assets/tech/TailwindCSS.svg'),
            },
        ],
    },
    {
        name: 'Native',
        items: [
            {
                name: 'Tauri',
                link: 'https://tauri.app',
                icon: await import('@/assets/tech/Tauri.svg'),
            },
        ],
    },
    {
        name: 'Database',
        items: [
            {
                name: 'PostgreSQL',
                link: 'https://www.postgresql.org',
                icon: await import('@/assets/tech/PostgresSQL.svg'),
            },
            {
                name: 'MongoDB',
                link: 'https://www.mongodb.com',
                icon: await import('@/assets/tech/MongoDB.svg'),
            },
        ],
    },
    {
        name: 'Deployment',
        items: [
            {
                name: 'Vercel',
                link: 'https://vercel.com',
                icon: await import('@/assets/tech/Vercel.svg'),
            },
            {
                name: 'Cloudflare',
                link: 'https://www.cloudflare.com',
                icon: await import('@/assets/tech/Cloudflare.svg'),
            },
            {
                name: 'Linux',
                link: 'https://www.kernel.org',
                icon: await import('@/assets/tech/Linux.svg'),
            },
            {
                name: 'Docker',
                link: 'https://www.docker.com',
                icon: await import('@/assets/tech/Docker.svg'),
            },
        ],
    },
]);
</script>

<template>
    <div class="flex flex-col items-center gap-4">
        <span class="font-bold text-2xl">
            Tech Stack
        </span>
        <div v-for="tech in stack" :key="tech.name" class="flex flex-col gap-4 w-full">
            <Chip :label="tech.name" />
            <div class="flex flex-wrap gap-4 px-2">
                <div v-for="item in tech.items" :key="item.name">
                    <a
                        v-tooltip.top="{
                            value: item.name,
                            showDelay: 300,
                        }"
                        :href="item.link"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                    >
                        <img :src="item.icon.default" class="w-16 h-16">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
