<template>
    <UiLevel column space="xl" id="contact" class="w-full">
        <div class="overflow-hidden w-full">
            <UiTitle
                tag="h2"
                size="3xl"
                class="w-full text-left gs_blinds_bottom title-4"
            >
                Nous contacter
            </UiTitle>
        </div>

        <UiLevel column class="w-full" space="lg">
            <label for="firstName" class="w-full">
                <span class="text-slate-400">Nom Prénom *</span>

                <UiInput
                    :modelValue="formData[1].value"
                    type="text"
                    label="firstName"
                    required
                    input-style="contact"
                    class="pt-2"
                    @update:modelValue="formData[1].value = $event"
                />
            </label>

            <label for="email" class="w-full">
                <span class="text-slate-400">Email *</span>

                <UiInput
                    :modelValue="formData[0].value"
                    type="email"
                    label="email"
                    required
                    input-style="contact"
                    class="pt-2"
                    @update:modelValue="formData[0].value = $event"
                />
            </label>

            <label for="sneakersNumber" class="w-full">
                <span class="text-slate-400">Nombre de sneakers</span>

                <UiInput
                    :modelValue="formData[2].value"
                    type="text"
                    label="sneakersNumber"
                    required
                    input-style="contact"
                    class="pt-2"
                    @update:modelValue="formData[2].value = $event"
                />
            </label>

            <label for="message" class="w-full">
                <span class="text-slate-400">Votre message *</span>

                <textarea
                    :value="formData[3].value"
                    id="message"
                    rows="10"
                    class="bg-transparent text-white w-full border-b border-slate-400 focus:border-b-[#ff6a6587]"
                    @input="formData[3].value = $event.target.value"
                ></textarea>
            </label>

            <UiLevel align="right" class="w-full">
                <UiButton
                    icon="material-symbols:send-outline"
                    padded
                    :loading="loading"
                    @click="sendContactForm()"
                >
                    Envoyer
                </UiButton>
            </UiLevel>
        </UiLevel>
    </UiLevel>
</template>

<script lang="ts" setup>
const toast = useToast();
const loading = ref(false);

onMounted(() => useScrollTrigger(["title-4"]));

const formData = ref([
    {
        objectTypeId: "0-1",
        name: "email",
        value: "",
    },
    {
        objectTypeId: "0-1",
        name: "firstname",
        value: "",
    },
    {
        objectTypeId: "0-1",
        name: "nombre_de_sneakers",
        value: "",
    },
    {
        objectTypeId: "0-1",
        name: "message",
        value: "",
    },
]);

async function sendContactForm() {
    if (
        !formData.value[0].value ||
        !formData.value[1].value ||
        !formData.value[3].value
    ) {
        toast.add({ title: "Veuillez remplir tous les champs obligatoires" });
        return;
    }

    if (!checkEmailValidity(formData.value[0].value)) {
        toast.add({ title: "L'email n'est pas valide" });
        return;
    }

    loading.value = true;

    try {
        await fetch(`/hubspot`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fields: formData.value,
            }),
        });
    } catch (error: any) {
        toast.add({ title: `Une erreur s'est produite: ${error}` });
    }

    toast.add({ title: "Votre message a bien été envoyé" });

    loading.value = false;
    resetForm();
}

function resetForm() {
    formData.value.forEach((element) => {
        element.value = "";
    });
}
</script>

<style scoped>
.cta-submit {
    transition: all 0.2s ease-in-out;
}
.cta-submit:hover {
    background-color: #ff6a65;
}
</style>
