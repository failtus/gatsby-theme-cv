import React from 'react';

const Experience = () => (
  <div id="experience">
    <div className="bg-color-sky-light" data-auto-height="true">
      <div className="container content-lg">
        <div className="row">
          <div className="col-sm-3 sm-margin-b-30">
            <div className="text-right sm-text-left">
              <h2 className="margin-b-0">Experience</h2>
              <p>Batman would be jealous.</p>
            </div>
          </div>
          <div className="col-sm-8 col-sm-offset-1">
            <div className="row row-space-2 margin-b-4">
              <div className="col-md-4 md-margin-b-4">
                <div className="service" data-height="height">
                  <div className="service-element">
                    <i className="service-icon icon-chemistry"/>
                  </div>
                  <div className="service-info">
                    <h3>HTML5/CSS3</h3>
                    <p className="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                  </div>
                  <a href="#" className="content-wrapper-link"/>
                </div>
              </div>
              <div className="col-md-4 md-margin-b-4">
                <div className="service bg-color-base wow zoomIn" data-height="height" data-wow-duration=".3"
                     data-wow-delay=".1s">
                  <div className="service-element">
                    <i className="service-icon color-white icon-screen-tablet"/>
                  </div>
                  <div className="service-info">
                    <h3 className="color-white">Photoshop</h3>
                    <p className="color-white margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat
                      dolor</p>
                  </div>
                  <a href="#" className="content-wrapper-link"/>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service" data-height="height">
                  <div className="service-element">
                    <i className="service-icon icon-badge"/>
                  </div>
                  <div className="service-info">
                    <h3>Front-end</h3>
                    <p className="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                  </div>
                  <a href="#" className="content-wrapper-link"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Experience;
