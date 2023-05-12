const TAILWIND_PLUGINS = [
    import('@tailwindcss/aspect-ratio').then((o) => o),
    import('@tailwindcss/forms').then((o) => o),
    import('@tailwindcss/typography').then((o) => o),
];

const CUSTOM_PLUGINS = [import('@iconify/tailwind').then((o) => o)];

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            display: ['Oswald', 'sans-serif'],
            body: ['Poppins', 'sans-serif'],
        },
        container: {
            center: true,
            padding: '1.5rem',
        },
        extend: {},
    },
    plugins: [...TAILWIND_PLUGINS, ...CUSTOM_PLUGINS],
};
