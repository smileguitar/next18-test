const { i18n } = require('./next-i18next.config')

module.exports = {
  async redirects() {
    return [
      {
        source: '/vaping-wiki/:match*',
        destination: 'https://blog.180smoke.ca/:match*', // Matched parameters can be used in the destination
        permanent: true
      }
    ];
  },
  i18n,
}
