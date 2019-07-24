import React from 'react';

const IntroBlock = () => (
  <div className="promo-block parallax-window" data-parallax="scroll" data-image-src={"img/1920x1080/01.jpg"} style={{backgroundImage: `url(${"img/1920x1080/01.jpg"})`, backgroundAttachment: 'fixed'}}>
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="promo-block-divider">
            <h1 className="promo-block-title">Alex <br/> Teseira</h1>
            <p className="promo-block-text">Web Designer &amp; Front-end Developer</p>
          </div>
          <ul className="list-inline">
            <li><a href="#" className="social-icons"><i className="icon-social-facebook"></i></a></li>
            <li><a href="#" className="social-icons"><i className="icon-social-twitter"></i></a></li>
            <li><a href="#" className="social-icons"><i className="icon-social-dribbble"></i></a></li>
            <li><a href="#" className="social-icons"><i className="icon-social-behance"></i></a></li>
            <li><a href="#" className="social-icons"><i className="icon-social-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default IntroBlock;