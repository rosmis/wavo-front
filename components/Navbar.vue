<template>
    <div class="background w-full fixed top-0 left-0 right-0 z-50">
        <UiContainer full>
            <div class="flex justify-between flex-grow-0 w-full p-4">
                <a href="#">
                    <img src="/img/logo.png" alt="logo wavo" />
                </a>

                <ul class="flex items-center nav-links gap-4">
                    <li>
                        <a href="#">Concept</a>
                    </li>
                    <li>
                        <a href="#">Comment ça marche</a>
                    </li>
                    <li>
                        <a href="#">Tarifs</a>
                    </li>
                    <li>
                        <a href="#">Nous contacter</a>
                    </li>
                    <li>
                        <a href="#">S'abonner</a>
                    </li>
                </ul>
            </div>
        </UiContainer>
    </div>
</template>

<style scoped>
.nav-links li {
    position: relative;
    /* TODO fix the transition */
    transition: all 0.2 cubic-bezier(0.19, 1, 0.22, 1);
}
.nav-links li::after {
    content: "";
    position: absolute;
    border-radius: 5px;
    bottom: -17%;
    right: 10%;
    left: 10%;
    width: 0%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.829);
    transition: all 0.2 cubic-bezier(0.19, 1, 0.22, 1);
}

.nav-links li:hover::after {
    width: 100%;
}

.nav-links li a {
    color: white;
    padding: 1em;
}
.nav-links li a:hover {
    color: rgba(255, 255, 255, 0.829);
}

.background {
    backdrop-filter: blur(2px);
    background-color: rgba(5, 5, 10, 0.6);
}
</style>
