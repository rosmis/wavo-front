<template>
    <UiLevel
        column
        :space="isMobile ? 'lg' : 'xl'"
        class="py-20 relative border-t customBorder rounded-3xl"
        id="concept"
    >
        <UiDivider />

        <div class="overflow-hidden">
            <UiTitle
                tag="h2"
                centered
                size="3xl"
                class="gs_blinds_bottom title-1"
            >
                Pourquoi devenir une plateforme partenaire de Wavo ?
            </UiTitle>
        </div>

        <UiLevel column>
            <UiLevel class="overflow-hidden" align="center">
                <p
                    class="text-white leading-7 content-1 gs_blinds_bottom text-center w-full md:w-2/3"
                >
                    Proposez à vos vendeurs d’être payés toute suite sans
                    décaisser 1 centime. Wavo est une API simple et légère qui
                    permet de libérer financièrement vos vendeurs en leur
                    offrant un paiement anticipé.
                </p>
            </UiLevel>

            <UiButton to="https://discord.com/invite/hh2NKyFYUn" class="mt-8"
                >Rejoindre le discord</UiButton
            >
        </UiLevel>

        <div v-if="!isMobile" class="p-6 mt-8 rounded-xl border-c">
            <iframe
                src="https://demo.arcade.software/YMLzXz4t6vk77O09EH2x?embed"
                title="Discord | Get Quotes | Wavo"
                frameborder="0"
                loading="lazy"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
                style="width: 70vw; height: auto; aspect-ratio: 16/9"
            ></iframe>
        </div>
    </UiLevel>
</template>

<script lang="ts" setup>
import { useScrollTrigger } from "~/composables/useScrollTrigger";

defineProps<{
    isMobile: boolean;
}>();

onMounted(() => useScrollTrigger(["title-1", "content-1"]));
</script>

<style scoped>
.border-c {
    border: 0.5px solid #fff;
}
</style>
