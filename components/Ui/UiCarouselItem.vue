<template>
    <div
        class="w-[150px] bg-contain bg-center bg-no-repeat border-b-0 border-slate-5 px-8 py-6 md:w-[300px] flex-shrink-0"
        :style="{
            backgroundImage: `url('${imageUrl}')`,
        }"
    ></div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    imageUrl: string;
}>();
</script>
