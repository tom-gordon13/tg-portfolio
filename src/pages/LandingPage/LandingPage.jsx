import 'animate.css';
import "./LandingPage.css"
import LandingPageText from '../../components/LandingPageText/LangingPageText'; 
import Skills from '../../components/Skills/Skills'
import Projects from '../../components/Projects/Projects'
import ContactMe from '../../components/ContactMe/ContactMe'
import AboutMe from '../../components/AboutMe/AboutMe'
import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react'


export default function LandingPage() {
    

    return (
        <>
            <LandingPageText />
            <AboutMe />
            <Skills />
            <Projects />
            <ContactMe />
        </>
    )
}