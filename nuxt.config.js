export default defineNuxtConfig({
    app: {
        pageTransition: { name: "page", mode: "out-in" },
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1"
        }
    },

    site: {
        url: process.env.APP_URL,
        logo: "/favicon.png"
    },

    devtools: { enabled: true },

    modules: [
        "@bg-dev/nuxt-naiveui",
        "@pinia/nuxt",
        "@nuxtjs/i18n",
        "@vueuse/nuxt",
        "@nuxtjs/supabase",
        "nuxt-og-image"
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
                baseUrl: process.env.API_BASE_URL,
                serverUrl: process.env.API_SERVER_URL
            },
            pusher: {
                key: process.env.PUSHER_APP_KEY,
                cluster: process.env.PUSHER_APP_CLUSTER
            }
        }
    }
});
