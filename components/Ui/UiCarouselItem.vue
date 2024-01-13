<template>
    <li
        class="md:w-[350px] max-w-full bg-contain bg-center bg-no-repeat border-b-0 px-8 py-6 w-[450px]"
        :style="{
            backgroundImage: `url('${imageUrl}')`,
        }"
    ></li>
</template>

<script lang="ts" setup>
const props = defineProps<{
    imageUrl: string;
}>();
</script>
