import { Link } from 'react-router-dom'
import * as userService from "../../utilities/users-service"
import './NavBar.css'

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        // Remove token using the user service
        userService.logOut();
        // Update user state in App
        setUser(null)
    }


    return (
        <nav>
            <div className="logo">
                <Link to="/" className='link'>
                    <img src="/tg_logo1.png" alt="" height="150" width="175" />
                </Link>

            </div>
            <div className="link-container">
                <Link to="/about-me" className='link'>About Me</Link>
                &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                <Link to="skills" className='link'>Skills</Link>
                &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                <Link to="projects" className='link'>Projects</Link>
                &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                <Link to="contact-me" className='link'>Contact Me</Link>
            </div>

            {/* <Link to="" onClick={handleLogOut}>Log Out</Link> */}
        </nav>
    )
}