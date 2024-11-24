<script setup lang="ts">
import { IconBrandDiscord, IconBrandGithub, IconBrandLastfm, IconBrandSteam, IconBrandX, IconMail, IconMapPin, type Icon } from '@tabler/icons-vue';
import type { LanyardData } from '~/types/lanyard';

const data = ref<LanyardData>();

const toast = useToast();

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
    { title: 'Email', content: 'dev@baxt.fun', icon: IconMail, copy: true },
    { title: 'X', content: 'https://x.com/baxthus', icon: IconBrandX },
    { title: 'Github', content: 'https://github.com/baxthus', icon: IconBrandGithub },
    { title: 'Steam', content: 'https://steamcommunity.com/id/baxthus', icon: IconBrandSteam },
    { title: 'Discord', content: 'https://discord.com/users/505432621086670872', icon: IconBrandDiscord },
    { title: 'Last.fm', content: 'https://www.last.fm/user/baxthus', icon: IconBrandLastfm },
]);

function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    toast.add({
        summary: 'Copied to clipboard',
        detail: 'It\'s in your clipboard now!',
        severity: 'success',
        life: 2000,
    });
}

const location = computed(() => data.value?.kv?.location ?? 'Earth');
const locationUrl = computed(() => new URL(`https://www.google.com/maps/search/?api=1&query=${location.value}`).href);
</script>

<template>
    <BigBox>
        <div class="relative">
            <img src="/avatar.jpg" alt="Avatar" class="rounded-full size-32">
            <div
                v-if="data?.discord_status && data?.discord_status !== 'offline'"
                class="absolute bottom-0 right-0 text-white text-xs font-bold rounded-full px-2 py-1 border-4 border-neutral-900"
                :class="{
                    'bg-green-500': data?.discord_status === 'online',
                    'bg-yellow-500': data?.discord_status === 'idle',
                    'bg-red-500': data?.discord_status === 'dnd',
                }"
            >
                {{ data?.discord_status ?? 'offline' }}
            </div>
        </div>
        <h1 class="font-bold text-4xl">
            baxthus
        </h1>
        <Button
            as="a"
            :href="locationUrl"
            target="_blank"
            rel="noopener noreferrer nofollow"
            severity="secondary"
            size="small"
            rounded
        >
            <IconMapPin />
            <span class="pt-0.5">{{ location }}</span>
        </Button>
        <div class="w-full ring-0 block">
            <p class="break-words whitespace-pre-line text-center">
                {{ description.trim() }}
            </p>
        </div>
        <div class="flex flex-row flex-wrap items-center justify-center">
            <Button
                v-for="link in links"
                :key="link.title"
                v-tooltip.bottom="{
                    value: link.title,
                    showDelay: 300,
                }"
                :as="link.copy ? 'button' : 'a'"
                :href="link.copy ? undefined : link.content"
                target="_blank"
                rel="noopener noreferrer nofollow"
                severity="contrast"
                variant="text"
                rounded
                @click="link.copy ? copyToClipboard(link.content) : undefined"
            >
                <template #icon>
                    <component :is="link.icon" class="w-8 h-auto" />
                </template>
            </Button>
        </div>
        <Spotify v-if="data?.spotify" :data />
        <Activities :data />
    </BigBox>
</template>
