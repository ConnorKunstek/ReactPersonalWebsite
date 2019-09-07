import React, { Component } from 'react';
export default class Skills extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="skills">
          {/* Skills
        ----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="bars">
                <ul className="skills">
                  <li><span className="bar-expand lambda" /><em>Front End</em></li>
                  <li><span className="bar-expand postgres" /><em>Back End</em></li>
                  <li><span className="bar-expand node" /><em>Data Engineering</em></li>
                  <li><span className="bar-expand react" /><em>Event Driven Architecture</em></li>
                  <li><span className="bar-expand cassandra" /><em>Database Systems</em></li>
                  <li><span className="bar-expand react" /><em>Containerization</em></li>
                  <li><span className="bar-expand kafka" /><em>Cloud Technology</em></li>
                </ul>
              </div>{/* end skill-bars */}
            </div> {/* main-col end */}
          </div> {/* End skills */}
        </section>

        </React.Fragment>
      );
    }
  }
