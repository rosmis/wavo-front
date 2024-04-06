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
                // 'trigger-opacity-down': isOpacityDown,
                'trigger-opacity': isOpacity,
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

const isClicked = ref(false);
const isOpacity = ref(false);
const isOpacityDown = ref(true);

onMounted(() => {
    setTimeout(() => {
        isOpacityDown.value = false;
    }, 1000);
});

onBeforeUnmount(() => console.log("unmounted"));

const toggleScale = () => {
    isClicked.value = true;
    isOpacity.value = true;

    emit("click");

    setTimeout(() => {
        isClicked.value = false;
        isOpacity.value = false;
    }, 1000);
};
</script>

<style scoped>
@keyframes scale-up {
    0% {
        transform: scale(1.25);
    }
    50% {
        transform: scale(1.7);
    }
    100% {
        transform: scale(1.25);
    }
}

@keyframes opacity {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@keyframes opacity-down {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.trigger-opacity {
    animation: opacity 1s ease-in-out;
}

.trigger-opacity-down {
    animation: opacity-down 0.2s ease-in-out;
}

.scale-up {
    animation: scale-up 0.6s ease-in-out;
}
</style>
