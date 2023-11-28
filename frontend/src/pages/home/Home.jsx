import { Link } from "react-router-dom"
import hydreHome from "../../assets/hydreHome.png"
import smiley from "../../assets/smiley.png"
import "./Home.scss"
import FiltresBar from "./components/FiltresBar"

function Home({ userLog }) {
  return (
    <div className="Home">
      <div className="containerHome">
        <img className="hydreHome" src={hydreHome} alt="hydre" />

        <div className="ContainerText">
          <div className="bienvenu">
            <h1>
              {userLog && userLog.firstName ? (
                <>
                  Bienvenue {userLog.firstName},{" "}
                  <img src={smiley} alt="smiley" />
                </>
              ) : null}{" "}
              Vivez votre propre aventure dans le monde du jeux de rôle avec
              ALTERWORLD !
            </h1>
            <p className="textHome">
              Enfin une boutique où les fans de RPG peuvent accéder à du contenu
              de qualité et proposer leurs créations. Sélectionnez les univers
              et les objets desirés et écrivez votre propre aventure.
            </p>
          </div>
          <Link to="/contact">
            <button className="buttonYellow">Proposez vos créations !</button>
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
