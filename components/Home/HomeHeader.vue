<template>
    <UiLevel column :space="isMobile ? 'sm' : 'xl'" class="w-full">
        <img
            alt="Light ray background"
            fetchpriority="high"
            width="1000"
            height="1000"
            decoding="async"
            data-nimg="1"
            class="pointer-events-none absolute -top-20 left-0 right-0 z-0 mx-auto hidden h-full w-full select-none md:block"
            style="color: transparent"
            srcset="/img/bghero_md.webp 1x, /img/bghero_lg.webp 2x"
            src="/img/bghero_lg.webp"
        />

        <UiLevel class="md:h-screen h-full md:w-fit w-full relative py-28 md:py-0" space="lg">
            <div class="flex flex-col gap-6 items-start ratio2 relative">
                <div class="overflow-hidden">
                    <p
                        class="text-slate-400 text-sm gs_blinds_bottom gs_blinds"
                    >
                        L’outil partenaire de vos vendeurs
                    </p>
                </div>

                <div class="overflow-hidden">
                    <UiTitle
                        tag="h1"
                        class="text-3xl gs_blinds_bottom gs_blinds md:text-[2.5em] leading-tight"
                        >Des paiements en avance,<br />
                        vos vendeurs adorent.
                    </UiTitle>
                </div>

                <div class="overflow-hidden">
                    <p class="text-white !leading-7 gs_blinds_bottom gs_blinds">
                        Avec Wavo, offrez une avance de paiement instantanée,
                        <br />
                        directement sur votre plateforme, pour croître avec vos
                        <br />
                        vendeurs.
                    </p>
                </div>

                <div class="overflow-hidden w-full">
                    <UiInput
                        :modelValue="email"
                        placeholder="Recevoir vos accès sandbox gratuitement"
                        type="email"
                        class="w-full md:w-2/3 gs_blinds_bottom gs_blinds"
                        icon="material-symbols:send-outline"
                        input-style="default"
                        :loading="loading"
                        @update:modelValue="email = $event"
                        @send="submitEmail()"
                    />
                </div>
            </div>

            <div
                class="flex-1 ratio1 relative w-[400px]"
                @click="handleShoeIndexChange()"
            >
                <HomeShoesWrapper
                    v-if="displayShoesAnimation"
                    :index="shoeIndex"
                    @loaded="isAssetLoaded = $event"
                />

                <UiInteractiveHover
                    :is-assets-loaded="isAssetLoaded"
                    @click="handleShoeIndexChange()"
                />

                <client-only>
                    <Vue3Lottie
                        :animation-data="Loader"
                        :height="200"
                        :width="200"
                        class="absolute top-1/2 left-1/2 -translate-x-1/2 opacity-0 -translate-y-1/2 transition-opacity duration-300"
                        :class="{
                            'opacity-100 ': !isAssetLoaded,
                        }"
                    />
                </client-only>
            </div>

            <div
                class="overflow-hidden absolute flex justify-center bottom-8 items-center gap-2 md:w-fit w-full -translate-x-1/2 left-1/2"
            >
                <UiLevel space="sm" class="md:flex-row !flex-row gs_blinds gs_blinds_bottom p-4">
                    <span class="text-slate-400 text-center"
                        >Accompagné par</span
                    >

                    <a href="https://www.hub612.com/" target="_blank">
                        <img
                            src="/img/icons/Logo_hub.svg"
                            class="w-[40px]"
                            loading="lazy"
                            alt="logo_hub"
                        />
                    </a>

                    <a href="https://www.lafrenchtech-stl.com/" target="_blank">
                        <img
                            src="/img/icons/french_tech.png"
                            class="w-[40px] -mt-2"
                            loading="lazy"
                            alt="logo_ft"
                        />
                    </a>
                </UiLevel>
            </div>
        </UiLevel>

        <UiSocialProofs :is-mobile="isMobile" />
    </UiLevel>
</template>

<script lang="ts" setup>
import Loader from "../../public/img/loader.json";

defineProps<{
    isMobile: boolean;
}>();

const toast = useToast();

const isAssetLoaded = ref(false);
const displayShoesAnimation = ref(false);

onMounted(() => {
    useBlindRevealAnimation("gs_blinds");
    setTimeout(() => (displayShoesAnimation.value = true), 500);
});

const email = ref("");
const loading = ref(false);
const shoeIndex = ref(0);

const handleShoeIndexChange = () => {
    shoeIndex.value++;
    setTimeout(() => (isAssetLoaded.value = false), 1200);
};

async function submitEmail() {
    if (!email.value) {
        toast.add({ title: "Veuillez rentrer un email" });
        return;
    }
    if (!checkEmailValidity(email.value)) {
        toast.add({ title: "Veuillez rentrer un email valide" });

        return;
    }

    loading.value = true;

    try {
        await fetch(`/api/contacts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email.value,
            }),
        }).then(() => toast.add({ title: "Votre email a bien été envoyé" }));
    } catch (e) {
        console.error(e);
    }

    email.value = "";
    loading.value = false;
}
</script>

<style scoped>
.ratio1 {
    aspect-ratio: 1 / 1;
}

.ratio2 {
    flex: 1.5;
}
</style>
