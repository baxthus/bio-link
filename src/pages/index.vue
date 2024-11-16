<script setup lang="ts">
import { IconBrandDiscord, IconBrandGithub, IconBrandLastfm, IconBrandSteam, IconBrandX, IconMail, IconMapPin, type Icon } from '@tabler/icons-vue';
import type { LanyardData } from '~/types/lanyard';

const data = ref<LanyardData>();

onMounted(() => {
    useLanyard({
        userId: '505432621086670872',
        socket: true,
        onPresenceUpdate: presence => data.value = presence as LanyardData,
    });
});

const description = ref(`
BREATHE SMOKE WHERE THE AIR IS FRESH
Full-Stack Developer (in my dreams)
`);

const links = ref<Array<{ title: string; content: string; icon: Icon; copy?: boolean }>>([
    { title: 'Email', content: 'mailto:baxthus@duck.com', icon: IconMail, copy: true },
    { title: 'X', content: 'https://x.com/baxthus', icon: IconBrandX },
    { title: 'Github', content: 'https://github.com/baxthus', icon: IconBrandGithub },
    { title: 'Steam', content: 'https://steamcommunity.com/id/baxthus', icon: IconBrandSteam },
    { title: 'Discord', content: 'https://discord.com/users/505432621086670872', icon: IconBrandDiscord },
    { title: 'Last.fm', content: 'https://www.last.fm/user/baxthus', icon: IconBrandLastfm },
]);

function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard :)');
}

const location = computed(() => data.value?.kv?.location ?? 'Earth');
const locationUrl = computed(() => new URL(`https://www.google.com/maps/search/?api=1&query=${location.value}`).href);
</script>

<template>
    <div class="flex flex-col items-center bg-mantle rounded-lg p-6 gap-4 max-w-full">
        <div class="relative">
            <img src="/avatar.jpg" alt="Avatar" class="rounded-full size-32">
            <div
                v-if="data?.discord_status && data?.discord_status !== 'offline'"
                class="absolute bottom-0 right-0 text-white text-xs font-bold rounded-full px-2 py-1 border-4 border-mantle"
                :class="{
                    'bg-green-500': data?.discord_status === 'online',
                    'bg-yellow-500': data?.discord_status === 'idle',
                    'bg-red-500': data?.discord_status === 'dnd',
                }"
            >
                {{ data?.discord_status ?? 'offline' }}
            </div>
        </div>
        <h1 class="font-bold text-3xl">
            バクサス
        </h1>
        <a :href="locationUrl" target="_blank" rel="noopener noreferrer nofollow" class="flex flex-row gap-x-1 items-center bg-surface0 text-sm rounded-full py-1 px-2 hover:bg-crust transition-colors">
            <IconMapPin class="w-5 h-auto" /> {{ location }}
        </a>
        <div class="w-full ring-0 block">
            <p class="break-words whitespace-pre-line text-center">
                {{ description.trim() }}
            </p>
        </div>
        <div class="flex flex-row flex-wrap items-center justify-center">
            <component
                :is="link.copy ? 'button' : 'a'"
                v-for="link in links"
                :key="link.title"
                :href="link.copy ? undefined : link.content"
                target="_blank"
                rel="noopener noreferrer nofollow"
                :title="link.title"
                class="p-1.5 border-white border-opacity-10 bg-opacity-10 cursor-pointer flex items-center justify-center transition-colors rounded-full hover:bg-surface0"
                @click="link.copy ? copyToClipboard(link.content) : undefined"
            >
                <component :is="link.icon" class="w-8 h-auto" />
            </component>
        </div>
        <Spotify v-if="data?.spotify" :data />
        <Activities :data />
    </div>
</template>
