<script setup lang="ts">
const error = useError();

const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

onMounted(() => {
  let currentPosition = 0;

  function konamiEventListener(event: KeyboardEvent) {
    if (event.key === KONAMI_CODE[currentPosition++]) {
      if (currentPosition === KONAMI_CODE.length) {
        navigateTo('https://go.baxt.fun/secret', { external: true });
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
  <div class="flex flex-col gap-4 items-center px-3 py-4 h-screen">
    <h1 class="text-5xl font-bold">
      {{ error?.statusCode }}
    </h1>
    <p class="text-xl">
      {{ error?.message }}
    </p>
    <img :src="`https://http.cat/${error?.statusCode}`" :alt="`Status Code ${error?.statusCode}`" class="h-auto w-full max-w-lg">
    <Button @click="clearError({ redirect: '/' })">
      Go back
    </Button>
  </div>
</template>
