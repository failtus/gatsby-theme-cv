import React from 'react';

const About = () => (
  <div id="about">
    <div className="container content-lg">
      <div className="row">
        <div className="col-sm-3 sm-margin-b-30">
          <div className="text-right sm-text-left">
            <h2 className="margin-b-0">Intro</h2>
            <p>What I am all about.</p>
          </div>
        </div>
        <div className="col-sm-8 col-sm-offset-1">
          <div className="margin-b-60">
            <p>I'm Alex Teseira, orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.</p>
          </div>

          <div className="progress-box">
            <h5>PHP <span className="color-heading pull-right">87%</span></h5>
            <div className="progress">
              <div className="progress-bar bg-color-base" role="progressbar" style={{width: '87%'}}/>
            </div>
          </div>
          <div className="progress-box">
            <h5>HTML5 <span className="color-heading pull-right">96%</span></h5>
            <div className="progress">
              <div className="progress-bar bg-color-base" role="progressbar" style={{width: '96%'}}/>
            </div>
          </div>
          <div className="progress-box">
            <h5>JavaSript <span className="color-heading pull-right">52%</span></h5>
            <div className="progress">
              <div className="progress-bar bg-color-base" role="progressbar" style={{width: '52%'}}/>
            </div>
          </div>
          <div className="progress-box">
            <h5>Photoshop <span className="color-heading pull-right">77%</span></h5>
            <div className="progress">
              <div className="progress-bar bg-color-base" role="progressbar" style={{width: '77%'}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;