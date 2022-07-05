import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar({ currTop, linkClick }) {
    function handleClick(evt) {
        const value = parseInt(evt.currentTarget.id)
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
                    <img src="/iconmonstr-user-1.svg" alt="" className='nav-icon' />
                    <span className="link-text" >About Me</span>
                </div>
                
                <div className='link logo-holder' id='2' key='2' onClick={handleClick}>
                    <img src="/iconmonstr-tools-14.svg" alt="" className='nav-icon' />
                    <span className="link-text">Skills</span>
                </div>
                
                <div className='link logo-holder' id='3' key='3' onClick={handleClick}>
                    <img src="/iconmonstr-code-7.svg" alt="" className='nav-icon'  />
                    <span className="link-text" >Projects</span>
                </div>
                
                <div className='link logo-holder' id='4' key='4' onClick={handleClick}>
                    <img src="/iconmonstr-email-1.svg" alt="" className='nav-icon' />
                    <span className="link-text" >Contact Me</span>
                </div>
            </div>


        </nav>
    )
}