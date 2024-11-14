<script setup lang="ts">
import type { Activity } from '~/types/lanyard';

const { data } = defineProps(['data']) as { data: Activity };

const processLink = (link?: string) => link ? `https://${link.split('/https/')[1]}` : 'https://placehold.co/1024';
</script>

<template>
    <Box>
        <template #title>
            Coding
        </template>
        <div class="flex flex-row gap-x-4">
            <Tooltip :text="data.assets?.large_text">
                <img :src="processLink(data.assets?.large_image)" alt="VSCode" class="rounded-lg h-24 w-24">
            </Tooltip>
            <div class="flex flex-col items-start justify-center gap-2 min-w-0">
                <p class="font-bold text-lg truncate">
                    {{ data.name }}
                </p>
                <p class="truncate w-full text-subtext1">
                    {{ data.details }}
                </p>
                <p v-if="data.state" class="truncate w-full text-subtext1">
                    {{ data.state }}
                </p>
            </div>
        </div>
    </Box>
</template>
