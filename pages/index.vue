<template>
    <UiContainer full>
        <UiLevel column space="2xl">
            <HomeHeader />
            <HomeConcept />
            <HomeMarketplace />
            <HomeOperations />
            <HomePricing />
            <HomeContact />
        </UiLevel>
    </UiContainer>
</template>

<script lang="ts" setup>
//TODO do SEO Tags once i got the infos
useSeoMeta({
    title: "Wavo - La plateforme de revente de sneakers",
    description: "[description]",
    ogTitle: "[og:title]",
    ogDescription: "[og:description]",
    ogImage: "[og:image]",
    ogUrl: "[og:url]",
    twitterTitle: "[twitter:title]",
    twitterDescription: "[twitter:description]",
    twitterImage: "[twitter:image]",
    twitterCard: "summary",
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
</script>
