import './App.css';
import { Routes, Route } from 'react-router-dom'
// import ReactCSSTransitionGroup from 'react-transition-group';
import AboutMe from '../AboutMe/AboutMe'
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import NavBar from '../../components/NavBar/NavBar';
import LandingPage from '../LandingPage/LandingPage';
import ContactMe from '../ContactMe/ContactMe'


function App() {
  
  
  return (
    <main className="App">
   
    <>
    <NavBar />
    
    <Routes>
      {/*  Route components in here */}
      
      <Route path="" element={<LandingPage />} />
      <Route path="skills" element={<Skills />} />
      <Route path="about-me" element={<AboutMe />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact-me" element={<ContactMe />} />
      
    </Routes>
    </>
    
    
    </main>
  );
}

export default App;
