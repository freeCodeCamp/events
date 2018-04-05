require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: 'freeCodeCamp Events',
  },
  plugins: ['gatsby-plugin-react-helmet'],
};
