<template>
    <component
        :is="tag"
        class="text-white fontGradient"
        :class="[
            {
                'text-center': centered,
            },
            {
                'text-lg': size === 'lg',
                'text-xl': size === 'xl',
                'text-2xl': size === '2xl',
                'text-3xl': size === '3xl',
                'text-4xl': size === '4xl',
                'text-5xl': size === '5xl',
            },
        ]"
    >
        <slot />
    </component>
</template>

<script lang="ts" setup>
defineProps<{
    centered?: boolean;
    size: "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
    tag: "h1" | "h2" | "h3";
}>();
</script>

<style scoped>
/* custom font gradient  */
.fontGradient {
    background: linear-gradient(
        to right bottom,
        #fff 30%,
        hsla(0, 0%, 100%, 0.5)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: unset;
}
</style>
