/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["../**/*{html,razor,js,cs}"],
    safelist: [
        {
            pattern: /bg-\w+-\d+/,
        },
        {
            pattern: /text-\w+-\d+/,
        },
    ],
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'dl': '910px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                inventory: { '500': "#6e964c" },
                light: "#F7F8FD",
                'current': {
                    '50': '#f5f7fa',
                    '100': '#eaeef4',
                    '200': '#d1dbe6',
                    '300': '#a9bcd0',
                    '400': '#7a98b6',
                    '500': '#597b9c',
                    '600': '#466383',
                    '700': '#3a506a',
                    '800': '#334559',
                    '900': '#2e3c4c',
                    '950': '#1e2733'
                }
            }

        }
    },
    plugins: [],
}