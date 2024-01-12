<template>
    <UiLevel column space="lg">
        <UiTitle tag="h2" centered size="xl">Comment ça marche ?</UiTitle>

        <UiLevel space="lg">
            <UiIcon
                v-for="(icon, index) in testContent"
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
const testContent = [
    {
        path: "/images/operations/1.png",
        title: "Rejoins le discord",
    },
    {
        path: "/images/operations/1.png",
        title: "Utilise le bot et abonne toi",
    },
    {
        path: "/images/operations/1.png",
        title: "Ajoute tes préférences produits",
    },
];
</script>
