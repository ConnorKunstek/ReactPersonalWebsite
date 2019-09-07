import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
            <div className="row">
                <div className="three columns">
                  <img className="profile-pic" src="files/profilepic.jpg" alt="" />
                </div>
                <div className="nine columns main-col">
                  <h2>About Me</h2>
                  <p>I have always loved to create -
                      to build and break things. I learn best from my mistakes
                      and enjoy problem solving of any kind. This has translated
                      into a professional career in software development. I am
                      a Solutions Architect, able to understand complex technical
                      issues and design, develop, and deploy software accordingly.
                      I have experience in full stack development, event driven
                      architecture, queueing services, data streams, relational
                      and non-relational database systems, and container technology.
                  </p>
                  <div className="row">
                    <div className="columns contact-details">
                      <h2>Contact Details</h2>
                      <p className="address">
                        <span>Connor Kunstek</span><br />
                        <span>Cincinnati, OH
                        </span><br />
                        <span>(513) 384-7261</span><br />
                        <span>connork720@gmail.com</span>
                      </p>
                    </div>
                    <div className="columns download">
                      <p>
                        <a href="files/ConnorKunstekResume.pdf" className="button" target="_blank"><i className="fa fa-download" />Download Resume</a>
                      </p>
                    </div>
                  </div> {/* end row */}
                </div> {/* end .main-col */}
            </div>
        </section>
      </React.Fragment>
    );
  }
}
