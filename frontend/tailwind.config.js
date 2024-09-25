/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                "root-background": "url(/background.jpg)"
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"]
            },
            keyframes: {
                dropDown: {
                    "0%": { transform: "translateY(-10px)", opacity: 0 },
                    "100%": { transform: "translateY(10px)", opacity: 1 }
                }
            }
        },
    },
    plugins: [],
}
