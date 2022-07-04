import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar({ currTop, linkClick }) {
    function handleClick(evt) {
        const value = parseInt(evt.target.id)
        linkClick(window.innerHeight * value)
    }


    return (
        <nav className='nav-container'>
            <div className="logo">
                <div to="/" className='link-logo' id='0' key='0' onClick={handleClick}>
                    <img src="/favicon_noBG.png" alt="" height="100" width="120" />
                </div>

            </div>
            <div className="link-container d-flex flex-column">
                <div className='link logo-holder' id='1' key='1' onClick={handleClick}>
                    <img src="/iconmonstr-tools-14.svg" alt="" className='nav-icon' />
                    <span className="link-text">Skills</span>
                </div>
                &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                <div className='link' id='2' key='2' onClick={handleClick}>Projects</div>
                &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                <div className='link' id='3' key='3' onClick={handleClick}>Contact Me</div>
            </div>


        </nav>
    )
}