<template>
    <UiLevel
        column
        class="w-full py-20 relative border-t customBorder rounded-3xl"
        :space="isMobile ? 'lg' : 'xl'"
    >
        <UiDivider />

        <div class="overflow-hidden">
            <UiTitle
                tag="h2"
                centered
                size="3xl"
                class="gs_blinds_bottom title-2"
            >
                Pourquoi devenir une plateforme partenaire de Wavo ?
            </UiTitle>
        </div>

        <UiLevel align="center" class="overflow-hidden">
            <p
                class="text-white leading-7 text-center gs_blinds_bottom content-2 w-full md:w-2/3"
            >
                Proposez à vos vendeurs d’être payés toute suite sans décaisser
                1 centime. Wavo est une API simple et légère qui permet de
                libérer financièrement vos vendeurs en leur offrant un paiement
                anticipé.
            </p>
        </UiLevel>

        <div class="mx-8 md:mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
            <UiCard v-for="(item, index) in items" :key="index" :item="item" />
        </div>
    </UiLevel>
</template>

<script lang="ts" setup>
import cardsContent from "../../types/cardsContent";

defineProps<{
    isMobile: boolean;
}>();

onMounted(() => useScrollTrigger(["title-2", "content-2"]));

const items = ref(cardsContent);
</script>
