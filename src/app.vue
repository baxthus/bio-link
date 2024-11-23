<script setup lang="ts">
const title = {
    running: true,
    full: 'baxthus',
    current: '',
    index: 1,
};

onMounted(() => {
    setInterval(() => {
        if (!title.running) {
            title.index = 1;
            useHead({ title: title.full });
            return;
        }
        if (title.index > title.full.length) title.index = 1;

        title.current = title.full.slice(0, title.index);
        useHead({ title: title.current });
        title.index++;
    }, 500);

    addEventListener('focus', () => title.running = true);
    addEventListener('blur', () => title.running = false);
});
</script>

<template>
    <div class="min-h-screen flex flex-col items-center justify-center">
        <NuxtPage />
    </div>

    <Toast position="bottom-right" />
</template>
