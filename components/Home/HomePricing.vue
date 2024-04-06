<template>
    <UiLevel column :space="isMobile ? 'lg' : 'xl'" id="pricing" class="py-20">
        <div class="overflow-hidden">
            <UiTitle
                tag="h2"
                centered
                size="3xl"
                class="gs_blinds_bottom title-pricing"
            >
                Tarification simple et transparente
            </UiTitle>
        </div>

        <UiLevel column space="lg">
            <p class="text-center">
                <span class="text-9xl font-bold text-[#FF6A65]">4%</span> <br />
                <span class="text-[#FF6A65]">de commission</span>
            </p>

            <UiLevel>
                <UiIcon :icon-content="{ title: 'Sans coûts cachés' }" />
                <UiIcon :icon-content="{ title: 'Pas d’abonnement' }" />
            </UiLevel>

            <p>
                0.05% par jour sur l’avance à partir du 3eme mois pour le
                vendeur
            </p>
        </UiLevel>
    </UiLevel>
</template>

<script lang="ts" setup>
onMounted(() => useScrollTrigger(["title-pricing"]));

defineProps<{
    isMobile: boolean;
}>();
</script>
