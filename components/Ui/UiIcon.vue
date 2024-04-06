<template>
    <UiLevel column>
        <UiLevel
            v-if="iconContent.path"
            align="center"
            class="p-8 rounded-xl w-[150px] h-full customShadow aspect-square"
        >
            <img
                :src="iconContent.path"
                :alt="iconContent.title"
                loading="lazy"
                class="w-full"
            />
        </UiLevel>

        <p
            class="text-white text-center"
            :class="{
                'p-4 rounded-lg customShadow': !iconContent.path,
            }"
        >
            {{ iconContent.title }}
        </p>
    </UiLevel>
</template>

<script lang="ts" setup>
interface Icon {
    path?: string;
    title: string;
}

defineProps<{
    iconContent: Icon;
}>();
</script>

<style scoped>
.customShadow {
    box-shadow: 6px 10px 6.8px 0px rgba(0, 0, 0, 0.25),
        -2px -3px 6.5px 0px rgba(105, 105, 105, 0.25);
}
</style>
