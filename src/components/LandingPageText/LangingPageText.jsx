import { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group';
import './LandingPageText.css'


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
                    enterActive: 'animate__fadeIn',
                    exitActive: 'animate__fadeOut'
                }}
                    onEnter={showBlock}
                    onEntered={removeOpacity}
                    className={`animate__animated ${testClasses} `}>
                   <section>
                    <div className="content">
                        <h2>Tom Gordon</h2>
                        <h2>Tom Gordon</h2>
                    </div>
                </section>
                </CSSTransition>
                
                <div className="second-container">
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
                    <hr className='hr1' />
                </CSSTransition>


                <CSSTransition in={showTest} timeout={1000} classNames={{
                    enterActive: 'animate__bounceInUp',
                    exitActive: 'animate__bounceOut'
                }}
                    onEnter={showBlock}
                    onEntered={removeOpacity}
                    // onExited={hideTest}
                    className={`animate__animated ${testClasses} tertiary-header`}>
                    <h1>I'm a full-stack software engineer living in Boulder, Colorado with a background in sales and financial analysis.</h1>
                </CSSTransition>
                </div>
            </div>


        </>
    )
}