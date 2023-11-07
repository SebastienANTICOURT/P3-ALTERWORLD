import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../components/Axios"
import { useAuthContext } from "../components/contexts/AuthContext"
import "./Membre.scss"

function Membre() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { setUserLog } = useAuthContext()
  const navigate = useNavigate()

  const handleClick = () => {
    login(email, password)
      .then((data) => {
        setUserLog({
          token: data.token,
          usersId: data.usersId,
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
    <div className="Membre">
      <h2>Connectez vous</h2>
      <div>
        <figcaption>Email:</figcaption>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div>
        <figcaption>Password:</figcaption>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <button onClick={handleClick}>Connection</button>
      <Link to="/nonMembre">
        <p>Pas encore inscrit ? créez votre compte</p>
      </Link>
    </div>
  )
}

export default Membre
