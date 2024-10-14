/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./assets/js/**/*.js"],
    theme: {
        fontFamily: {
            sans: ["'Rubik'", 'sans-serif']
        },
        extend: {
            colors: {
                'primary': {
                    '50': '#fbf8f1',
                    '100': '#f5efdf',
                    '200': '#eee2ca', // base primary
                    '300': '#ddc394',
                    '400': '#cea369',
                    '500': '#c38d4c',
                    '600': '#b57841',
                    '700': '#976037',
                    '800': '#7a4d32',
                    '900': '#63402b',
                    '950': '#352015',
                },
                'secondary': {
                    '50': '#f9f5f3',
                    '100': '#f2e9e2',
                    '200': '#e3d1c5',
                    '300': '#d2b19f',
                    '400': '#bf8d78',
                    '500': '#b1745e',
                    '600': '#a46252',
                    '700': '#894f45',
                    '800': '#6f423d',
                    '900': '#583632', // base secondary
                    '950': '#301c1a',
                },
            }
        }
    },
    // corePlugins: {
    //     preflight: false,
    // },
    plugins: [],
}
