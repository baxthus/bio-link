<script setup lang="ts">
const fullTitle = 'baxthus';
let title = '';
let titleIndex = 1;

onMounted(() => {
    setInterval(() => {
        if (titleIndex > fullTitle.length) {
            titleIndex = 1;
        }

        title = fullTitle.slice(0, titleIndex);
        useHead({ title: title });
        titleIndex++;
    }, 500);
});
</script>

<template>
    <div class="min-h-screen flex flex-col items-center justify-center">
        <NuxtPage />
    </div>

    <Toast position="bottom-right" />
</template>
