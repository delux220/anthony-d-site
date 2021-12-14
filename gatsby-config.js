module.exports = {
  siteMetadata: {
    title: `Anthony DiDomenico`,
    description: `Stand up Comedian & Podcast Host`,
    author: `@gatsbyjs`,
    siteUrl: `https://anthonydidomenico.gatsbyjs.io/`,
  },
  plugins: [
  'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
     resolve: 'gatsby-plugin-postcss',
        options: {
            postCssPlugins: [require('tailwindcss')('./tailwind.config.js')],
         },
     },
     {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://immense-inlet-26477.herokuapp.com/api`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`event`],
        singleTypes: [{
          name: `podcast`,
          endpoint: `podcast?populate=*`,
        },{
          name: `about-page`,
          endpoint: `about-page?populate=*`,
        },
        {
          name: `social-media`,
          endpoint: `social-media?populate=*`,
        },
        {
          name: `contact-page`,
          endpoint: `contact-page?populate=*`,
        }],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
