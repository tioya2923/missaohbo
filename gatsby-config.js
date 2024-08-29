module.exports = {
  siteMetadata: {
    title: `Missão no Huambo`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `wordpress-cache`,
        path: `.wordpress-cache/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://localhost:10003/graphql`,
        schema: {
          requestConcurrency: 5,
          previewRequestConcurrency: 2,
        },
        develop: {
          hardCacheMediaFiles: true,
        },
        type: {
          MediaItem: {
            localFile: {
              requestConcurrency: 5,
            },
          },
        },
      },
    },
  ],
};
