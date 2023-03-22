/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
        "../../packages/ui/components/**/*.{ts,tsx}",
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
        },
        fontWeight: {
            regular: '400',
            semibold: '600',
            extrabold: '800',
        },
        colors: {
        },
    },
    plugins: [],
}
