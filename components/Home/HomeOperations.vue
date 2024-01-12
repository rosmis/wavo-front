<template>
    <UiLevel column space="lg">
        <h2 class="text-center text-xl">Comment ça marche ?</h2>


        <UiLevel space="lg">
            <UiIcon
                v-for="(icon, index) in testContent"
                :icon-content="icon"
                :key="index"
            />
        </UiLevel>

        <UiButton to="https://www.google.fr" class="mt-8">Rejoindre le discord</UiButton>
    </UiLevel>
</template>

<script lang="ts" setup>
const testContent = [
    {
        path: "/images/operations/1.png",
        title: "1. Créez votre compte",
    },
    {
        path: "/images/operations/1.png",
        title: "1. Créez votre compte",
    },
    {
        path: "/images/operations/1.png",
        title: "1. Créez votre compte",
    },
];
</script>
