<template>
    <div
        class="flex flex-col gap-2 relative"
        :class="{
            'w-full': full,
        }"
    >
        <input
            :value="modelValue"
            :type="type"
            :placeholder="placeholder"
            class="bg-[#1a1a1a] text-white w-full p-2 rounded-md border border-[#333333]"
            @keyup.enter="$emit('send')"
            @input="$emit('update:modelValue', $event.target.value)"
        />

        <Icon
            name="material-symbols:send-outline"
            class="absolute bottom-[15%] right-[1%] text-3xl p-1 hover:bg-[#333333] rounded-full cursor-pointer"
            @click="$emit('send')"
        />
    </div>
</template>

<script lang="ts">
export default {
    model: {
        prop: "modelValue",
        event: "update:modelValue",
    },
};
</script>

<script lang="ts" setup>
defineProps<{
    modelValue: string;
    placeholder?: string;
    label?: string;
    type: string;
    full?: boolean;
}>();

const emit = defineEmits<{
    (event: "update:modelValue", input: string): void;
    (event: "send"): void;
}>();
</script>

<style scoped>
input:focus {
    outline: none;
}
</style>
