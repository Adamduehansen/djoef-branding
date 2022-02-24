module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      skov: {
        base: '#2f4441',
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
  safelist: [
    {
      pattern: /rotate-(0|90|180|270)/,
    },
    {
      pattern: /(fill|bg)-(skov|dis)-base/,
    },
    {
      pattern: /(fill|bg)-(skov|dis)-lys/,
    },
    {
      pattern: /(fill|bg)-(skov|dis)-signal/,
    },
  ],
};
