// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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

    imports: {
        dirs: ["store"],
    },
});
