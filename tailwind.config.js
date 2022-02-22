module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      skov: {
        main: '#2f4441',
        lys: '#a4b392',
        signal: '#60ffa4',
      },
    },
    extend: {
      rotate: {
        270: '270deg',
      },
    },
  },
  safelist: ['rotate-0', 'rotate-90', 'rotate-180', 'rotate-270'],
};
