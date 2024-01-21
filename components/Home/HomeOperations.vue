<template>
    <UiLevel column :space="isMobile ? 'lg' : 'xl'" id="how-it-works">
        <div class="overflow-hidden">
            <UiTitle
                tag="h2"
                centered
                size="3xl"
                class="gs_blinds_bottom title-3"
            >
                Comment ça marche ?
            </UiTitle>
        </div>

        <UiLevel align="center" class="overflow-hidden">
            <p
                class="text-white leading-7 gs_blinds_bottom content-3 text-center w-full md:w-2/3"
            >
                Un bot Discord alimenté par des algorithmes de trading
                professionnels adaptés au marché de la sneakers.
            </p>
        </UiLevel>

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

onMounted(() => useScrollTrigger(["title-3", "content-3"]));

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
