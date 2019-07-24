import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="content container">
      <div className="row">
        <div className="col-xs-6">
          <img className="footer-logo" src={"img/logo-dark.png"} alt="Aircv Logo"/>
        </div>
        <div className="col-xs-6 text-right sm-text-left">
          <p className="margin-b-0"><a className="fweight-700"
                                       href="http://keenthemes.com/preview/aircv/">Aircv</a> Theme Powered by: <a
            className="fweight-700" href="http://www.keenthemes.com/">KeenThemes.com</a></p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;