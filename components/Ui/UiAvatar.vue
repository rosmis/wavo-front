<template>
    <div
        class="bg-cover bottom-8 h-14 mb-10 w-14 absolute rounded-full"
        :style="{
            'background-image': `url(${avatarUrl})`,
            left: `${index + 1.3}rem`,
            zIndex: `${index <= 5 ? index + 1 : 14 - index}`,
        }"
    ></div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    avatarUrl: string;
    index: number;
}>();
</script>
