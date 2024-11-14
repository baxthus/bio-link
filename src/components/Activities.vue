<script setup lang="ts">
import VSCode from './activities/VSCode.vue';
import type { LanyardData } from '~/types/lanyard';

const { data } = defineProps<{ data?: LanyardData }>();

const components = ref<Array<{
    application_id: string;
    component: Component;
}>>([
    { application_id: '810516608442695700', component: markRaw(VSCode) },
]);
</script>

<template>
    <component
        :is="components.find(c => c.application_id === activity.application_id)?.component"
        v-for="activity in data?.activities || []"
        :key="activity.id"
        :data="activity"
    />
</template>
