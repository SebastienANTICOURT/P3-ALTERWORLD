import { Link } from "react-router-dom"
import hydreHome from "../../assets/hydreHome.png"
import smiley from "../../assets/smiley.png"
import "./Home.scss"
import FiltresBar from "./components/FiltresBar"

function Home({ userLog }) {
  return (
    <div className="Home">
      <div className="containerHome">
        <img className="hydreHome" src={hydreHome} alt="hydreHome" />

        <div className="ContainerText">
          <div className="bienvenu">
            <p>
              {userLog && userLog.firstName ? (
                <>
                  Bienvenu, {userLog.firstName}{" "}
                  <img src={smiley} alt="smiley" />
                </>
              ) : null}{" "}
              Vivez votre propre aventure avec ALTERWORLD !
            </p>
            <text className="textHome">
              Enfin une boutique où les fans de RPG peuvent accéder à du contenu
              de qualité et proposer leurs créations. dans tous les univers
              possible. Sélectionner les univers et les objets desirés et
              commencez l'aventure.
            </text>
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
