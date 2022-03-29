module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      skov: {
        base: '#2f4441',
        lys: '#a4b392',
        signal: '#cbff9e',
      },
      jord: {
        base: '#a48471',
        lys: '#ceb7af',
        signal: '#fd4369',
      },
      hav: {
        base: '#354867',
        lys: '#bccbca',
        signal: '#3548ff',
      },
      sand: {
        base: '#e6cda3',
        lys: '#ebe0cd',
        signal: '#ffff78',
      },
      dis: {
        base: '#47494f',
        lys: '#cbc9c5',
        signal: '#1c1e24',
      },
      canvas: '#f5f5f2',
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
      pattern: /(fill|bg)-(skov|jord|hav|sand|dis|canvas)-base/,
    },
    {
      pattern: /(fill|bg)-(skov|jord|hav|sand|dis|canvas)-lys/,
    },
    {
      pattern: /(fill|bg)-(skov|jord|hav|sand|dis|canvas)-signal/,
    },
  ],
};
