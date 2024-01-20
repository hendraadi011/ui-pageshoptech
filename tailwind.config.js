/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                "inter": ['Inter'],
                "circular": ['circular Std']
            },
            colors: {
                "ungu": "#5d50c6",
                "pink": "#F85E9F",
                "orange": "#ff5722",
                'grey': '#222831',
            },
            dropShadow: {
                "sm-shadow": [
                    '0px 548px 219px rgba(0,0,0, 0.01)',
                    '0px 308px 185px rgba(0,0,0, 0.04)',
                    '0px 137px 137px rgba(0,0,0, 0.06)',
                    '0px 34px 75px rgba(0,0,0, 0.07)',
                    '0px 0px 0px rgba(0,0,0, 0.07)'
                ]
            }
        },
    },
    plugins: [],
}