module.exports = {
  siteMetadata: {
    title: `David Q. Jin: Photographer + Designer + Software Developer`,
    description: `David Q. Jin is a photographer, designer, and software developer. As a photographer, he takes pictures of nature and couples in love. As a web/graphic designer, he creates branding materials and websites for creative professionals, helping them turn ideas into businesses. As a T-shaped, user-centered, detail-oriented full-stack software developer, he writes clean, well-tested code; is always learning and experimenting; enjoys working with a variety of languages, frameworks, and cloud technologies in agile teams; has a passion for developing applications that exceed business expectations, delight end users, and make a lasting impact; and takes great pleasure in mentoring and helping people grow.`,
    author: `David Q. Jin <david.q.jin@gmail.com>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
