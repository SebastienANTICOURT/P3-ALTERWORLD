import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../Style.scss"
import alterworld from "../assets/alterworld.png"
import caddie from "../assets/caddie.png"
import login from "../assets/login.png"
import { instance } from "./Axios"
import "./NavBar.scss"
import { useAuthContext } from "./contexts/AuthContext"
import BasketContext from "./contexts/BasketContext"

function NavBar({ isAdmin }) {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const { userLog, setUserLog } = useAuthContext()
  const { basketItems, fetchBasketItems } = useContext(BasketContext)

  useEffect(() => {
    fetchBasketItems()
  }, [basketItems])

  const handleDisconnect = () => {
    instance.get("/logout").then(() => {
      setUserLog({ firstName: null })
    })
  }

  return (
    <nav className="NavBar">
      <div
        className={`burger ${isMenuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={isMenuOpen ? "open" : ""}>
        <div className="leftItems">
          <Link to="/administrator">
            {isAdmin ? <button className="adminButton">A</button> : null}
          </Link>

          <Link to="/customerArea">
            <button className="persoButton">Espace Client</button>
          </Link>
        </div>
        <Link to="/">
          <img className="logoNB" src={alterworld} alt="logo" />
        </Link>
        <div className="rightItems">
          {userLog.firstName ? (
            <button className="DeconnexionNB" onClick={handleDisconnect}>
              Deconnexion
            </button>
          ) : (
            <Link to="/membre">
              <img className="loginNB" src={login} alt="login" />
            </Link>
          )}
          <Link to="/basket">
            <img className="cadiNB" src={caddie} alt="caddie" />
            {basketItems.length > 0 && (
              <span className="basketCount">{basketItems.length}</span>
            )}
          </Link>
        </div>
      </ul>
    </nav>
  )
}

export default NavBar
