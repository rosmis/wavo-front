<template>
    <UiLevel column space="xl" id="contact" class="w-full">
        <UiTitle tag="h2" size="3xl" class="w-full text-left"
            >Nous contacter</UiTitle
        >

        <UiLevel column class="w-full" space="lg">
            <label for="firstName" class="w-full">
                <span class="text-slate-400">Nom Prénom *</span>

                <UiInput
                    :modelValue="formData.firstName"
                    type="text"
                    label="firstName"
                    required
                    input-style="contact"
                    class="pt-2"
                    @update:modelValue="formData.firstName = $event"
                />
            </label>

            <label for="email" class="w-full">
                <span class="text-slate-400">Email *</span>

                <UiInput
                    :modelValue="formData.email"
                    type="email"
                    label="email"
                    required
                    input-style="contact"
                    class="pt-2"
                    @update:modelValue="formData.email = $event"
                />
            </label>

            <label for="sneakersNumber" class="w-full">
                <span class="text-slate-400">Nombre de sneakers</span>

                <UiInput
                    :modelValue="formData.sneakersNumber"
                    type="text"
                    label="sneakersNumber"
                    required
                    input-style="contact"
                    class="pt-2"
                    @update:modelValue="formData.sneakersNumber = $event"
                />
            </label>

            <label for="message" class="w-full">
                <span class="text-slate-400">Votre message *</span>

                <textarea
                    :value="formData.message"
                    id="message"
                    rows="10"
                    class="bg-transparent text-white w-full border-b border-slate-400 focus:border-b-[#ff6a6587]"
                    @input="formData.message = $event.target.value"
                ></textarea>
            </label>

            <UiLevel align="right" class="w-full">
                <div
                    class="text-white flex items-center gap-4 cta-submit cursor-pointer !py-2 !px-14 bg-[#232323] rounded-3xl"
                    @click="sendContactForm()"
                >
                    Envoyer

                    <Icon
                        name="material-symbols:send-outline"
                        class="text-3xl"
                    />
                </div>
            </UiLevel>
        </UiLevel>
    </UiLevel>
</template>

<script lang="ts" setup>
const toast = useToast();

const formData = ref({
    firstName: "",
    email: "",
    sneakersNumber: "",
    message: "",
});

const requiredFormFieldsDict = ref({
    firstName: "Nom Prénom",
    email: "Email",
    message: "Message",
});

async function sendContactForm() {
    if (
        !formData.value.firstName ||
        !formData.value.email ||
        !formData.value.message
    ) {
        toast.add({ title: "Veuillez remplir tous les champs obligatoires" });
        return;
    }

    if (!checkEmailValidity(formData.value.email)) {
        toast.add({ title: "L'email n'est pas valide" });
        return;
    }

    toast.add({ title: "Votre message a bien été envoyé" });
    resetForm();
}

function resetForm() {
    formData.value = {
        firstName: "",
        email: "",
        sneakersNumber: "",
        message: "",
    };
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
