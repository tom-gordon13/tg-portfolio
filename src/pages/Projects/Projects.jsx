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
                        {projects.map(project =>
                            <ProjectBox project={project}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}