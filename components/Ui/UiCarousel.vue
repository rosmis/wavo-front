<template>
    <div class="flex overflow-hidden w-[95vw]" id="carouselWrapper" :class="{
        'p-8': padded,
    }">
        <UiCarouselItem
            v-for="(item, index) in items"
            :key="`card-${index}`"
            :item="item"
            :index="index"
            class="carousel-item"
        ></UiCarouselItem>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    items: number[];
    padded?: boolean;
}>();

const carouselContainer = ref<Element | undefined | null>(null);
const carouselInterval = ref<number | undefined>(undefined);

onMounted(() => {
    carouselContainer.value = document.querySelector("#carouselWrapper");

    const scrollWidth = carouselContainer.value?.scrollWidth;
    const itemsList: NodeListOf<Element> =
        document.querySelectorAll(".carousel-item");

    let isScrollingPaused = false;

    carouselInterval.value = self.setInterval(() => {
        if (isScrollingPaused || !carouselContainer.value) {
            return;
        }
        const first: HTMLDivElement | null =
            carouselContainer.value?.querySelector(".carousel-item");

        if (!isElementInViewport(first) && first) {
            carouselContainer.value.appendChild(first);
            carouselContainer.value.scrollTo(
                carouselContainer.value.scrollLeft - first.offsetWidth,
                0
            );
        }
        if (carouselContainer.value.scrollLeft !== scrollWidth) {
            carouselContainer.value.scrollTo(
                carouselContainer.value.scrollLeft + 1,
                0
            );
        }
    }, 15);

    itemsList.forEach((article) => {
        article.addEventListener(
            "mouseenter",
            () => (isScrollingPaused = true)
        );

        article.addEventListener(
            "mouseleave",
            () => (isScrollingPaused = false)
        );
    });
});

function isElementInViewport(el: HTMLDivElement | null): boolean {
    if (!el) return false;

    const rect = el.getBoundingClientRect();
    return rect.right > 0;
}

onUnmounted(() => {
    // clear interval in case the component is unmounted before the interval is cleared
    clearInterval(carouselInterval.value);
});
</script>
