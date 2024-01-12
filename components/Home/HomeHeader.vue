<template>
    <UiLevel column space="xl">
        <div class="flex h-screen justify-between items-center relative">
            <div class="flex flex-col gap-6 items-start relative">
                <UiTitle tag="h1" size="4xl">Prenez de l'avance</UiTitle>

                <p class="text-white text-lg">
                    Prenez de l'avance, <br />
                    Revendez demain.
                </p>

                <UiInput
                    :modelValue="email"
                    placeholder="Votre email"
                    type="email"
                    full
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

            <img src="/img/vomero.png" loading="lazy" alt="nike vomero" class="w-1/2" />

            <p
                class="text-[#55CED5] absolute bottom-8 -translate-x-1/2 left-1/2"
            >
                Wavo simplifie la vie des revendeurs de seconde main.
            </p>
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
