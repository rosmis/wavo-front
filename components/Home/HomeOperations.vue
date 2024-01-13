<template>
    <UiLevel column space="lg" id="how-it-works">
        <UiTitle tag="h2" centered size="3xl">Comment ça marche ?</UiTitle>

        <UiLevel space="lg" class="w-fit">
            <UiIcon
                v-for="(icon, index) in operationsContent"
                :icon-content="icon"
                :key="index"
            />
        </UiLevel>

        <UiButton to="https://www.google.fr" class="mt-8"
            >Rejoindre le discord</UiButton
        >
    </UiLevel>
</template>

<script lang="ts" setup>
const operationsContent = [
    {
        path: "/img/icons/Bot_Icone_neu.png",
        title: "Rejoins le discord",
    },
    {
        path: "/img/icons/Discord_Icone_neu.png",
        title: "Utilise le bot et abonne toi",
    },
    {
        path: "/img/icons/Sneakers_Icone_neu.png",
        title: "Ajoute tes préférences produits",
    },
];
</script>
