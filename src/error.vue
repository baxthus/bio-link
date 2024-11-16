<script setup lang="ts">
const error = useError();

const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

onMounted(() => {
    let currentPosition = 0;

    function konamiEventListener(event: KeyboardEvent) {
        if (event.key === KONAMI_CODE[currentPosition++]) {
            if (currentPosition === KONAMI_CODE.length) {
                navigateTo('https://www.youtube.com/watch?v=HiBxdACoXYY', { external: true });
                currentPosition = 0;
            }
        } else {
            currentPosition = 0;
        }
    }

    document.addEventListener('keydown', konamiEventListener);
});
</script>

<template>
    <div class="flex flex-col gap-4 items-center px-3 py-4 h-screen bg-mantle text-text">
        <h1 class="text-5xl font-bold">
            {{ error?.statusCode }}
        </h1>
        <p class="text-xl">
            {{ error?.message }}
        </p>
        <img :src="`https://http.cat/${error?.statusCode}`" :alt="`Status Code ${error?.statusCode}`" class="h-auto w-full max-w-lg">
        <button class="bg-crust px-4 py-3 rounded-lg border border-surface0 hover:bg-surface0" @click="clearError({ redirect: '/' })">
            Go back
        </button>
    </div>
</template>
