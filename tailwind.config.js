/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Dark_cyan: "hsl(158, 36%, 37%)",
                c_Cream: " hsl(30, 38%, 92%)",
                c_Very_dark_blue: "hsl(212, 21%, 14%)",
                c_Dark_grayish_blue: "hsl(228, 12%, 48%)",
            },
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
                fraunces: ["Fraunces", "serif"]
            }
        },
    },
    plugins: [],
}

