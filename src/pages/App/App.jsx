import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useState } from "react"
import { getUser } from "../../utilities/users-service"
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AboutMe from '../AboutMe/AboutMe'
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import LandingPage from '../LandingPage/LandingPage';


function App() {
  // const [user, setUser] = useState(getUser())
  const [user, setUser] = useState('tom')
  
  return (
    <main className="App">
    { user ? 
    <>
    <NavBar user={user}/>
    
    <Routes>
      {/*  Route components in here */}
      
      <Route path="" element={<LandingPage />} />
      <Route path="skills" element={<Skills />} />
      <Route path="about-me" element={<AboutMe />} />
      <Route path="projects" element={<Projects />} />
      {}
    </Routes>
    </>
    : 
    <AuthPage setUser={setUser}/>}
    
    </main>
  );
}

export default App;
