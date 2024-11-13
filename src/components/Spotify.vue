<script setup lang="ts">
import type { LanyardData } from '~/types/lanyard';

const { data } = defineProps(['data']) as { data: LanyardData };

console.log(data.spotify?.timestamps.start);

const now = ref(new Date().getTime());

setInterval(() => {
    now.value = new Date().getTime();
}, 1000);

function getProgress() {
    const start = data.spotify?.timestamps.start ?? new Date().getTime();
    const end = data.spotify?.timestamps.end ?? new Date().getTime();

    if (end <= start) return 0;

    const progress = ((now.value - start) / (end - start)) * 100;
    return Math.min(Math.max(progress, 0), 100); // Ensure progress is between 0 and 100
}
</script>

<template>
    <div class="flex flex-col gap-y-4 bg-base p-4 rounded-lg min-w-full">
        <span class="text-sm text-subtext1 font-medium">Listening to Spotify</span>
        <div class="flex flex-row gap-x-4">
            <div class="has-tooltip relative">
                <span class="tooltip bg-crust">{{ data.spotify?.album }}</span>
                <img :src="data?.spotify?.album_art_url" alt="Album Art" class="rounded-lg h-24 w-24">
            </div>
            <div class="flex flex-col items-start justify-center gap-2 min-w-0">
                <a
                    :href="'https://open.spotify.com/track/' + data?.spotify?.track_id"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    class="font-bold text-lg truncate w-full text-text hover:text-green-400 hover:underline transition-colors cursor-pointer"
                >
                    {{ data?.spotify?.song }}
                </a>
                <p class="text truncate w-full text-subtext1">
                    {{ data?.spotify?.artist }}
                </p>
            </div>
        </div>
        <div class="flex flex-row items-center gap-x-2">
            <div class="w-full bg-subtext1 h-1 rounded-full">
                <div
                    class="bg-mauve h-1 rounded-full"
                    :style="{ width: getProgress() + '%' }"
                />
            </div>
        </div>
    </div>
</template>

<style lang="postcss">
.tooltip {
    @apply py-1 px-2 shadow-lg rounded invisible absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 whitespace-nowrap overflow-hidden text-ellipsis;
}

.has-tooltip:hover .tooltip {
    @apply visible;
}
</style>
