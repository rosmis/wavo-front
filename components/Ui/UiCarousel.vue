<template>
    <div
        class="group mx-auto customShadow -ml-6 -mr-6 flex max-w-[90vw] items-start gap-8 carouselWrapper"
    >
        <!-- divide the array into two arrays two fake the infinite scroll -->
        <div class="flex overflow-hidden select-none">
            <ul
                v-for="(splittedUrlArray, index) in splittedBrandUrls"
                class="flex min-w-full shrink-0 scroll-x-animation items-start justify-around gap-8"
                :key="`split-${index}`"
                :class="{
                    'p-8': padded,
                }"
            >
                <UiCarouselItem
                    v-for="(item, itemIndex) in splittedUrlArray"
                    :key="`item-${itemIndex}`"
                    :image-url="`${item}_${itemIndex + 1}.png`"
                    class="carousel-item"
                ></UiCarouselItem>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    brandUrls: string[];
    padded?: boolean;
}>();

const splittedBrandUrls = computed(() => {
    const firstHalf = props.brandUrls.slice(0, 9);
    const secondHalf = props.brandUrls.slice(9, 18);

    return [firstHalf, secondHalf];
});

onMounted(() => {
    const carouselWrapper = document.querySelector(".carouselWrapper");
    const carouselLists = carouselWrapper?.querySelectorAll("ul");

    carouselWrapper?.addEventListener("mouseenter", () => {
        carouselLists?.forEach((list) => {
            list.classList.add("animation-paused");
        });
    });
    carouselWrapper?.addEventListener("mouseleave", () => {
        carouselLists?.forEach((list) => {
            list.classList.remove("animation-paused");
        });
    });
});
</script>

<style scoped>
.scroll-x-animation {
    animation: scroll-x 124s linear infinite;
}

.animation-paused {
    animation-play-state: paused;
}

@keyframes scroll-x {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(-100% - 32px));
    }
}

.customShadow {
    -webkit-mask-image: linear-gradient(
        var(--mask-direction, to right),
        transparent,
        #000 20%,
        #000 80%,
        transparent
    );
    mask-image: linear-gradient(
        var(--mask-direction, to right),
        transparent,
        #000 20%,
        #000 80%,
        transparent
    );
}
</style>
