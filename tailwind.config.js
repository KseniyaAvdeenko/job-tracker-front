/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                'bg': {
                    100: '#fffefb',
                    200: '#f5f4f1',
                    300: '#cccbc8',
                },
                'primary': {
                    100: '#d4eaf7',
                    200: '#b6ccd8',
                    300: '#3b3c3d',
                },
                'accent': {
                    100: '#71c4ef',
                    200: '#00668c',
                },
                'text': {
                    100: '#1d1c1c',
                    200: '#313d44',
                },
            },
            screens: {
                'sm': '320px',
                'md': '430px',
                'lg': '768px',
                'xl': '1024px',
                '2xl': '1280px',
            }
        },
    },
    plugins: [],
}

