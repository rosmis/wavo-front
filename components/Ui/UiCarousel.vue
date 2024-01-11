<template>
    <div class="flex gap-8 items-start justify-around carousel-scroll overflow-hidden min-w-full shrink-0">
        <UiCarouselItem
            v-for="(item, index) in items"
            :key="`card-${index}`"
            :item="item"
        ></UiCarouselItem>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    items: string[];
}>();
</script>


<style scoped>

.carousel-scroll {
    animation: scroll-x 150s linear infinite;
}

@keyframes scroll-x {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-100% - 32px));
    }
    
}
</style>