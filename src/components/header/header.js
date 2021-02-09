import React, { Component } from 'react';
import Typing from 'react-typing-animation';

const words = ['Hello', 'Szia', 'Hallo', 'こんにちは', 'Hola',  'Ciao'];

const AnimatedTypingComponent = () => (
	  <Typing>
	    <span>Hello</span>
		<Typing.Delay ms={1000} />
		<Typing.Backspace count={5} />
		<span>Hola</span>
		<Typing.Delay ms={1000} />
		<Typing.Backspace count={4} />
		<span>Szia</span>
		<Typing.Delay ms={1000} />
		<Typing.Backspace count={4} />
		<span>こんにちは</span>
		<Typing.Delay ms={1000} />
		<Typing.Backspace count={5} />
		<span>Hallo</span>
		<Typing.Delay ms={1000} />
		<Typing.Backspace count={5} />
		<span>Hello</span>
	  </Typing>
);

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
          <header id="home">
            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#skills">Skills</a></li>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>

                  <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                  <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                </ul> {/* end #nav */}
            </nav> {/* end #nav-wrap */}
            <div className="row banner">
                <div className="banner-text">
                  <h1 className="responsive-headline">{AnimatedTypingComponent()}</h1>
                  <h1 className="responsive-headline"> I'm {resumeData.name}</h1>
                  <h3>I'm a full stack developer, data engineer and solutions architect creating powerful
                  software using modern technology. <br /> <a className="smoothscroll" href="#about">Start scrolling to see more</a>.</h3>
                  <hr />
                  <ul className="social">
                    <li><a href="https://www.linkedin.com/in/connor-kunstek-3833a3106/" target="_blank"><i className="fa fa-linkedin" /></a></li>
                    <li><a href="https://github.com/ConnorKunstek" target="_blank"><i className="fa fa-github" /></a></li>
                  </ul>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
            </p>
        </header>
      </React.Fragment>
    );
  }
}
