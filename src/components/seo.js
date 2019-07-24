import React from 'react';
import { Helmet } from 'react-helmet';
const SEO = ({title}) => (
  <Helmet>
    <meta charSet="utf-8"/>
    <title>{title}</title>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta content="width=device-width, initial-scale=1" name="viewport"/>
    <meta content="" name="description"/>
    <meta content="Anto Khan" name="author"/>
    <meta content="gatsby, gatsby-theme, gatsby-plugin, gatsby-theme-cv, cv-theme" name="keywords"/>
  </Helmet>
);

export default SEO;