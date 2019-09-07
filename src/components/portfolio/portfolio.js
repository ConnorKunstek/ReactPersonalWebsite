import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="portfolio">
<div className="row">
<div className="twelve columns collapsed">
  <h1></h1>
  {/* portfolio-wrapper */}
  <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
    <div className="columns portfolio-item">
      <div className="item-wrap">
        <a href="#modal-01" title>
          <img alt="" src="images/blueprintpng.png" />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>BluePrint JS</h5>
              <p>Web Design</p>
            </div>
          </div>
          <div className="link-icon"><i className="icon-plus" /></div>
        </a>
      </div>
    </div> {/* item end */}
    <div className="columns portfolio-item">
      <div className="item-wrap">
        <a href="#modal-02" title>
          <img alt="" src="images/react.png" />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>React JS</h5>
              <p>Web Development</p>
            </div>
          </div>
          <div className="link-icon"><i className="icon-plus" /></div>
        </a>
      </div>
    </div> {/* item end */}
    <div className="columns portfolio-item">
      <div className="item-wrap">
        <a href="#modal-03" title>
          <img alt="" src="images/node.png" />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>Node JS</h5>
              <p>Back End</p>
            </div>
          </div>
          <div className="link-icon"><i className="icon-plus" /></div>
        </a>
      </div>
    </div> {/* item end */}
    <div className="columns portfolio-item">
      <div className="item-wrap">
        <a href="#modal-04" title>
          <img alt="" src="images/lambda.png" />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>Lambda</h5>
              <p>Serverless, Event Driven</p>
            </div>
          </div>
          <div className="link-icon"><i className="icon-plus" /></div>
        </a>
      </div>
    </div> {/* item end */}
    <div className="columns portfolio-item">
      <div className="item-wrap">
        <a href="#modal-05" title>
          <img alt="" src="images/kafka.png" />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>Kafka</h5>
              <p>Queueing System</p>
            </div>
          </div>
          <div className="link-icon"><i className="icon-plus" /></div>
        </a>
      </div>
    </div> {/* item end */}
    <div className="columns portfolio-item">
      <div className="item-wrap">
        <a href="#modal-06" title>
          <img alt="" src="images/kinesis.png" />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>Kinesis</h5>
              <p>Data Streaming</p>
            </div>
          </div>
          <div className="link-icon"><i className="icon-plus" /></div>
        </a>
      </div>
    </div> {/* item end */}
    <div className="columns portfolio-item">
      <div className="item-wrap">
        <a href="#modal-07" title>
          <img alt="" src="images/postgres.png" />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>PostgreSQL</h5>
              <p>Relational DB</p>
            </div>
          </div>
          <div className="link-icon"><i className="icon-plus" /></div>
        </a>
      </div>
    </div> {/* item end */}
    <div className="columns portfolio-item">
      <div className="item-wrap">
        <a href="#modal-08" title>
          <img alt="" src="images/docker.png" />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>Docker</h5>
              <p>Containerization</p>
            </div>
          </div>
          <div className="link-icon"><i className="icon-plus" /></div>
        </a>
      </div>
    </div>  {/* item end */}
  </div> {/* portfolio-wrapper end */}
</div> {/* twelve columns end */}
{/* Modal Popup
      --------------------------------------------------------------- */}
<div id="modal-01" className="popup-modal mfp-hide">
  <img className="scale-with-grid" src="images/portfolio/modals/m-coffee.jpg" alt="" />
  <div className="description-box">
    <h4>Coffee Cup</h4>
    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
    <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
  </div>
  <div className="link-box">
    <a href="http://www.behance.net">Details</a>
    <a className="popup-modal-dismiss">Close</a>
  </div>
</div>{/* modal-01 End */}
<div id="modal-02" className="popup-modal mfp-hide">
  <img className="scale-with-grid" src="images/portfolio/modals/m-console.jpg" alt="" />
  <div className="description-box">
    <h4>Console</h4>
    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
    <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
  </div>
  <div className="link-box">
    <a href="http://www.behance.net">Details</a>
    <a className="popup-modal-dismiss">Close</a>
  </div>
</div>{/* modal-02 End */}
<div id="modal-03" className="popup-modal mfp-hide">
  <img className="scale-with-grid" src="images/portfolio/modals/m-judah.jpg" alt="" />
  <div className="description-box">
    <h4>Judah</h4>
    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
    <span className="categories"><i className="fa fa-tag" />Branding</span>
  </div>
  <div className="link-box">
    <a href="http://www.behance.net">Details</a>
    <a className="popup-modal-dismiss">Close</a>
  </div>
</div>{/* modal-03 End */}
<div id="modal-04" className="popup-modal mfp-hide">
  <img className="scale-with-grid" src="images/portfolio/modals/m-intothelight.jpg" alt="" />
  <div className="description-box">
    <h4>Into the Light</h4>
    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
    <span className="categories"><i className="fa fa-tag" />Photography</span>
  </div>
  <div className="link-box">
    <a href="http://www.behance.net">Details</a>
    <a className="popup-modal-dismiss">Close</a>
  </div>
</div>{/* modal-04 End */}
<div id="modal-05" className="popup-modal mfp-hide">
  <img className="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt="" />
  <div className="description-box">
    <h4>Farmer Boy</h4>
    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
    <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
  </div>
  <div className="link-box">
    <a href="http://www.behance.net">Details</a>
    <a className="popup-modal-dismiss">Close</a>
  </div>
</div>{/* modal-05 End */}
<div id="modal-06" className="popup-modal mfp-hide">
  <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt="" />
  <div className="description-box">
    <h4>Girl</h4>
    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
    <span className="categories"><i className="fa fa-tag" />Photography</span>
  </div>
  <div className="link-box">
    <a href="http://www.behance.net">Details</a>
    <a className="popup-modal-dismiss">Close</a>
  </div>
</div>{/* modal-06 End */}
<div id="modal-07" className="popup-modal mfp-hide">
  <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt="" />
  <div className="description-box">
    <h4>Origami</h4>
    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
    <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
  </div>
  <div className="link-box">
    <a href="http://www.behance.net">Details</a>
    <a className="popup-modal-dismiss">Close</a>
  </div>
</div>{/* modal-07 End */}
<div id="modal-08" className="popup-modal mfp-hide">
  <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt="" />
  <div className="description-box">
    <h4>Retrocam</h4>
    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
    <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
  </div>
  <div className="link-box">
    <a href="http://www.behance.net">Details</a>
    <a className="popup-modal-dismiss">Close</a>
  </div>
</div>{/* modal-01 End */}
</div> {/* row End */}
</section>

      </React.Fragment>
    );
  }
}
