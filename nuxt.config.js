export default defineNuxtConfig({
    app: {
        pageTransition: { name: "page", mode: "out-in" }
    },

    devtools: { enabled: true },

    modules: [
        "@bg-dev/nuxt-naiveui",
        "@pinia/nuxt",
        "@nuxtjs/i18n",
        "@vueuse/nuxt",
        "@nuxtjs/supabase"
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

    supabase: {
        redirect: false
    },

    runtimeConfig: {
        public: {
            app: {
                url: process.env.APP_URL,
                domain: process.env.APP_DOMAIN
            },
            api: {
                baseUrl: process.env.API_BASE_URL
            }
        }
    }
});
