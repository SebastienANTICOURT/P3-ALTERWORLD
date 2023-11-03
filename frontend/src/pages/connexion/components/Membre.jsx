import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../../components/AuthContext"
import { login } from "../../../components/Axios"
import "./Membre.scss"

function Membre({ switchView }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { setUserLog } = useAuthContext()
  const navigate = useNavigate()

  const handleClick = () => {
    login(email, password).then((data) => {
      setUserLog({
        token: data.token,
        usersId: data.usersId,
      })
      navigate("/")
    })
    // .catch((error) => {
    //   "erreur de connexion"
    // })
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
      <p onClick={switchView}>Pas encore inscrit ? créez votre compte</p>
    </div>
  )
}

export default Membre
