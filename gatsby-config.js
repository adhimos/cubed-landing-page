module.exports = {
  siteMetadata: {
    title: `Cubed`,
    description: `Notre expertise IaC aux portes de votre entreprise.`,
    author: `Cubed`,
    siteUrl: `https://cubedev.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-mdx`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/images`,
        },
      },
    }
  ],
}
