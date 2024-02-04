<template>
    <UiContainer full class="overflow-x-hidden">
        <UiLevel column space="2xl">
            <HomeHeader :is-mobile="isMobile" />
            <HomeConcept :is-mobile="isMobile" />
            <HomeMarketplace :is-mobile="isMobile" />
            <HomeOperations :is-mobile="isMobile" />
            <HomePricing :is-mobile="isMobile" />
            <HomeContact />
        </UiLevel>
    </UiContainer>
</template>

<script lang="ts" setup>
useSeoMeta({
    title: "Wavo - La plateforme de revente de sneakers",
    description: "[description]",
    ogTitle: "Wavo - La plateforme de revente de sneakers",
    ogDescription: "[og:description]",
    ogImage: "[og:image]",
    ogUrl: "[og:url]",
});

useHead({
    htmlAttrs: {
        lang: "fr",
    },
    link: [
        {
            rel: "icon",
            type: "image/x-icon",
            href: "/favicon.ico",
        },
    ],
});

const isMobile = useMobileBreakpoints("md");
</script>
