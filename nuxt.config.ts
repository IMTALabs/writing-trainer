// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
        vueI18n: "./i18n.config.js"
    }
});
