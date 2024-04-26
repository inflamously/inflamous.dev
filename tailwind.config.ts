import type {Config} from 'tailwindcss'

export default {
    content: ['./app/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            'primary': "#FFC94AFF",
            'secondary': '#DC9557FF',
            'tertiary': '#795458FF',
            'quaternary': '#453F78FF'
        },
        spacing: {
            zero: '0',
            1: '0.5rem',
            2: '1rem',
            4: '2rem',
        },
        extend: {},
    },
    plugins: [],
} satisfies Config