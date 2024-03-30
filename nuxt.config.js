export default defineNuxtConfig({
    app: {
        pageTransition: { name: "page", mode: "out-in" }
    },

    site: {
        logo: "/favicon.png",
        url: process.env.NUXT_APP_URL,
        name: "LAN Trainer",
        description: "A platform for learning and improving your English skills."
    },

    devtools: { enabled: true },

    modules: [
        "@bg-dev/nuxt-naiveui",
        "@pinia/nuxt",
        "@nuxtjs/i18n",
        "@nuxtjs/seo"
    ],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },

    css: ["~/assets/scss/main.scss"],

    i18n: {
        vueI18n: "./i18n.config.js",
        locales: ["en", "vi"],
        defaultLocale: "en",
        strategy: "no_prefix"
    }
});
