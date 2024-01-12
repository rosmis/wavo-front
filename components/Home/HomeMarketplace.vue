<template>
    <UiLevel column class="w-full" space="lg">
        <h2 class="text-center text-xl">
            Booste tes ventes grâce <br />
            aux marketplaces.
        </h2>
        <p class="text-white text-center w-2/3">
            Intégré à 100% aux plateformes de seconde main, Wavo s'occupe de
            tout : pricing, listing et l'expédition, partout pour vendre
            rapidement.
        </p>

        <UiCarousel :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]" padded />

        <div class="mx-auto grid gap-8 grid-cols-3">
            <UiCard v-for="(item, index) in items" :key="index" :item="item" />
        </div>
    </UiLevel>
</template>

<script lang="ts" setup>
import cardsContent from "../../types/cardsContent";

const items = ref(cardsContent);
</script>
