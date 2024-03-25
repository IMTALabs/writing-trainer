// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@bg-dev/nuxt-naiveui", "@pinia/nuxt"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    css: ["~/assets/scss/main.scss"]
});
