<template>
    <div class="custom-bg flex flex-col gap-16 items-center">
        <Navbar />

        <NuxtPage />
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h1,
h2,
h3 {
    font-family: "Jumper", "sans-serif";
    color: white;
}

* {
    font-family: "Montserrat", "sans-serif";
    font-weight: 400;
    color: white;
}

.custom-bg {
    background-color: rgb(5 5 10 / 1);
}
</style>
