import './Projects.css'
import ProjectBox from '../../components/ProjectBox/ProjectBox'

const projects = [
    {
        name: 'SuperFood',
        description: "SuperFood is a full MERN-stack web application that allows users to track their nutrient intake on a daily basis.",
        github_link: 'https://github.com/tom-gordon13/nutrition-tracker',
        deployed_link: 'http://super-food-app.herokuapp.com/',
        image: '/SuperFood_1.png',
        technologies: ['JavaScript, React, MongoDB, Node.JS, Express']
    }, 
    {
        name: 'MarkeTrace',
        description: "SuperFood is a Django-based web application where users can track custom buckets of publicly-traded securities",
        github_link: 'https://github.com/flyingisfreedom5/marketrace',
        deployed_link: 'http://keppa-sei.herokuapp.com/',
        image: '/MarkeTrace_1.png',
        technologies: ['Python, Django, PostgreSQL, Bootstrap']
    }, 
    {
        name: 'Keppa',
        description: "Keppa is a MEN-stack web application that allows runners to upload and track results from various races.",
        github_link: 'https://github.com/tom-gordon13/race-results',
        deployed_link: 'http://super-food-app.herokuapp.com/',
        image: '/Keppa_1.png',
        technologies: ['JavaScript, MongoDB, Node.JS, Express']
    }, 
    {
        name: 'Minesweeper',
        description: "Vanilla-JavaScript browser-based arcade game imitating the PC classic.",
        github_link: 'https://github.com/tom-gordon13/Minesweeper',
        deployed_link: 'https://tom-gordon13.github.io/Minesweeper/',
        image: '/Minesweeper_1.png',
        technologies: ['JavaScript, HTML, CSS']
    }
]



export default function Projects() {
    return (
        <div>
            <div className="row">

                <div className="col-2">
                    <div className='main-container d-flex flex-column align-items-start'>
                        <h1 className='main-header'>My Projects</h1>
                        <h1 className='secondary-header'>Hover over each box for more details, as well as links to both the code and deployed apps.</h1>
                    </div>
                </div>

                <div className="col">
                    <div className='proj-main'>
                        {projects.map((project, idx) =>
                            <ProjectBox project={project} key={idx}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}