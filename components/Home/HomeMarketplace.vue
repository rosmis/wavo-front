<template>
    <UiLevel
        column
        class="w-full py-20 relative border-t customBorder rounded-3xl"
        space="xl"
    >
        <UiDivider />

        <UiTitle tag="h2" centered size="3xl"
            >Booste tes ventes grâce <br />
            aux marketplaces.</UiTitle
        >

        <p class="text-white text-center w-2/3">
            Intégré aux plus grandes marketplaces professionnelles, ainsi que
            les plateformes spécialisées sneakers ou encore en lien étroit avec
            +20 resell shops. Wavo s'occupe de vendre tes sneakers consignées
            partout, au meilleur prix
        </p>

        <UiCarousel :brand-urls="brandUrls" padded />

        <div class="mx-auto grid gap-8 grid-cols-3">
            <UiCard v-for="(item, index) in items" :key="index" :item="item" />
        </div>
    </UiLevel>
</template>

<script lang="ts" setup>
import cardsContent from "../../types/cardsContent";

const items = ref(cardsContent);
const brandUrls: string[] = Array.from(
    { length: 18 },
    () => "/img/brands/Brand"
);
</script>
