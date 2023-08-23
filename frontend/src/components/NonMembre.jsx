import { useState } from "react"
import axios from "axios"
import "./NonMembre.scss"

function NonMembre({ switchView }) {
  //   const [users, setUsers] = useState([])
  const [prenom, setPrenom] = useState("")
  const [nom, setNom] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    axios.post("http://localhost:4242/users", {
      prenom,
      nom,
      email,
      password,
    })
  }

  return (
    <div className="login-container">
      <h2>Créez votre compte</h2>
      <div>
        <label>Prenom:</label>
        <input
          type="text"
          placeholder="prenom"
          value={prenom}
          onChange={(event) => setPrenom(event.target.value)}
        />
        <label>Nom:</label>
        <input
          type="text"
          placeholder="nom"
          value={nom}
          onChange={(event) => setNom(event.target.value)}
        />
        <label>Email:</label>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>Mot de passe:</label>
        <input
          type="text"
          placeholder="Mot de passe"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
         {/* <label>Confirmation mot de passe:</label>
        <input
          type="text"
          placeholder="Mot de passe"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        /> */}
      </div>
      <button onClick={handleSubmit}>S'inscrire</button>
      <p onClick={switchView}>Déjà membre ?</p>
    </div>
  )
}
export default NonMembre
