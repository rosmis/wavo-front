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
                class="gs_blinds_bottom title-platform"
            >
                Retrouvez nous prochainement <br />
                sur ces plateformes
            </UiTitle>
        </div>

        <UiLevel align="center" class="overflow-hidden">
            <p
                class="text-white leading-7 text-center gs_blinds_bottom content-platform w-full md:w-2/3"
            >
                Différenciez vous en offrant à vos vendeurs une solution de
                paiement plus innovante, et la plus adaptée à votre plateforme
                et son usage.
            </p>
        </UiLevel>

        <UiCarousel :brand-urls="brandUrls" padded />
    </UiLevel>
</template>

<script lang="ts" setup>
defineProps<{
    isMobile: boolean;
}>();

onMounted(() => useScrollTrigger(["title-platform", "content-platform"]));

const brandUrls: string[] = Array.from(
    { length: 5 },
    () => "/img/brands/Brand"
);
</script>
