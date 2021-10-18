module.exports = {
  siteMetadata: {
    title: `Dise Design`,
    description: `Personal portfolio site for Dia Seung - Made with React and Gatsby`,
    author: `@diaseu`,
    siteUrl: `https://www.disedesign.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true,          // use prettier to format JS code output (default)
        svgo: true,              // use svgo to optimize SVGs (default)
        svgoConfig: {
          plugins: [
            { removeViewBox: true }, // remove viewBox when possible (default)
            { cleanupIDs: true },    // remove unused IDs and minify remaining IDs (default)
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            exportLocalsConvention: 'camelCaseOnly'
          }
        }
      }
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: `pages`
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lato`,
          `Josefin Sans\:300,400,600,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
