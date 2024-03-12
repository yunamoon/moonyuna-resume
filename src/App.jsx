import React, { useRef, useState } from 'react';
import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Experiences from './components/experiences/Experiences';
import Projects from './components/projects/Projects'
import OtherSkills from './components/skills/OtherSkills';
import Skills from './components/skills/Skills';
import Footer from './components/Footer';
import Technologies from './components/technologies/Technologies';


function App() {
  const [check , setCheck] = useState(true)
  
  const handleThema = () => {
      setCheck(!check);
  }
  return (
  <div className={`${check? 'dark' : 'white'}`}>
  <Header handleThema={handleThema} check={check}/>
  <Intro check={check}/>
  <Experiences check={check}/>
  <Projects check={check}/>
 <Technologies check={check}/>
  <Footer check={check}/>
  </div>
  )
}

export default App
