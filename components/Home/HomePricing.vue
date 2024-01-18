<template>
    <UiLevel column :space="isMobile ? 'lg' : 'xl'" id="pricing">
        <UiLevel
            class="w-full md:justify-center justify-between !flex-row"
            :space="isMobile ? 'sm' : null"
        >
            <p
                class="text-sm md:text-base"
                :class="{
                    'text-white': isMonthlyPaiementSelected,
                    'text-[#FF6A65]': !isMonthlyPaiementSelected,
                }"
            >
                Paiement annuel
            </p>
            <UToggle
                v-model="isMonthlyPaiementSelected"
                color="rose"
                class="!bg-[#FF6A65]"
            />
            <p
                class="text-sm md:text-base"
                :class="{
                    'text-white': !isMonthlyPaiementSelected,
                    'text-[#FF6A65]': isMonthlyPaiementSelected,
                }"
            >
                Paiement mensuel
            </p>
        </UiLevel>

        <div
            class="grid gap-12 md:gap-8 max-w-[850px] grid-cols-1 md:grid-cols-2"
        >
            <UiLevel
                align="left"
                space="lg"
                column
                class="py-10 px-6 border border-white rounded-lg"
            >
                <UiLevel column>
                    <UiTitle tag="h3" size="xl" class="mb-2">Standart</UiTitle>

                    <p class="text-white text-center">
                        <b class="text-lg">{{
                            isMonthlyPaiementSelected ? "40€" : "36€"
                        }}</b>
                        <br />
                        par mois
                    </p>

                    <p class="italic font-thin text-center">
                        soit
                        {{ isMonthlyPaiementSelected ? "480€" : "432€" }}
                        annuel <br />
                        <span class="text-sm">{{
                            isMonthlyPaiementSelected
                                ? ""
                                : "(-10% de réduction)"
                        }}</span>
                    </p>
                </UiLevel>

                <UiButton
                    @click="
                        generateStripeCheckoutSessionUrl(
                            isMonthlyPaiementSelected
                                ? PricingTypes.STANDARD_MONTHLY
                                : PricingTypes.STANDARD_YEARLY
                        )
                    "
                    >S'abonner maintenant</UiButton
                >

                <UiLevel column>
                    <p class="font-bold">
                        Toutes les fonctionnalités essentielles pour
                        l'optimisation de votre business :
                    </p>

                    <p class="text-left w-full">
                        - Avance de trésorerie illimitée sur tes paires
                    </p>

                    <p class="text-left w-full">
                        - 20 paires inclues dans l'abonnement <br />
                        (3€ / paires par mois au delà)
                    </p>

                    <p class="text-left w-full">
                        - Tous tes produits consignés listés sur nos
                        marketplaces
                    </p>

                    <p class="text-left w-full">
                        - Frais de transport offert pour les dépôts de plus de 2
                        paires
                    </p>

                    <p class="text-left w-full">
                        - On envoie ta paire à ton acheteur (5€ de frais pour la
                        France)
                    </p>

                    <p class="text-left w-full">
                        - Wavo Signals pour 5 de tes paires
                    </p>
                </UiLevel>
            </UiLevel>

            <UiLevel
                align="left"
                space="lg"
                column
                class="py-10 px-6 border relative border-white rounded-lg"
            >
                <p
                    class="py-2 px-4 rounded-lg text-sm absolute -top-5 left-1/2 -translate-x-1/2 bg-[#262626] text-white"
                >
                    Le + populaire
                </p>

                <UiLevel column>
                    <UiTitle tag="h3" size="xl" class="mb-2">Évolution</UiTitle>

                    <p class="text-white text-center">
                        <b class="text-lg">{{
                            isMonthlyPaiementSelected ? "60€" : "52€"
                        }}</b>
                        <br />
                        par mois
                    </p>

                    <p class="italic font-thin">
                        soit
                        {{ isMonthlyPaiementSelected ? "720€" : "624€" }}
                        annuel <br />
                        <span class="text-sm">{{
                            isMonthlyPaiementSelected
                                ? ""
                                : "(-13,3% de réduction)"
                        }}</span>
                    </p>
                </UiLevel>

                <UiButton
                    @click="
                        generateStripeCheckoutSessionUrl(
                            isMonthlyPaiementSelected
                                ? PricingTypes.EVOLUTION_MONTHLY
                                : PricingTypes.EVOLUTION_YEARLY
                        )
                    "
                    >S'abonner maintenant</UiButton
                >

                <UiLevel column class="w-full">
                    <p class="text-left font-bold w-full">
                        L'offre standart + :
                    </p>

                    <p class="text-left w-full">- Avance de trésorie boostés</p>

                    <p class="text-left w-full">
                        - 20 paires inclues dans l'abonnement
                    </p>

                    <p class="text-left w-full">- 2e/paires/mois au dela</p>

                    <p class="text-left w-full">
                        - Pas de frais sur l'envoi direct à un acheteur
                    </p>

                    <p class="text-left w-full">
                        - Wavo Signals sur toutes les paires
                    </p>
                </UiLevel>
            </UiLevel>
        </div>
    </UiLevel>
</template>

<script lang="ts" setup>
import { PricingTypes } from "~/types/pricingTypes";

const runtimeConfig = useRuntimeConfig();

defineProps<{
    isMobile: boolean;
}>();

const isMonthlyPaiementSelected = ref(false);

async function generateStripeCheckoutSessionUrl(pricingType: PricingTypes) {
    try {
        await fetch(
            `${runtimeConfig.value.API_BASE_URL}/stripe/generate-checkout-session`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    pricingType,
                }),
            }
        ).then((res) => console.log(JSON.stringify(res)));
    } catch (e) {
        console.error(e);
    }
}
</script>
