<script setup lang="ts">
import { IconBrandDiscord, IconBrandGithub, IconBrandLastfm, IconBrandSteam, IconBrandX, IconMail, IconMapPin, type Icon } from '@tabler/icons-vue';
import type { LanyardData } from '~/types/lanyard';

const data = ref<LanyardData>();

onMounted(() => {
    useLanyard({
        userId: '505432621086670872',
        socket: true,
        onPresenceUpdate: (presence: LanyardData) => data.value = presence,
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
const openLink = (link: string) => window.open(link, '_blank')?.focus();

const location = ref('São Paulo, Brazil');
const locationUrl = computed(() => new URL(`https://www.google.com/maps/search/?api=1&query=${location.value}`).href);
</script>

<template>
    <div class="flex flex-col items-center bg-mantle rounded-lg p-6 gap-4">
        <div class="relative">
            <img src="/avatar.jpg" alt="Avatar" class="rounded-full size-32 hover:opacity-70">
            <div
                class="absolute bottom-0 right-0 text-white text-xs font-bold rounded-full px-2 py-1 border-4 border-mantle"
                :class="{
                    'bg-green-500': data?.discord_status === 'online',
                    'bg-yellow-500': data?.discord_status === 'idle',
                    'bg-red-500': data?.discord_status === 'dnd',
                    'bg-gray-500': !data?.discord_status,
                }"
            >
                {{ data?.discord_status ?? 'offline' }}
            </div>
        </div>
        <a :href="locationUrl" target="_blank" rel="noopener noreferrer nofollow" class="flex flex-row gap-x-1 items-center bg-surface0 text-sm rounded-full py-2 px-3 hover:bg-crust transition-colors">
            <IconMapPin /> {{ location }}
        </a>
        <h1 class="font-bold text-3xl">
            バクサス
        </h1>
        <div class="w-full ring-0 block">
            <p class="break-words whitespace-pre-line text-center">
                {{ description.trim() }}
            </p>
        </div>
        <div class="flex flex-row flex-wrap items-center justify-center">
            <button
                v-for="link in links"
                :key="link.title"
                :title="link.title"
                class="p-1.5 border-white border-opacity-10 bg-opacity-10 cursor-pointer flex items-center justify-center transition-all rounded-full"
                @click="link.copy ? copyToClipboard(link.content) : openLink(link.content)"
            >
                <component :is="link.icon" class="w-8 h-auto" />
            </button>
        </div>
        <Spotify v-if="data?.spotify" :data />
    </div>
</template>
