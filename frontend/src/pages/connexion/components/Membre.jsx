import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../../components/AuthContext"
import "./Membre.scss"

function Membre({ switchView }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { setUserLog } = useAuthContext()
  const navigate = useNavigate()

  const handleClick = () => {
    axios
      .post("http://localhost:4242/login", { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("usersId", res.data.user.usersId)
        setUserLog({
          token: res.data.token,
          usersId: res.data.user.usersId,
        })
        console.info(res.data)
        // alert("vous etes connecte")
        navigate("/")
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
      <p onClick={switchView}>Pas encore inscrit ? créez votre compte</p>
    </div>
  )
}

export default Membre
