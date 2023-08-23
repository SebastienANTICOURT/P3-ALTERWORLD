import { useState } from "react"
import "./Membre.scss"

function Membre({ switchView }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="Membre">
      <h2>Connectez vous</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label>Password:</label>
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
