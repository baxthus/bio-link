/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
            fontFamily: {
                custom: ['Inter'],
            },
        },
    },
    plugins: [
        require('@catppuccin/tailwindcss')({
            defaultFlavour: 'mocha',
        }),
    ],
};
