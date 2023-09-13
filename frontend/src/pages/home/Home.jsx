import FiltresBar from "./components/filtres_bar/FiltresBar"
import imageCatastrophe from "../../assets/imageCatastrophe.png"
import "./Home.scss"

function Home({ user }) {
  return (
    <div className="Home">
      <div className="imageHome">
        <img
          className="imageCatastrophe"
          src={imageCatastrophe}
          alt="imageCatastrophe"
        />
        <div className="ContainerText">
          <h1>
            {user && `Bienvenu, ${user.firstName} `}Vivez votre propre aventure
            avec ALTERWORLD !{" "}
          </h1>
          <p>
            Enfin une boutique où les fans de RPG peuvent accéder à du contenu
            de qualité et proposer leurs créations. dans tous les univers
            possible. Sélectionner les univers et les objets desirés et
            commencez l'aventure.
          </p>
        </div>
      </div>
      <div className="FiltresBarH">
        <FiltresBar />
      </div>
    </div>
  )
}

export default Home
