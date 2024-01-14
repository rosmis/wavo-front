<template>
    <footer class="border-t relative customBorder mt-20 rounded-3xl w-full">
        <UiDivider />

        <UiContainer full class="py-20">
            <UiLevel :vertical-align="isMobile ? null : 'bottom'">
                <div class="flex flex-col gap-2 items-center md:items-start">
                    <img
                        class="w-[150px]"
                        src="/img/logo.svg"
                        alt="logo_wavo"
                    />
                    <p class="text-slate-400 text-center md:text-left text-xs">
                        129 RUE SERVIENT Tour Part Dieu <br />69003 LYON, France
                    </p>

                    <UiLevel
                        class="mt-2 w-full md:w-fit justify-evenly md:justify-between"
                        no-mobile-col
                    >
                        <NuxtLink
                            to="https://www.tiktok.com/@wavo_app?_t=8j1fpPe4RoO&_r=1"
                        >
                            <Icon name="ic:baseline-tiktok" class="text-2xl" />
                        </NuxtLink>

                        <NuxtLink to="https://twitter.com/wavo_app">
                            <Icon name="mdi:twitter" class="text-2xl" />
                        </NuxtLink>

                        <NuxtLink
                            to="https://www.linkedin.com/company/wavo-app"
                        >
                            <Icon name="mdi:linkedin" class="text-2xl" />
                        </NuxtLink>
                    </UiLevel>
                </div>

                <ul
                    class="flex items-end flex-wrap justify-center nav-links gap-4"
                >
                    <li class="footer-links">
                        <NuxtLink class="text-sm text-slate-400" to="#concept"
                            >Concept</NuxtLink
                        >
                    </li>
                    <li class="footer-links">
                        <NuxtLink
                            class="text-sm text-slate-400"
                            to="#how-it-works"
                            >Comment ça marche</NuxtLink
                        >
                    </li>
                    <li class="footer-links">
                        <NuxtLink class="text-sm text-slate-400" to="#pricing"
                            >Tarifs</NuxtLink
                        >
                    </li>
                    <li class="footer-links">
                        <NuxtLink class="text-sm text-slate-400" to="#contact"
                            >Nous contacter</NuxtLink
                        >
                    </li>
                    <li class="footer-links">
                        <NuxtLink
                            class="text-sm text-slate-400"
                            to="https://docs-wavo.document360.io/docs/privacy-policy-fr"
                            >Politique de confidentialité</NuxtLink
                        >
                    </li>
                    <li class="footer-links">
                        <NuxtLink
                            class="text-sm text-slate-400"
                            to="https://docs-wavo.document360.io/docs/wavo-terms-of-services-fr"
                            >CGU</NuxtLink
                        >
                    </li>
                </ul>
            </UiLevel>
        </UiContainer>
    </footer>
</template>

<script lang="ts" setup>
const isMobile = useMobileBreakpoints("md");
</script>
