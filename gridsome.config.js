const tailwind = require('tailwindcss');
const nesting = require('tailwindcss/nesting');

module.exports = {
  siteName: `LightLabs | A web3 focussed development company specialising in Discord,
  Website Design/Development, Smart Contracts and Audits.`,
  siteUrl: process.env.FRONTEND_URI,
  icon: {
    favicon: './src/favicon.png',
    touchicon: './src/favicon.png',
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwind, nesting],
      },
    },
  },
  plugins: [
    'gridsome-plugin-robots',
    '@gridsome/plugin-sitemap',
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-PN4KCK8',
        enabled: true,
        debug: true,
      },
    },
  ],
};
