/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,ts}", "./projects/**/*.{html,ts}"],
    darkMode: "class",
    theme: {
        fontFamily: {
            display: ["Oswald", "sans-serif"],
            body: ["Poppins", "sans-serif"],
        },
        container: {
            center: true,
            padding: "1.5rem",
        },
        extend: {},
    },
    plugins: [],
};
