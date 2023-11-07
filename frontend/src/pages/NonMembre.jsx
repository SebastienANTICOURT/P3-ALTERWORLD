import { useState } from "react"
import { Link } from "react-router-dom"
import { creationUser } from "../components/Axios"
import "./NonMembre.scss"

function NonMembre({ users }) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas")
    } else if (users.some((user) => user.email === email)) {
      alert("L'email existe déja!")
    } else {
      creationUser(firstName, lastName, email, password)
        .then(() => {
          navigate("/membre")
        })
        .catch((error) => {
          console.error(error)
          alert("Echec de la création de l'utilisateur.")
        })
    }
  }
  return (
    <div className="login-container">
      <h2>Créez votre compte</h2>
      <div>
        <figcaption>Prenom:</figcaption>
        <input
          type="text"
          placeholder="prenom"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <figcaption>Nom:</figcaption>
        <input
          type="text"
          placeholder="nom"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
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
        <figcaption>Confirmation mot de passe:</figcaption>
        <input
          type="password"
          placeholder="Mot de passe"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>S'inscrire</button>
      <Link to="membre">
        <p>Déjà membre ?</p>
      </Link>
    </div>
  )
}

export default NonMembre
