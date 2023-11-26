import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { instance } from "../components/Axios"
import { useAuthContext } from "../components/contexts/AuthContext"
import "./Membre.scss"

function Membre() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { setUserLog } = useAuthContext()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    instance
      .post("/login", { email, password })
      .then((data) => {
        setUserLog({
          firstName: data.firstName,
        })
        navigate("/")
      })
      .catch((error) => {
        console.error(error)
        alert("Utilisateur non trouvé")
      })
  }

  return (
    <div className="countainerMembre">
      <div className="Membre">
        <h1>Connectez vous</h1>
        <form onSubmit={handleSubmit}>
          {" "}
          <div>
            <figcaption>Email:</figcaption>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <figcaption>Password:</figcaption>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="buttonYellow">
            Connection
          </button>
        </form>
        <Link to="/nonMembre">
          <p>Pas encore inscrit ? créez votre compte</p>
        </Link>
      </div>
    </div>
  )
}

export default Membre
