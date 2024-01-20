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
            :id="label"
            :required="required"
            :placeholder="placeholder"
            class="placeholder:text-sm"
            :class="{
                'bg-[#1a1a1a] text-white w-full p-2 rounded-md border border-[#333333]':
                    inputStyle === 'default',
                'bg-transparent text-white w-full p-2 rounded-md border border-slate-400 focus:border-[#ff6a6587]':
                    inputStyle === 'contact',
            }"
            @keyup.enter="$emit('send')"
            @input="$emit('update:modelValue', $event.target.value)"
        />

        <Icon
            v-if="icon && !loading"
            :name="icon"
            class="absolute bottom-[15%] right-[1%] text-3xl p-1 hover:bg-[#333333] rounded-full cursor-pointer"
            @click="$emit('send')"
        />

        <Icon
            v-if="loading"
            name="line-md:loading-twotone-loop"
            class="absolute bottom-[15%] right-[1%] text-3xl p-1 rounded-full"
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
    loading?: boolean;
    full?: boolean;
    icon?: string;
    required?: boolean;

    inputStyle?: "default" | "contact";
}>();

const emit = defineEmits<{
    (event: "update:modelValue", input: string): void;
    (event: "send"): void;
}>();
</script>
