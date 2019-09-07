import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from  './components/testimonials/testimonials';
import Footer from './components/footer/footer';
import Skills from './components/skills/skills';
import resumeData from './resumeData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Footer />
      </div>
    );
  }
}

export default App;
