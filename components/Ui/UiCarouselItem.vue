<template>
    <div
        class="w-[350px] rounded-2xl border border-b-0 border-slate-5 px-8 py-6 md:w-[450px] flex-shrink-0"
    ></div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    item: number;
    index: number; // TODO delete this once we have a real item
}>();
</script>
