/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
            fontFamily: {
                custom: ['JetBrains Mono'],
            },
        },
    },
    plugins: [require('tailwindcss-primeui')],
};
