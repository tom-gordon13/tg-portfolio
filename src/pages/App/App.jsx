import './App.css';
import { Routes, Route } from 'react-router-dom'
// import ReactCSSTransitionGroup from 'react-transition-group';
import AboutMe from '../AboutMe/AboutMe'
import Skills from '../../components/Skills/Skills'
import Projects from '../../components/Projects/Projects'
import NavBar from '../../components/NavBar/NavBar';
import LandingPage from '../LandingPage/LandingPage';
import ContactMe from '../ContactMe/ContactMe'
import { useState } from 'react'


function App() {
  const [currTop, setCurrTop] = useState(0)

  function linkClick(value) {
    setCurrTop(value)
    window.scrollTo(0, value)
  }

  return (
    <main className="App">

      <>
        <div className="row">
          <div className="col-11">
            <NavBar currTop={currTop} linkClick={linkClick}/>
          </div>

          <div className="col">
          <Routes>
            {/*  Route components in here */}

            <Route path="" element={<LandingPage />} />
            <Route path="skill" element={<Skills />} />
            <Route path="about-me" element={<AboutMe />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact-me" element={<ContactMe />} />

          </Routes>
          </div>
        </div>
      </>


    </main>
  );
}

export default App;
