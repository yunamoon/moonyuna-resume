import React, { useRef } from 'react';
import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Experiences from './components/experiences/Experiences';
import Projects from './components/projects/Projects'
import OtherSkills from './components/skills/OtherSkills';
import Skills from './components/skills/Skills';
import Footer from './components/Footer';


function App() {

  return (
  <>
  <Header />
  <Intro/>
  <Experiences/>

  <Projects />


  <Skills/>
  <OtherSkills/>

  <Footer/>
  </>
  )
}

export default App
