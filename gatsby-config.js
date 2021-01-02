module.exports = {
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
	  `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/data/`,
      },
    },
	    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Json`, // a fixed string
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/assets/data/`,
      },
    },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-emotion`,
 
  ],
}
