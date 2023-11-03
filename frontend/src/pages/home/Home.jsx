import { Link } from "react-router-dom"
import hydreHome from "../../assets/hydreHome.png"
import smiley from "../../assets/smiley.png"
import "./Home.scss"
import FiltresBar from "./components/filtres_bar/FiltresBar"

function Home({ user }) {
  return (
    <div className="Home">
      <div className="imageHome">
        <img
          className="imageCatastrophe"
          src={hydreHome}
          alt="imageCatastrophe"
        />
        <div className="ContainerText">
          <div className="bienvenu">
            <p>
              {user && `Bienvenu, ${user.firstName}`}{" "}
              {user && <img src={smiley} alt="" />} Vivez votre propre aventure
              avec ALTERWORLD !
            </p>
            <p className="textHome">
              Enfin une boutique où les fans de RPG peuvent accéder à du contenu
              de qualité et proposer leurs créations. dans tous les univers
              possible. Sélectionner les univers et les objets desirés et
              commencez l'aventure.
            </p>
          </div>
          <Link to="/contact">
            <button>Proposez vos créations !</button>
          </Link>
        </div>
      </div>
      <div className="FiltresBarH">
        <FiltresBar />
      </div>
    </div>
  )
}

export default Home
