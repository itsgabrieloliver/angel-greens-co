import type { Config } from 'tailwindcss'

export default {
    content: ['./app/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
        fontFamily: {
            'poppins': ['Poppins', 'ui-sans-serif', 'system-ui']
        }
    },
    plugins: [],
} satisfies Config