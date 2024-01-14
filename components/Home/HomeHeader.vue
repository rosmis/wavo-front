<template>
    <UiLevel column space="xl">
        <div class="flex h-screen gap-8 justify-between items-center relative">
            <div class="flex flex-col gap-6 items-start ratio2 relative">
                <p class="text-slate-400 text-sm">
                    Consigne digitale pour toutes tes sneakers
                </p>

                <UiTitle tag="h1" class="text-[3em] leading-tight"
                    >Vendre tes sneakers <br />
                    sans les galères du resell
                </UiTitle>

                <p class="text-white text-lg">
                    Paiement tellement rapide qu'il a lieu avant la vente.
                    <br />
                    Accède à toutes les marketplaces pro sans effort.
                </p>

                <UiInput
                    :modelValue="email"
                    placeholder="Laisse-nous ton email pour garder contact"
                    type="email"
                    class="w-2/3"
                    icon="material-symbols:send-outline"
                    @update:modelValue="email = $event"
                    @send="submitEmail()"
                />
                <p
                    v-if="isEmailInvalid"
                    class="text-sm absolute -bottom-8 left-0 text-red-500"
                >
                    Veuillez rentrer un email valide
                </p>
                <p
                    v-if="isEmailSent"
                    class="text-sm absolute -bottom-8 left-0 text-green-500"
                >
                    Votre email a bien été envoyé
                </p>
            </div>

            <div class="ratio1">
                <img
                    src="/img/vomero.png"
                    alt="nike vomero"
                    class="w-full"
                />
            </div>

            <a
                class="text-[#55CED5] absolute hover:underline bottom-8 -translate-x-1/2 left-1/2"
                href="https://www.hub612.com/"
                target="_blank"
            >
                Accompagné par HUB612
            </a>
        </div>

        <UiSocialProofs />
    </UiLevel>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();

const email = ref("");

const isEmailInvalid = ref(false);
const isEmailSent = ref(false);

async function submitEmail() {
    const emailRegexPatern = "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$";

    if (!email.value) {
        return;
    }
    if (!email.value.match(emailRegexPatern)) {
        isEmailInvalid.value = true;
        resetEmailParams();

        return;
    }

    try {
        await fetch(`${runtimeConfig.public.API_BASE_URL}/contacts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email.value,
            }),
        });
    } catch (e) {
        console.error(e);
    }

    email.value = "";
    isEmailSent.value = true;

    resetEmailParams();
}

function resetEmailParams() {
    setTimeout(() => {
        isEmailInvalid.value = false;
        isEmailSent.value = false;
    }, 3000);
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
