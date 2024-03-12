/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./Pages/**/*.{razor,html,cshtml}", "./Shared/**/*.{razor,html,cshtml}"],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography'), require('tailwindcss-animated')],
}