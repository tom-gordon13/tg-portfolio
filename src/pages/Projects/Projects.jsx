import './Projects.css'
import ProjectBox from '../../components/ProjectBox/ProjectBox'


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
                        <ProjectBox />
                        <ProjectBox />
                        <ProjectBox />
                        <ProjectBox />
                    </div>
                </div>
            </div>
        </div>
    )
}