import { Link } from 'react-router-dom'
import * as userService from "../../utilities/users-service"
import './NavBar.css'

export default function NavBar() {
    


    return (
        <nav>
            <div className="logo">
                <Link to="/" className='link'>
                    <img src="/favicon.png" alt="" height="150" width="175" />
                </Link>

            </div>
            <div className="link-container">
                <Link to="skills" className='link'>Skills</Link>
                &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                <Link to="projects" className='link'>Projects</Link>
                &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                <Link to="contact-me" className='link'>Contact Me</Link>
            </div>

            
        </nav>
    )
}