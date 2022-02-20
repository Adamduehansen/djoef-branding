module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      rotate: {
        270: '270deg',
      },
    },
  },
  safelist: ['rotate-0', 'rotate-90', 'rotate-180', 'rotate-270'],
};
