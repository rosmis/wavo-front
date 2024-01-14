<template>
    <header class="background w-full fixed top-0 left-0 right-0 z-50">
        <UiContainer full>
            <div class="flex justify-between flex-grow-0 w-full p-4">
                <a href="#">
                    <img
                        class="w-[150px]"
                        src="/img/logo.svg"
                        alt="logo wavo"
                    />
                </a>

                <ul v-if="!isMobile" class="flex items-center nav-links gap-4">
                    <li>
                        <NuxtLink to="#concept">Concept</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#how-it-works"
                            >Comment ça marche</NuxtLink
                        >
                    </li>
                    <li>
                        <NuxtLink to="#pricing">Tarifs</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#contact">Nous contacter</NuxtLink>
                    </li>
                    <li>
                        <UiButton size="sm" to="google.fr" padded
                            >S'abonner</UiButton
                        >
                    </li>
                </ul>
            </div>
        </UiContainer>
    </header>
</template>

<script lang="ts" setup>
const isMobile = useMobileBreakpoints("md");
</script>

<style scoped>
.nav-links li a {
    color: white;
    padding: 1em;
}
.nav-links li a:hover {
    color: rgba(255, 255, 255, 0.829);
}

.background {
    backdrop-filter: blur(3px);
    background-color: rgba(5, 5, 10, 0.6);
}
</style>
