module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        keyframes: {
            typewriter: {
                to: {
                    left: '100%',
                },
            },
            delete: {
                to: {
                    left: '0',
                },
            },
            blink: {
                to: {
                    background: '#FFF',
                },
            },
        },
        extend: {
            backgroundImage: {
                hulk: "url('../public/images/hulk.jpg')",
                spiderman: "url('../public/images/spiderman.jpg')",
                drstrange: "url('../public/images/strange.jpg')",
                ironman: "url('../public/images/ironman.jpg')",
            },
        },
    },
    safelist: [
        'bg-hulk',
        'bg-spiderman',
        'bg-drstrange',
        'bg-ironman',
        '4',
        '7',
        '9',
        '11',
        '14',
    ],
    plugins: [],
};
