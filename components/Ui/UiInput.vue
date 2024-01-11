<template>
    <div
        class="flex flex-col gap-2"
        :class="{
            'w-full': full,
        }"
    >
        <input
            :id="id"
            :type="type"
            :placeholder="placeholder"
            class="bg-[#1a1a1a] text-white w-full p-2 rounded-md border border-[#333333]"
        />
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    placeholder?: string;
    label?: string;
    type: string;
    full?: boolean;
}>();
</script>

<style scoped>
input:focus {
    outline: none;
}
</style>
