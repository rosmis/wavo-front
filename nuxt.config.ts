// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        routeRules: {
            "/api/**": { proxy: `${process.env.NUXT_WAVO_API_URL}/**` },
            "/hubspot/**": { proxy: `${process.env.NUXT_HUBSPOT_FORM_URL}/**` },
        },
    },
    runtimeConfig: {
        public: {
            axeptioClientId: process.env.NUXT_AXEPTIO_CLIENT_ID,
        },
    },
    modules: ["@vueuse/nuxt", "@nuxt/ui", "@nuxtjs/sitemap"],
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
