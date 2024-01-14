<template>
    <UiLevel column :space="isMobile ? 'lg' : 'xl'" id="how-it-works">
        <UiTitle tag="h2" centered size="3xl">Comment ça marche ?</UiTitle>

        <p class="text-white leading-7 text-center w-full md:w-2/3">
            Un bot Discord alimenté par des algorithmes de trading
            professionnels adaptés au marché de la sneakers.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <UiIcon
                v-for="(icon, index) in operationsContent"
                :icon-content="icon"
                :key="index"
            />
        </div>

        <UiButton to="https://discord.com/invite/hh2NKyFYUn" class="mt-8"
            >Rejoindre le discord</UiButton
        >
    </UiLevel>
</template>

<script lang="ts" setup>
defineProps<{
    isMobile: boolean;
}>();

const operationsContent = [
    {
        path: "/img/icons/Discord.png",
        title: "Rejoins notre serveur discord",
    },
    {
        path: "/img/icons/Bot.png",
        title: "Renseigne tes sneakers en entrant le modèle ou le SKU",
    },
    {
        path: "/img/icons/Sneaker.png",
        title: "Accepte notre offre instantanée et envoie-nous tes produits",
    },
];
</script>
