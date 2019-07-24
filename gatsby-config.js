const path = require('path');
module.exports = ({contentPath = 'data', basePath = '/'}) => ({
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-plugin-sass",
      options: {
        includePaths: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'sass')],
        useResolveUrlLoader: {
          options: {
            sourceMap: true, //default is false
          },
        },
      },
    },
    'gatsby-theme-ui',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: contentPath
      }
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'Event'
      }
    }
  ],
  siteMetadata: {
    title: `Title from siteMetadata`,
  }
});
