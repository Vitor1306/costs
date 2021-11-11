import ProjectForm from '../project/ProjectForm'
import styles from './Project.modules.css'

function Project() {
  return (
    <div className="project_container" >
      <h1>Crie seu projeto</h1>
      <ProjectForm />
    </div>
  )
}

export default Project