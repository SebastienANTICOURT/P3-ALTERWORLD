import alterworld from "../assets/alterworld.png"
import caddie from "../assets/caddie.png"
import login from "../assets/login.png"
import { Link } from "react-router-dom"
import "./NavBar.scss"
import "../Style.scss"

function NavBar() {
  return (
    <nav className="NavBar">
      <ul>
        {/* <li>
          <img className="loupeNB" src={loupe} alt="loupe" />
        </li>
        <li>
          <input
            type="text"
            placeholder="Rechercher"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button onClick={handleSearch}>Search</button>
        </li> */}
        <li>
          <img className="logoNB" src={alterworld} alt="logo" />
        </li>
        <Link to="/connexion">
          <li>
            <img className="loginNB" src={login} alt="login" />
          </li>
        </Link>
        <li>
          <img className="cadiNB" src={caddie} alt="cadi" />
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
