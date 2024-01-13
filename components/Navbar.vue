<template>
    <div class="background w-full fixed top-0 left-0 right-0 z-50">
        <UiContainer full>
            <div class="flex justify-between flex-grow-0 w-full p-4">
                <a href="#">
                    <img loading="lazy" src="/img/logo.png" alt="logo wavo" />
                </a>

                <ul class="flex items-center nav-links gap-4">
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
    </div>
</template>

<style scoped>
.nav-links li {
    position: relative;
}
.nav-links li::before {
    content: "";
    border-radius: 5px;
    position: absolute;
    transition: 300ms;
    bottom: -17%;
    right: 10%;
    left: 10%;
    width: 0%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.829);
}

.nav-links li:last-child::before {
    display: none;
}

.nav-links li:hover::before {
    width: 80%;
}

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
