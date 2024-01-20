<template>
    <NuxtLink
        :to="to"
        :target="targetBlank ? '_blank' : null"
        class="text-white button !py-2 !px-14 bg-[#232323] rounded-3xl cursor-pointer"
        :class="{
            '!py-2 !px-8': size === 'sm',
            'text-base': size !== 'sm',
        }"
    >
        <template v-if="!loading">
            <slot />
        </template>

        <UiLevel v-else>
            <Icon name="line-md:loading-twotone-loop" class="text-2xl" />
        </UiLevel>
    </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
    to?: string;
    targetBlank?: boolean;
    loading?: boolean;
    iconPath?: string;
    size?: "sm";
}>();
</script>

<style scoped>
.button {
    transition: all 0.2s ease-in-out;
}
.button:hover {
    background-color: #ff6a65;
}
</style>
