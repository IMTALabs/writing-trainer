/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue"
    ],
    theme: {
        fontFamily: {
            "noto-mono": ["'Noto Sans Mono'", "monospace"]
        },
        extend: {}
    },
    plugins: []
};
