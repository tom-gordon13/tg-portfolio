import './ProjectBox.css'

export default function ProjectBox({ project }) {

    return (
        <div className='proj-box'>
            <h1 className='text-white'>{project.name}</h1>
            <div className='proj-container' style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: '100%',
            }}>

                <div className="proj-details">
                    <h3 className='learn-more'>Learn More</h3>
                    <div className="inner-details">
                        <p><b>Description: </b>{project.description}</p>
                        <div className="tech mb-3">
                            <span><b>Technologies: </b></span>{project.technologies.map(tech =>
                                <span>{tech}</span>)}
                        </div>
                        <a href={project.github_link} target="_blank">GitHub Link</a>
                        &nbsp; &nbsp; &nbsp;&nbsp; | &nbsp;&nbsp; &nbsp;&nbsp;
                        <a href={project.deployed_link} target="_blank">Deployed Link</a>
                    </div>
                </div>
            </div>


        </div>
    )
}