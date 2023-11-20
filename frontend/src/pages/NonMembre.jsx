import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { instance } from "../components/Axios"
import "./NonMembre.scss"

function NonMembre({ users }) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [city, setCity] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas")
    } else if (users.some((user) => user.email === email)) {
      alert("L'email existe déjà!")
    } else {
      instance
        .post("/users", {
          firstName,
          lastName,
          email,
          address,
          zipcode,
          city,
          password,
        })
        .then(() => {
          navigate("/membre")
        })
        .catch((error) => {
          console.error(error)
          alert("Échec de la création de l'utilisateur.")
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
          placeholder="Prenom"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <figcaption>Nom:</figcaption>
        <input
          type="text"
          placeholder="Nom"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <figcaption>Email:</figcaption>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <figcaption>Adresse:</figcaption>
        <input
          type="text"
          placeholder="adresse"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
        <figcaption>Code postal:</figcaption>
        <input
          type="text"
          placeholder="Code postal"
          value={zipcode}
          onChange={(event) => setZipcode(event.target.value)}
        />
        <figcaption>Ville:</figcaption>
        <input
          type="text"
          placeholder="Ville"
          value={city}
          onChange={(event) => setCity(event.target.value)}
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
      <button className="buttonYellow" onClick={handleSubmit}>
        S'inscrire
      </button>
      <Link to="/membre">
        <p>Déjà membre ?</p>
      </Link>
    </div>
  )
}

export default NonMembre
