require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

const metaData = require('./gatsby-metadata');

module.exports = {
    siteMetadata: metaData,
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-gatsby-cloud',
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: process.env.GA_TRACKING_ID,
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        'gatsby-plugin-mdx',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
    ],
};
