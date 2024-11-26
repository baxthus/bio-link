<script setup lang="ts">
import { IconAlertTriangle } from '@tabler/icons-vue';

const slots = defineSlots<{
    default(): undefined;
    title?(): undefined;
}>();
</script>

<template>
    <div class="flex flex-col gap-y-3 p-4 rounded-lg w-full" style="background-color: var(--p-chip-background);">
        <span v-if="slots.title" class="flex flex-row justify-between text-sm text-subtext1 font-medium">
            <slot name="title" />
            <div v-tooltip.top="'Data may be outdated'">
                <IconAlertTriangle class="w-4 h-auto" />
            </div>
        </span>
        <slot />
    </div>
</template>
