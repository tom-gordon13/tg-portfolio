import 'animate.css';
import "./LandingPage.css"
import LandingPageText from '../../components/LandingPageText/LangingPageText'; 
import Skills from '../../components/Skills/Skills'
import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react'


export default function LandingPage() {
    return (
        <>
            <LandingPageText />
            <Skills />
        </>
    )
}