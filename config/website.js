const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Raphaël Colson - Curriculum Vitae', // Navigation and Site Title
  siteTitleAlt: 'Raph Colson', // Alternative Site title for SEO
  siteTitleShort: 'Colson', // short_name for manifest
  siteHeadline: 'Creating marvelous art & blazginly fast websites', // Headline for schema.org JSONLD
  siteUrl: 'https://rafacolsn.github.io/cv', // Domain of your site. No trailing slash!
  siteLanguage: 'fr', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'CV de Raphaël Colson - Développeur web junior avec une expérience en communication et en animation de groupes',
  author: 'Raphaël Colson', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@rafacolson', // Twitter Username
  ogSiteName: 'Raphaël Colson', // Facebook Site Name
  ogLanguage: 'fr_BE', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
