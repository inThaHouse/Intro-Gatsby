module.exports = {
  siteMetadata: {
    // This can be accessed in the graphql playground through the Site type
    title: 'Frontend Masters Gatsby Workshop',
    description: 'A course teaching Gatsby',
  },
  // If your plugin doesn't require additional config, you can simply list the plugin name as a string
  // If you need to configure the plugin, see gatsby-plugin-mdx example below.
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp', // looks for data and transforms it into another type of data
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout.js'),
        },
      },
    },
    {
      // This plugin allows contents from local files to be used as data in graphql
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'src/posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'src/images',
      },
    },
  ],
}
