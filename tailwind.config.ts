/* eslint-disable @typescript-eslint/naming-convention */
import { addDynamicIconSelectors } from '@iconify/tailwind';
import { type Config } from 'tailwindcss/types';

export default {
    content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
    safelist: [
        'text-green-500',
        'text-teal-500',
        'text-lime-500',
        'text-blue-500',
        'text-indigo-500',
        'text-purple-500',
        'text-violet-500',
        'text-yellow-500',
        'text-amber-500',
        'text-pink-500',
        'text-red-500',
        'text-rose-500',
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            serif: ['Castoro', 'serif'],
            mono: ['JetBrains Mono', 'monospace'],
            display: ['Instrument Sans', 'sans-serif'],
            handwriting: ['Indie Flower', 'cursive'],
        },
        container: {
            center: true,
            padding: '1.5rem',
        },
        extend: {
            backgroundColor: {
                'color-base': 'var(--color-background)',
                'color-base-accent': 'var(--color-background-accent)',
            },
            textColor: {
                'color-base': 'var(--color-foreground)',
                'color-base-accent': 'var(--color-foreground-accent)',
            },
            borderColor: {
                'color-base': 'var(--color-border)',
            },
            borderRadius: {
                base: 'var(--rounded)',
            },
            colors: {
                'primary-50': 'var(--color-primary-50)',
                'primary-100': 'var(--color-primary-100)',
                'primary-200': 'var(--color-primary-200)',
                'primary-300': 'var(--color-primary-300)',
                'primary-400': 'var(--color-primary-400)',
                'primary-500': 'var(--color-primary-500)',
                'primary-600': 'var(--color-primary-600)',
                'primary-700': 'var(--color-primary-700)',
                'primary-800': 'var(--color-primary-800)',
                'primary-900': 'var(--color-primary-900)',
                'primary-950': 'var(--color-primary-950)',
            },
            fontSize: {
                h1: 'var(--font-size-h1)',
                h2: 'var(--font-size-h2)',
                h3: 'var(--font-size-h3)',
                h4: 'var(--font-size-h4)',
                h5: 'var(--font-size-h5)',
                h6: 'var(--font-size-h6)',
                body: 'var(--font-size-body)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        addDynamicIconSelectors(),
    ],
} as Config;
