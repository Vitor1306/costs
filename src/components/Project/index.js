import Input from '../form/Input'
import styles from './ProjectForm.modules.css'

function ProjectForm() {
  return(
    <form  className="form">
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"

      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
      />
    </form>
  )
}

export default ProjectForm