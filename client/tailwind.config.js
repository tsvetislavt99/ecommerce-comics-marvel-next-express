module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                hulk: "url('../public/images/hulk.jpg')",
                spiderman: "url('../public/images/spiderman.jpg')",
                drstrange: "url('../public/images/strange.jpg')",
                ironman: "url('../public/images/ironman.jpg')",
            },
        },
    },
    safelist: ['bg-hulk', 'bg-spiderman', 'bg-drstrange', 'bg-ironman'],
    plugins: [],
};
