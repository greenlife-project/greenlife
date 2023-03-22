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
            'white': "#ffffff",
            'black': "#0A1044",
            'main': "#088B64",
            'secondary': "#113D3C",
            'grey': "#314968",
            'bg': "#F8F8F8",
            'green': "#D6FFE1",
            'stroke': "#F3F3F3",
            'red': "#EB0C5C"
        },
    },
    plugins: [],
}
