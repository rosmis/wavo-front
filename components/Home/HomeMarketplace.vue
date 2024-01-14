<template>
    <UiLevel
        column
        class="w-full py-20 relative border-t customBorder rounded-3xl"
        :space="isMobile ? 'lg' : 'xl'"
    >
        <UiDivider />

        <UiTitle tag="h2" centered size="3xl"
            >Booste tes ventes grâce <br />
            aux marketplaces.</UiTitle
        >

        <p class="text-white leading-7 text-center w-full md:w-2/3">
            Intégré aux plus grandes marketplaces professionnelles, ainsi que
            les plateformes spécialisées sneakers ou encore en lien étroit avec
            +20 resell shops. Wavo s'occupe de vendre tes sneakers consignées
            partout, au meilleur prix
        </p>

        <UiCarousel :brand-urls="brandUrls" padded />

        <div class="mx-8 md:mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
            <UiCard v-for="(item, index) in items" :key="index" :item="item" />
        </div>
    </UiLevel>
</template>

<script lang="ts" setup>
import cardsContent from "../../types/cardsContent";

defineProps<{
    isMobile: boolean;
}>();

const items = ref(cardsContent);
const brandUrls: string[] = Array.from(
    { length: 18 },
    () => "/img/brands/Brand"
);
</script>
