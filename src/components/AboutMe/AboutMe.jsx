import { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group';
import './AboutMe.css'


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
            <div className="main-container-about">
                <h1 className='main-header-about'>About Me</h1>
                <h4 className='secondary-header-about'>I graduated from Emory University in 2019 with degrees in Finance and Quantitative Sciences. This unique educational combination allowed me to explore broad business ideas alongside technical concepts within statistics and data science.</h4>
                <h4 className='secondary-header-about'>After graduating from Emory, I spent a few years working in financial services, gaining experience across various fixed income products in both sales and research functions. More recently, I completed an intensive 12-week software engineering bootcamp with General Assembly.</h4>
                <h4 className='secondary-header-about'>When I'm not coding, I love spending my time training for an competing in endurance athletic events. While at Emory, I competed all four years on the varsity swim team, winning one team and four individual national championships. I picked up running and cycling after graduating and have since become a competitive triathlete.</h4>
            </div>

        </>
    )
}