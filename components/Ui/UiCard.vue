<template>
    <UiLevel
        align="left"
        column
        space="lg"
        class="border border-white relative p-8 pt-20 pb-32 rounded-xl mt-8 card"
        :style="{
            background: `linear-gradient(310deg, 
                ${item.backgroundColor[0]} -2.15%, 
                ${item.backgroundColor[1]} 11.7%, 
                ${item.backgroundColor[2]} 60.65%, 
                ${item.backgroundColor[3]} 71.73%
            )`,
        }"
        @mouseover="hovered = true"
        @mouseleave="hovered = false"
    >
        <h3 class="text-lg z-10 text-center">{{ item.title }}</h3>
        <p class="text-left leading-8 z-10 text-white">{{ item.content }}</p>
    </UiLevel>
</template>

<script lang="ts" setup>
interface Card {
    title: string;
    content: string;
    backgroundColor: string[];
}

defineProps<{
    item: Card;
}>();

const hovered = ref(false);
</script>

<style scoped>
.card::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: #05050a;
    border-radius: 0.75rem;
    transition: opacity 1.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.card:hover::after {
    opacity: 0;
}
</style>
