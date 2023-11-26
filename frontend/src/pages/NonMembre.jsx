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

  const handleSubmit = (e) => {
    e.preventDefault()
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
    <div className="nonMembre">
      <div className="login-container">
        <h1>Créez votre compte</h1>
        <form onSubmit={handleSubmit}>
          <div className="liste">
            <div className="line">
              <figcaption>Prenom:</figcaption>
              <input
                type="text"
                placeholder="Prenom"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
            </div>
            <div className="line">
              <figcaption>Nom:</figcaption>
              <input
                type="text"
                placeholder="Nom"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
            </div>
            <div className="line">
              <figcaption>Email:</figcaption>
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="line">
              <figcaption>Adresse:</figcaption>
              <input
                type="text"
                placeholder="adresse"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                required
              />
            </div>
            <div className="line">
              <figcaption>Code postal:</figcaption>
              <input
                type="text"
                placeholder="Code postal"
                value={zipcode}
                onChange={(event) => setZipcode(event.target.value)}
                required
              />
            </div>
            <div className="line">
              <figcaption>Ville:</figcaption>
              <input
                type="text"
                placeholder="Ville"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                required
              />
            </div>
            <div className="line">
              <figcaption>Mot de passe:</figcaption>
              <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="line">
              <figcaption>Confirmation mot de passe:</figcaption>
              <input
                type="password"
                placeholder="Mot de passe"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
              />
            </div>
          </div>
          <button className="buttonYellow" type="submit">
            S'inscrire
          </button>
        </form>
        <Link to="/membre">
          <p>Déjà membre ?</p>
        </Link>
      </div>
    </div>
  )
}

export default NonMembre
