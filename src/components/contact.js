import React from 'react';

const Contact = () => (
  <div id="contact">
    <div className="bg-color-sky-light">
      <div className="container content-lg">
        <div className="row">
          <div className="col-sm-3 sm-margin-b-30">
            <div className="text-right sm-text-left">
              <h2 className="margin-b-0">Contacts</h2>
              <p>Hire me.</p>
            </div>
          </div>
          <div className="col-sm-8 col-sm-offset-1">
            <div className="row">
              <div className="col-md-3 col-xs-6 md-margin-b-30">
                <h5>Location</h5>
                <a href="#">Brookyln, New York</a>
              </div>
              <div className="col-md-3 col-xs-6 md-margin-b-30">
                <h5>Phone</h5>
                <a href="#">+77 234 548 00 00</a>
              </div>
              <div className="col-md-3 col-xs-6">
                <h5>Email</h5>
                <a href="mailto:#">alex.teseira@gmail.com</a>
              </div>
              <div className="col-md-3 col-xs-6">
                <h5>Web</h5>
                <a href="#">alex.teseira.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;