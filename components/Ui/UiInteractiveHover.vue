<template>
    <client-only>
        <Vue3Lottie
            :animation-data="Hover"
            :height="70"
            :width="70"
            :speed="0.5"
            class="cursor-pointer hover:scale-125 transition-transform duration-300 absolute bottom-16 right-10 z-20"
            :class="{
                'scale-up': isClicked,
                'opacity-up': !isClicked,
                'hidden': !props.isAssetsLoaded,
            }"
            @click="toggleScale()"
        />
    </client-only>
</template>

<script lang="ts" setup>
import Hover from "../../public/img/interactive-hover.json";

const emit = defineEmits<{
    (event: "click"): void;
}>();

const props = defineProps<{
    isAssetsLoaded: boolean;
}>();

const isClicked = ref(false);

onBeforeUnmount(() => console.log("unmounted"));

watch(
    () => props.isAssetsLoaded,
    () => {
        if (isClicked.value) {
            isClicked.value = false;
        }
    }
);

const toggleScale = () => {
    isClicked.value = true;

    emit("click");
};
</script>

<style scoped>
@keyframes scale-up {
    0% {
        transform: scale(1.25);
    }
    50% {
        transform: scale(1.7);
        opacity: 1;
    }
    100% {
        transform: scale(1.25);
        opacity: 0;
    }
}

@keyframes opacity-up {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.opacity-up {
    animation: opacity-up 1s ease-in-out;
    animation-fill-mode: forwards;
}

.scale-up {
    animation: scale-up 0.6s ease-in-out;
    animation-fill-mode: forwards;
}
</style>
