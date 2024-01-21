// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            API_BASE_URL: process.env.NUXT_WAVO_API_URL,
            HUBSPOT_URL: process.env.NUXT_HUBSPOT_FORM_URL,
        },
    },
    nitro: {
        routeRules: {
            "/api/**": { proxy: `${process.env.NUXT_WAVO_API_URL}/**` },
            "/hubspot/**": { proxy: `${process.env.NUXT_HUBSPOT_FORM_URL}/**` },
        },
    },
    modules: ["@vueuse/nuxt", "@nuxt/ui"],
    devtools: { enabled: true },
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
