import FiltresBar from "./components/filtres_bar/FiltresBar"
import "./Home.scss"

function Home() {
  return (
    <div className="Home">
      <div className="ContainerText">
        <h1>Vivez votre popre aventure avec ALTERWORLD ! </h1>
        <p>
          Enfin une boutique où les fans de RPG peuvent accéder à du contenu de
          qualité et proposer leurs créations. dans tous les univers possible.
          Sélectionner les univers et les objets desirés et commencez
          l'aventure.
        </p>
      </div>
      <div className="FiltresBarH">
        <FiltresBar />
      </div>
    </div>
  )
}

export default Home
