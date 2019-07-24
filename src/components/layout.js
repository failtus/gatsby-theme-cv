import React from 'react';
import SEO from "./seo";
import Header from "./header";
import IntroBlock from "./intro-block";
import About from "./about";
import Experience from "./experience";
import Work from "./work";
import Contact from "./contact";
import Footer from "./footer";

const Layout = ({ children, title }) => (
  <>
    <SEO title={title}/>
    <Header/>
    <IntroBlock/>
    <About/>
    <Experience/>
    <Work/>
    <Contact/>
    <Footer/>
    {children}
  </>
);

export default Layout;