import { useState } from "react"
import "./Membre.scss"

function Membre() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="login-container">
      <h2>Connectez vous</h2>

      <div>
        <p>Email:</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div>
        <p>Password:</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <button>Connect</button>
      <p>créez votre compte</p>
    </div>
  )
}

export default Membre
