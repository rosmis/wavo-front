<template>
    <div
        class="bg-cover h-14 w-14 rounded-full"
        :style="{
            'background-image': `url(${avatarUrl})`,
            translate: `${translateXAvatarValues[index + 1]} 0`,
            zIndex: `${index <= 5 ? index + 1 : 14 - index}`,
        }"
    ></div>
</template>

<script lang="ts" setup>
import translateXAvatarValues from '~/types/translateXAvatarValues';

defineProps<{
    avatarUrl: string;
    index: number;
}>();
</script>
