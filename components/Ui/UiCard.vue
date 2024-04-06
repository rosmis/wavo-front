<template>
    <UiLevel
        align="left"
        column
        space="lg"
        class="border border-white relative rounded-xl p-8 mt-8 card"
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
        <img
            :src="item.imageUrl"
            :alt="item.title"
            loading="lazy"
            class="z-10 flex-1 max-w-[15rem]"
        />

        <div class="flex flex-col gap-2 flex-1 w-full">
            <h3 class="text-lg z-10 text-center">{{ item.title }}</h3>
            <p class="text-center leading-7 z-10 text-white">
                {{ item.content }}
            </p>
        </div>
    </UiLevel>
</template>

<script lang="ts" setup>
interface Card {
    title: string;
    content: string;
    imageUrl: string;
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
