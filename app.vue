<template>
    <div class="custom-bg flex flex-col gap-16 items-center">
        <Navbar />

        <NuxtPage />

        <Footer />

        <UNotifications />
    </div>
</template>

<script lang="ts" setup>
import { useSmoothScroll } from './composables/useSmoothScroll';

onMounted(() => {
    useSmoothScroll();
});
</script>
