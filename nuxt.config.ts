// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@bg-dev/nuxt-naiveui"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    css: ["~/assets/scss/main.scss"],
    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1"
        }
    }
});
