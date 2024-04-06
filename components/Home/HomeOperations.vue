<template>
    <UiLevel
        column
        :space="isMobile ? 'lg' : 'xl'"
        id="how-it-works"
        class="relative border-t customBorder py-20 rounded-3xl"
    >
        <UiDivider />

        <div class="overflow-hidden">
            <UiTitle
                tag="h2"
                centered
                size="3xl"
                class="gs_blinds_bottom title-3"
            >
                Expérience fluide, facile à mettre place
            </UiTitle>
        </div>

        <UiLevel align="center" class="overflow-hidden">
            <p
                class="text-white leading-7 gs_blinds_bottom content-3 text-center w-full md:w-2/3"
            >
                En quelques jours seulement, vos équipes techniques et
                commerciales seront en mesure d’offrir des paiements anticipés à
                vos vendeurs.
            </p>
        </UiLevel>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <UiIcon
                v-for="(icon, index) in operationsContent"
                :icon-content="icon"
                :key="index"
            />
        </div>

        <UiButton size="sm" to="#contact">Commencer</UiButton>
    </UiLevel>
</template>

<script lang="ts" setup>
defineProps<{
    isMobile: boolean;
}>();

onMounted(() => useScrollTrigger(["title-3", "content-3"]));

const operationsContent = [
    {
        path: "/img/icons/prise-de-courant.png",
        title: "Intégration low-code directement dans votre plateforme",
    },
    {
        path: "/img/icons/boulon.png",
        title: "Avances instantanées en 1 clic lorsqu’un vendeur dépose un produit",
    },
    {
        path: "/img/icons/verifier.png",
        title: "Validation & paiement avec une simple requête après l’authentification",
    },
];
</script>
