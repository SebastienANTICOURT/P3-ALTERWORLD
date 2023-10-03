import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import BasketContext from "../BasketContext"
import "../Style.scss"
import alterworld from "../assets/alterworld.png"
import caddie from "../assets/caddie.png"
import login from "../assets/login.png"
import loupe from "../assets/loupe.png"
import "./NavBar.scss"

function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const { basketItems, fetchBasketItems, triggerBasketChange } =
    useContext(BasketContext)

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    fetchBasketItems()
  }, [triggerBasketChange])

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
          <Link to="administrator">
            <button className="pesrsoButton">Espace personnel</button>
          </Link>
          <li className="searchItem">
            <div className="searchContainer">
              <img className="loupeNB" src={loupe} alt="loupe" />
              <input
                type="text"
                placeholder="Rechercher"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              {/* <button onClick={handleSearch}>Search</button> */}
            </div>
          </li>
        </div>
        <li>
          <Link className="logoNBL" to="/">
            <img className="logoNB" src={alterworld} alt="logo" />
          </Link>
        </li>

        <div className="rightItems">
          <Link to="/connexion">
            <li>
              <img className="loginNB" src={login} alt="login" />
            </li>
          </Link>

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
