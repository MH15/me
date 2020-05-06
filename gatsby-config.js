/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Matt Hall`,
    titleTemplate: `%s · Matt Hall`,
    description: `A devlog.`,
    url: `https://matthall.codes`,
    bio: `A devlog.`,
    siteUrl: `https://matthall.ml`,
    twitterUsername: "@matthallosu",
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
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/pages`,
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
          "gatsby-remark-component"
        ],

      },
    },
  ],
}
