import styles from './Home.modules.css'
import savings from '../../img/savings.svg'

function Home() {
  return (
    <section className="home_container">
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <img src={savings} alt="Savings" />
    </section>
  )
}

export default Home
