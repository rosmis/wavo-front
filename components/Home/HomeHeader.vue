<template>
    <UiLevel column space="xl">
        <UiLevel class="h-screen relative py-28 md:py-0" space="lg">
            <div class="flex flex-col gap-6 items-start ratio2 relative">
                <p class="text-slate-400 text-sm">
                    Consigne digitale pour toutes tes sneakers
                </p>

                <UiTitle tag="h1" class="text-3xl md:text-[3em] leading-tight"
                    >Vendre tes sneakers <br />
                    sans les galères du resell
                </UiTitle>

                <p class="text-white text-base md:text-lg">
                    Paiement tellement rapide qu'il a lieu avant la vente.
                    <br />
                    Accède à toutes les marketplaces pro sans effort.
                </p>

                <UiInput
                    :modelValue="email"
                    placeholder="Laisse-nous ton email pour garder contact"
                    type="email"
                    class="w-full md:w-2/3"
                    icon="material-symbols:send-outline"
                    input-style="default"
                    :loading="loading"
                    @update:modelValue="email = $event"
                    @send="submitEmail()"
                />
            </div>

            <UiLevel class="ratio1">
                <img
                    src="/img/vomero.png"
                    alt="nike vomero"
                    class="w-2/3 md:w-full"
                />
            </UiLevel>

            <a
                class="text-[#55CED5] absolute flex items-center justify-center gap-2 text-center w-full hover:underline bottom-12 -translate-x-1/2 left-1/2"
                href="https://www.hub612.com/"
                target="_blank"
            >
                Accompagné par
                <img
                    src="/img/icons/Logo_hub.svg"
                    class="w-[40px]"
                    loading="lazy"
                    alt="logo_hub"
                />
            </a>
        </UiLevel>

        <UiSocialProofs />
    </UiLevel>
</template>

<script lang="ts" setup>
const toast = useToast();

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
