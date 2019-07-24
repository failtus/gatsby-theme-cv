import React from 'react';

const Header = () => (
  <header className="header navbar-fixed-top">
    {/*// {Navbar}*/}
    <nav className="navbar" role="navigation">
      <div className="container">
        {/*{Brand and toggle get grouped for better mobile display}*/}
        <div className="menu-container js_nav-item">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="toggle-icon"/>
          </button>

          {/*{Logo}*/}
          <div className="logo">
            <a className="logo-wrap" href="#body">
              <img className="logo-img logo-img-main" src={"img/logo.png"} alt="Gatsby CV theme Logo"/>
              <img className="logo-img logo-img-active" src={"img/logo-dark.png"} alt="Gatsby CV theme Logo"/>
            </a>
          </div>
          {/*{End Logo}*/}
        </div>

        {/*{Collect the nav links, forms, and other content for toggling}*/}
        <div className="collapse navbar-collapse nav-collapse">
          <div className="menu-container">
            <ul className="nav navbar-nav navbar-nav-right">
              <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#body">Home</a></li>
              <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#about">About</a></li>
              <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#experience">Experience</a></li>
              <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#work">Work</a></li>
              <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        {/*{End Navbar Collapse}*/}
      </div>
    </nav>
    {/*{Navbar}*/}
  </header>
);

export default Header;