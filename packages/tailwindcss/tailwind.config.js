/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme')
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
            'custom-white': "#ffffff",
            'custom-black': "#0A1044",
            'main': "#088B64",
            'secondary': "#113D3C",
            'custom-grey': "#314968",
            'custom-gray': "#999DA6",
            'bg': "#F8F8F8",
            'custom-green': "#D6FFE1",
            'custom-stroke': "#F3F3F3",
            'custom-red': "#EB0C5C"
        },
    },
    plugins: [],
}
