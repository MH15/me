/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `matt hall`,
    siteUrl: `https://matthall.ml`,
    description: `A devlog.`,
    socials: [
      {
        url: `https://github.com/mh15`,
        name: `Github`
      },
      {
        url: `https://instagram.com/matthallosu`,
        name: `Instagram`
      },
      {
        url: `mailto:matthew349hall@hotmail.com`,
        name: `Email`
      }
    ]
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
        ],
      },
    },
  ],
}
