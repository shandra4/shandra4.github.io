module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shandra's Portfolio`,
        short_name: `Shandra's Portfolio`,
        start_url: '/',
        icon: 'src/assets/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-129766167-1',
        head: true,
      },
    },
  ],
}
