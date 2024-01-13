<template>
    <NuxtLink
        :to="to"
        :target="targetBlank ? '_blank' : null"
        class="text-white button !py-2 !px-14 bg-[#232323] rounded-3xl"
        :class="{
            '!py-2 !px-8': size === 'sm',
            'text-base': size !== 'sm',
        }"
    >
        <slot />
    </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
    to: string;
    targetBlank?: boolean;
    iconPath?: string;
    size?: "sm";
}>();
</script>


<style scoped>
.button {
    transition: all 0.2s ease-in-out;
}
.button:hover {
    background-color: #FF6A65;
}
</style>