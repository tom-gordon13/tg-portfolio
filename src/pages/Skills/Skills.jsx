import './Skills.css'

export default function Skills() {
    return (
        <div className='main-container-skills d-flex flex-column align-items-start mt-5'>
            <h1 className='main-header'>Skills</h1>
            <hr className="hr1" />
            <div className="skill-container">
                <h1 className='secondary-header'>Programming Languages</h1>
                <div className="skill-list">
                    <i className="devicon-javascript-plain icon"><h3>JavaScript</h3></i>
                    <i className="devicon-python-plain icon"><h3>Python</h3></i>
                    <i className="devicon-html5-plain icon"><h3>HTML 5</h3></i>
                    <i className="devicon-css3-plain icon"><h3>CSS 3</h3></i>
                </div>
            </div>
            <hr className="hr1" />
            <div className="skill-container">
                <h1 className='secondary-header'>Application Frameworks/Database Tools</h1>
                <div className="skill-list">
                    <i className="devicon-react-original icon"><h3>React</h3></i>
                    <i className="devicon-nodejs-plain icon"><h3>Node.JS</h3></i>
                    <i className="devicon-mongodb-plain icon"><h3>MongoDB</h3></i>
                    <i className="devicon-express-original icon"><h3>Express</h3></i>
                    <i className="devicon-django-plain icon"><h3>Django</h3></i>
                    <i className="devicon-postgresql-plain icon"><h3>PostgreSQL</h3></i>
                    {/* <i className="devicon-microsoftsqlserver-plain icon"><h3>MS SQL Server</h3></i> */}
                </div>
                <hr className="hr1" />
                <div className="skill-container">
                    <h1 className='secondary-header'>Additional Tools</h1>
                    <div className="skill-list">
                        <i className="devicon-github-original icon"><h3>GitHub</h3></i>
                        <i className="devicon-linux-plain icon"><h3>Linux</h3></i>
                        <i className="devicon-bootstrap-plain icon"><h3>Bootstrap</h3></i>
                        <i className="devicon-figma-plain icon"><h3>Figma</h3></i>
                        <i className="devicon-heroku-original icon"><h3>Heroku</h3></i>

                    </div>
                </div>
            </div>
        </div>
    )
}