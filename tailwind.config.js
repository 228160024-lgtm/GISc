import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                gisc: {
                    forest: '#0a3d62',
                    teal: '#12b48b',
                    lime: '#7dd56f',
                    ink: '#0b132b',
                },
            },
        },
    },
    plugins: [forms],
};
