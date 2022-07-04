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
                <div to="/" className='link' id='0' key='0' onClick={handleClick}>
                    <img src="/favicon_noBG.png" alt="" height="150" width="175" />
                </div>

            </div>
            <div className="link-container d-flex flex-column">
                <div className='link' id='1' key='1' onClick={handleClick}>Skills</div>
                &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                <div className='link' id='2' key='2' onClick={handleClick}>Projects</div>
                &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                <div className='link' id='3' key='3' onClick={handleClick}>Contact Me</div>
            </div>

            
        </nav>
    )
}