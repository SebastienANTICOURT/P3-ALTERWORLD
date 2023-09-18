import { useState } from "react"
import axios from "axios"
import "./Membre.scss"

function Membre({ switchView, setUser }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleClick = () => {
    axios
      .post("http://localhost:4242/login", { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("usersId", res.data.user.usersId)
        setUser(res.data.user)
        console.info(res.data)
        alert("vous etes connecte")
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
      <button onClick={handleClick}>Connexion</button>
      <p onClick={switchView}>Pas encore inscrit ? créez votre compte</p>
    </div>
  )
}

export default Membre
