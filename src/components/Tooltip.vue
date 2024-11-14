<script setup lang="ts">
const slots = defineSlots<{
    default(): undefined;
    tooltip?(): undefined;
}>();

const props = defineProps<{
    text?: string;
    class?: string;
    tooltipClass?: string;
}>();
</script>

<template>
    <div class="has-tooltip relative flex-shrink-0" :class="props.class">
        <span v-if="slots.tooltip || props.text" class="tooltip bg-crust" :class="props.tooltipClass">
            <template v-if="props.text">
                {{ props.text }}
            </template>
            <template v-else>
                <slot name="tooltip" />
            </template>
        </span>
        <slot />
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
