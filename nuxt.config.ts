// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        pageTransition: { name: "page", mode: "out-in" }
    },
    devtools: { enabled: true },
    modules: ["@bg-dev/nuxt-naiveui", "@pinia/nuxt", "@nuxtjs/i18n"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    css: ["~/assets/scss/main.scss"],
    i18n: {
        vueI18n: "./i18n.config.js",
        baseUrl: "http://localhost:3000"
    }
});
