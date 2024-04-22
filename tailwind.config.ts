import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        /**
         * Overwrite
         */
        colors: {
            'color-primary': "#FFC94AFF",
            'color-secondary': '#DC9557FF',
            'color-tertiary': '#795458FF',
            'color-quaternary': '#453F78FF'
        },
        /**
         * Extend
         */
        extend: {
            spacing: {
                '2': '1rem'
            }
        },
    },
    plugins: [],
};
export default config;
