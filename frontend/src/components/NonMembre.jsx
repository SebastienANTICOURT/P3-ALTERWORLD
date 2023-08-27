import { useState } from "react"
import axios from "axios"
import "./NonMembre.scss"

function NonMembre({ switchView }) {
  //   const [users, setUsers] = useState([])
  const [prenom, setPrenom] = useState("")
  const [nom, setNom] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    //   if (password !== confirmPassword) {
    //     alert("Passwords do not match!");
    //   } else {
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
        <figcaption>Prenom:</figcaption>
        <input
          type="text"
          placeholder="prenom"
          name="prenom"
          value={prenom}
          onChange={(event) => setPrenom(event.target.value)}
        />
        <figcaption>Nom:</figcaption>
        <input
          type="text"
          placeholder="nom"
          value={nom}
          onChange={(event) => setNom(event.target.value)}
        />
        <figcaption>Email:</figcaption>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <figcaption>Mot de passe:</figcaption>
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {/* <figcaption>Confirmation mot de passe:</figcaption>
        <input
          type="password"
          placeholder="Mot de passe"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        /> */}
      </div>
      <button onClick={handleSubmit}>S'inscrire</button>
      <p onClick={switchView}>Déjà membre ?</p>
    </div>
  )
}
export default NonMembre
