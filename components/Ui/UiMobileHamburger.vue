<template>
    <ul
        class="flex flex-col h-screen items-center bg-[#05050ac4] z-30 justify-center gap-8 absolute inset-0"
    >
        <li>
            <NuxtLink class="text-xl" to="#concept" @click="$emit('close')">
                Concept
            </NuxtLink>
        </li>
        <li>
            <NuxtLink
                class="text-xl"
                to="#how-it-works"
                @click="$emit('close')"
            >
                Comment ça marche
            </NuxtLink>
        </li>
        <li>
            <NuxtLink class="text-xl" to="#pricing" @click="$emit('close')">
                Tarifs
            </NuxtLink>
        </li>
        <li>
            <NuxtLink class="text-xl" to="#contact" @click="$emit('close')">
                Nous contacter
            </NuxtLink>
        </li>
        <li>
            <UiButton
                class="text-xl"
                size="sm"
                to="#pricing"
                padded
                @click="$emit('close')"
            >
                S'abonner
            </UiButton>
        </li>
    </ul>
</template>
