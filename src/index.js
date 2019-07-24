import React from 'react';
import Layout from "./components/layout";
import './sass/layout.scss';
import { graphql } from 'gatsby';

const Bootstrap = ({ children, data: { site: { siteMetadata: { title } } } }) => (
  <Layout title={title}>
    {children}
  </Layout>
);
export default Bootstrap;

export const metaQuery = graphql`
  query metaQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

