<template>
    <UiContainer full fixed>
        <div class="flex justify-between flex-grow-0 w-full p-4">
            <a href="#">
                <img src="/img/logo.png" alt="logo wavo" />
            </a>

            <ul class="flex items-center gap-4">
                <li>
                    <a class="transition nav-links" href="#">Concept</a>
                </li>
                <li>
                    <a class="transition nav-links" href="#"
                        >Comment ça marche</a
                    >
                </li>
                <li>
                    <a class="transition nav-links" href="#">Tarifs</a>
                </li>
                <li>
                    <a class="transition nav-links" href="#">Nous contacter</a>
                </li>
                <li>
                    <a class="transition nav-links" href="#">S'abonner</a>
                </li>
            </ul>
        </div>
    </UiContainer>
</template>

<style scoped>
.nav-links {
    color: white;
    padding: 1em;
}

.nav-links:hover {
    color: rgba(255, 255, 255, 0.829);
}
</style>
