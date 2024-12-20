import React from 'react';

import Navbar from './components/header/navbar';
import Home from './components/homepage/home';
import About from './components/aboutpage/about';
import Skills from './components/skills/skill';
import Education from './components/education/education';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';

function App() {
  return (
    <div>
      <Navbar />
       <Home />
      <About />
      <Skills />
     <Education />
       <Projects />
     <Contact />
    </div>
  );
}

export default App;
