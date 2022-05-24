import Project from "../project/project"
import "./projectList.css"
import { projects } from "../../data"
import { Row } from "react-bootstrap"

const ProjectList = () => {
    return (
        <section id="projects" className="project">
            <div className="project-bg"></div>
            <div className="project-texts">
                <h1 className="project-title">Projects</h1>
                <p className="project-description">A couple of my projects I made during my education.</p>
            </div>
            <Row xs={1} md={1} lg={2} xl={3} className="project-list">
                {projects.map(item => (
                    <Project key={item.id} name={item.name} desc={item.desc} img={item.img} link={item.link} github={item.github}/>
                ))}
            </Row>
        </section>
    )
}

export default ProjectList