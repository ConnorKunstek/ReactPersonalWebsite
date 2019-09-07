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
                  <li><span className="bar-expand react" /><em>React</em></li>
                  <li><span className="bar-expand node" /><em>Node</em></li>
                  <li><span className="bar-expand lambda" /><em>Lambda</em></li>
                  <li><span className="bar-expand kafka" /><em>Kafka</em></li>
                  <li><span className="bar-expand postgres" /><em>PostgreSQL</em></li>
                  <li><span className="bar-expand cassandra" /><em>Cassandra</em></li>
                </ul>
              </div>{/* end skill-bars */}
            </div> {/* main-col end */}
          </div> {/* End skills */}
        </section>

        </React.Fragment>
      );
    }
  }
