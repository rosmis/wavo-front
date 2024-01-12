<template>
    <UiLevel column class="w-full" space="lg">
        <UiTitle tag="h2" centered size="3xl"
            >Booste tes ventes grâce <br />
            aux marketplaces.</UiTitle
        >

        <p class="text-white text-center w-2/3">
            Intégré à 100% aux plateformes de seconde main, Wavo s'occupe de
            tout : pricing, listing et l'expédition, partout pour vendre
            rapidement.
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
const brandUrls: string[] = Array.from({ length: 18 }, () => '/img/brands/Brand');
</script>
