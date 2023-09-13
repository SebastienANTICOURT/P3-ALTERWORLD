import { useState } from "react"
import axios from "axios"
import "./Membre.scss"

function Membre({ switchView }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleClick = () => {
    axios
      .post("http://localhost:4242/login", { email, password })
      .then((res) => {
        console.info(res.data)
      })
    // .catch((error) => {
    //   // console.log(error)
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
          type="text"
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
