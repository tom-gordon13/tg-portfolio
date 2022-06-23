import 'animate.css';
import "./LandingPage.css"
import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react'


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
            <div className='main-container d-flex flex-column align-items-start'>
                <CSSTransition in={showTest} timeout={1000} classNames={{
                    enterActive: 'animate__flipInX',
                    exitActive: 'animate__bounceOut'
                }}
                    onEnter={showBlock}
                    onEntered={removeOpacity}
                    // onExited={hideTest}
                    className={`animate__animated ${testClasses} main-header`}>
                    <h1 className='main-header'>Tom Gordon</h1>
                </CSSTransition>

                <CSSTransition in={showTest} timeout={1000} classNames={{
                    enterActive: 'animate__bounceInLeft',
                    exitActive: 'animate__bounceOut'
                }}
                    onEnter={showBlock}
                    onEntered={removeOpacity}
                    // onExited={hideTest}
                    className={`animate__animated ${testClasses} secondary-header`}>
                    <h1>Full-Stack Software Engineer</h1>
                </CSSTransition>
                
                


                <CSSTransition in={showTest} timeout={3000} classNames={{
                    enterActive: 'animate__fadeIn',
                    exitActive: 'animate__bounceOut'
                }}
                    onEnter={showBlock}
                    onEntered={removeOpacity}
                    // onExited={hideTest}
                    className={`animate__animated ${testClasses} hr1`}>
                    <hr className='hr1'/>
                </CSSTransition>


                <CSSTransition in={showTest} timeout={1000} classNames={{
                    enterActive: 'animate__bounceInUp',
                    exitActive: 'animate__bounceOut'
                }}
                    onEnter={showBlock}
                    onEntered={removeOpacity}
                    // onExited={hideTest}
                    className={`animate__animated ${testClasses} tertiary-header`}>
                    <h1>I'm a full-stack software engineer living in Boulder, Coloardo with a background in sales and financial analysis.</h1>
                </CSSTransition>
            </div>

        </>
    )
}