import './ProjectBox.css'

export default function ProjectBox({ project }) {

    return (
        <div>
            <h1 className='text-white'>{project.name}</h1>
            <div className='proj-container' style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: '100%',
            }}>

                <div className="proj-details">
                    <h3 className='learn-more'>Learn More</h3>
                    <div className="inner-details mt-0">
                        <p><b>Description: </b>{project.description}</p>
                        <div className="tech mb-2">
                            <span><b>Technologies: </b></span>{project.technologies.map(tech =>
                                <span>{tech}</span>)}
                        </div>
                        <a href={project.github_link}>GitHub Link</a>
                        &nbsp; &nbsp; &nbsp;&nbsp; | &nbsp;&nbsp; &nbsp;&nbsp;
                        <a href={project.deployed_link}>Deployed Link</a>
                    </div>
                </div>
            </div>


        </div>
    )
}