<template>
    <UiLevel column space="xl" class="w-full">
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

        <UiLevel class="h-screen relative py-28 md:py-0" space="lg">
            <div class="flex flex-col gap-6 items-start ratio2 relative">
                <div class="overflow-hidden">
                    <p
                        class="text-slate-400 text-sm gs_blinds_bottom gs_blinds"
                    >
                        Consigne digitale pour toutes tes sneakers
                    </p>
                </div>

                <div class="overflow-hidden">
                    <UiTitle
                        tag="h1"
                        class="text-3xl gs_blinds_bottom gs_blinds md:text-[3em] leading-tight"
                        >Vends tes sneakers <br />
                        sans les galères du resell
                    </UiTitle>
                </div>

                <div class="overflow-hidden">
                    <p
                        class="text-white text-base md:text-lg gs_blinds_bottom gs_blinds"
                    >
                        Reçois ton paiement avant la vente.
                        <br />
                        Accède à toutes les marketplaces pro sans effort.
                    </p>
                </div>

                <div class="overflow-hidden w-full">
                    <UiInput
                        :modelValue="email"
                        placeholder="Laisse-nous ton email"
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

            <div class="flex-1 w-full ratio1">
                <HomeShoesWrapper />
            </div>

            <div
                class="overflow-hidden absolute flex justify-center bottom-12 md:w-fit w-full -translate-x-1/2 left-1/2"
            >
                <a
                    class="flex items-center w-fit gs_blinds gs_blinds_bottom justify-center gap-2"
                    href="https://www.hub612.com/"
                    target="_blank"
                >
                    <span class="text-[#55CED5] hover:underline text-center"
                        >Accompagné par</span
                    >
                    <img
                        src="/img/icons/Logo_hub.svg"
                        class="w-[40px]"
                        loading="lazy"
                        alt="logo_hub"
                    />
                </a>
            </div>
        </UiLevel>

        <UiSocialProofs :is-mobile="isMobile" />
    </UiLevel>
</template>

<script lang="ts" setup>
defineProps<{
    isMobile: boolean;
}>();

const toast = useToast();

onMounted(() => {
    useBlindRevealAnimation("gs_blinds");
});

const email = ref("");
const loading = ref(false);

async function submitEmail() {
    if (!email.value) {
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
