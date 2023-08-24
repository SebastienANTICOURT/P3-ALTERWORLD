import { useState } from "react"
import "./Membre.scss"

function Membre({ switchView }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

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
      <button>Connexion</button>
      <p onClick={switchView}>Pas encore inscrit ? créez votre compte</p>
    </div>
  )
}

export default Membre
