

export default function ContactMe() {


    return (
        <div className='main-container d-flex flex-column align-items-start'>
            <h1 className='main-header border-bottom'>Contact Me</h1>
            <h1 className='secondary-header'>Email: <a href="mailto:tombcgordon@gmail.com" style={{color: '#5abcb5',}}><span>   tombcgordon@gmail.com </span></a></h1>
            <h1 className='secondary-header'>
                <i class="devicon-linkedin-plain"></i> <a href="https://www.linkedin.com/in/thomas-gordon13/" style={{
                    textDecoration: 'None',
                    color: '#5abcb5',
                }}>LinkedIn</a>
                &nbsp;&nbsp; | &nbsp;&nbsp;
                <i class="devicon-github-plain"></i> <a href="https://github.com/tom-gordon13" style={{
                    textDecoration: 'None',
                    color: '#5abcb5',
                }}>GitHub</a>
            </h1>
        </div>
    )
}