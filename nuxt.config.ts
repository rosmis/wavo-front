// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            API_BASE_URL: process.env.NUXT_WAVO_API_URL,
        },
    },
    modules: ["@vueuse/nuxt", "nuxt-icon", '@nuxt/ui'],
    devtools: { enabled: true },
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
