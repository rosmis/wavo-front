<template>
    <header class="background w-full fixed top-0 left-0 right-0 z-50">
        <UiContainer full>
            <div class="flex justify-between flex-grow-0 w-full p-4">
                <a href="#">
                    <img
                        class="md:w-[150px] w-[120px]"
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
                        <UiButton size="sm" to="#pricing" padded
                            >S'abonner</UiButton
                        >
                    </li>
                </ul>

                <div
                    v-else
                    class="hamburger z-40"
                    @click="isMobileMenuOpen = !isMobileMenuOpen"
                >
                    <div class="hamburger-lines"></div>
                </div>
            </div>
        </UiContainer>

        <UiMobileHamburger
            v-if="isMobileMenuOpen"
            @close="isMobileMenuOpen = false"
        />
    </header>
</template>

<script lang="ts" setup>
const isMobile = useMobileBreakpoints("md");
const isMobileMenuOpen = ref(false);
const hamburger = ref<Element | null>(null);

onMounted(() => (hamburger.value = document.querySelector(".hamburger")));

watch(isMobileMenuOpen, () => hamburger.value?.classList.toggle("toggle"));
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

.hamburger {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
    height: 50px;
    widows: 50px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.hamburger.toggle .hamburger-lines {
    transform: translateX(2.5rem);
}

.hamburger.toggle .hamburger-lines::before,
.hamburger.toggle .hamburger-lines::after {
    background-color: white !important;
}

.hamburger.toggle .hamburger-lines::before {
    transform: rotate(45deg) translate(-1.75rem, 1.75rem);
}

.hamburger.toggle .hamburger-lines::after {
    transform: rotate(-45deg) translate(-1.75rem, -1.75rem);
}

.hamburger::before {
    content: "";
    position: absolute;
    border-bottom-left-radius: 9px;
    border-top-left-radius: 9px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 100%;
    background-color: white;
    z-index: 5;
    transition: all 0.2s ease-in-out;
}

.hamburger:hover .hamburger-lines::before,
.hamburger:hover .hamburger-lines::after {
    background-color: white;
}

.hamburger .hamburger-lines {
    width: 20px;
    height: 1.6px;
    background-color: white;
    z-index: 10;
    transition: all 0.3s ease-in-out;
}

.hamburger .hamburger-lines::before,
.hamburger .hamburger-lines::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 1.6px;
    background-color: white;
    z-index: 10;
    transition: all 0.3s ease-in-out;
}

.hamburger .hamburger-lines::before {
    transform: translateY(-0.5rem);
}

.hamburger .hamburger-lines::after {
    transform: translateY(0.5rem);
}
</style>
