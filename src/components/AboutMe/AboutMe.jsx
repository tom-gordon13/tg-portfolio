import { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group';
// import './LandingPageText.css'


export default function LandingPage() {
    const [showTest, setShowTest] = useState(false)
    const [testClasses, setTestClasses] = useState('d-none')

    useEffect(() => {
        setShowTest(!showTest)
    }, []);

    function hideTest() {
        setTestClasses("d-none");
    }

    function showBlock(node) {
        setTestClasses("d-block");
        // node.style.opacity = 0;
    }

    function removeOpacity(node) {
        node.style.opacity = 1;
    }

    return (
        <>
            <div className="main-container">
                <h1 className='main-header'>About Me</h1>
                <h1 className='secondary-header'>Full-Stack Software Engineer</h1>
            </div>

        </>
    )
}