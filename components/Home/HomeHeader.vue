<template>
    <UiLevel column space="xl">
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

            <UiLevel class="ratio1">
                <img
                    src="/img/vomero.png"
                    alt="nike vomero"
                    class="w-2/3 md:w-full fadeIn opacity-0"
                />
            </UiLevel>

            <div
                class="overflow-hidden absolute bottom-12 -translate-x-1/2 left-1/2"
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

        <UiSocialProofs />
    </UiLevel>
</template>

<script lang="ts" setup>
const toast = useToast();

onMounted(() => {
    useBlindRevealAnimation("gs_blinds");
    useFadeInAnimation("fadeIn");
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
    flex: 1;
}

.ratio2 {
    flex: 1.5;
}
</style>
