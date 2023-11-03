import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../Style.scss"
import alterworld from "../assets/alterworld.png"
import caddie from "../assets/caddie.png"
import login from "../assets/login.png"
import { useAuthContext } from "./AuthContext"
import { Logout } from "./Axios"
import BasketContext from "./BasketContext"
import "./NavBar.scss"

function NavBar({ admin }) {
  const { userLog, setUserLog } = useAuthContext()
  const [isMenuOpen, setMenuOpen] = useState(false)
  const { basketItems, fetchBasketItems, triggerBasketChange } =
    useContext(BasketContext)

  useEffect(() => {
    fetchBasketItems()
  }, [triggerBasketChange])

  const handleDisconnect = () => {
    Logout().then(() => {
      setUserLog({ usersId: null, token: null })
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
        <span></span>
      </div>
      <ul className={isMenuOpen ? "open" : ""}>
        <div className="leftItems">
          <Link to="/administrator">
            {admin && admin.isAdministrator === 1 ? (
              <button className="adminButton">A</button>
            ) : null}
          </Link>

          <Link to="/customerArea">
            <button className="persoButton">Espace Client</button>
          </Link>
        </div>
        <li>
          <Link className="logoNBL" to="/">
            <img className="logoNB" src={alterworld} alt="logo" />
          </Link>
        </li>

        <div className="rightItems">
          {userLog.token ? (
            <li>
              <button onClick={handleDisconnect}>Deconnexion</button>
            </li>
          ) : (
            <Link to="/connexion">
              <li>
                <img className="loginNB" src={login} alt="login" />
              </li>
            </Link>
          )}

          <Link to="/basket">
            <li>
              <img className="cadiNB" src={caddie} alt="caddie" />
              {basketItems.length > 0 && (
                <span className="basketCount">{basketItems.length}</span>
              )}
            </li>
          </Link>
        </div>
      </ul>
    </nav>
  )
}

export default NavBar
