export default defineNuxtConfig({
    app: {
        pageTransition: { name: "page", mode: "out-in" }
    },

    site: {
        logo: "/favicon.png",
        url: process.env.APP_URL,
        name: "LAN Trainer",
        description: "A platform for learning and improving your English skills."
    },

    devtools: { enabled: true },

    modules: [
        "@bg-dev/nuxt-naiveui",
        "@pinia/nuxt",
        "@nuxtjs/i18n",
        "@nuxtjs/seo",
        "@vueuse/nuxt"
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
    },

    runtimeConfig: {
        public: {
            api: {
                baseUrl: process.env.API_BASE_URL
            }
        }
    }
});
