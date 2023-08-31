import { useState } from "react"
import { Link } from "react-router-dom"
import loupe from "../assets/loupe.png"
import alterworld from "../assets/alterworld.png"
import caddie from "../assets/caddie.png"
import login from "../assets/login.png"
import "./NavBar.scss"
import "../Style.scss"

function NavBar() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <nav className="NavBar">
      <ul>
        <div className="leftItems">
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
          <Link to="/">
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
            </li>
          </Link>
        </div>
      </ul>
    </nav>
  )
}

export default NavBar
