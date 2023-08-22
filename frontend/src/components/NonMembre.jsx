import { useState, axios } from "react"
import "./NonMembre.scss"

function NonMembre() {
  //   const [users, setUsers] = useState([])
  const [prenom, setPrenom] = useState("")
  const [nom, setNom] = useState("")
  const [email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const handleSubmit = () => {
    axios
      .post("http://localhost:4242/users", {
        prenom,
        nom,
        email,
        Password,
      })
  }

  return (
    <>
      <h2>Créez votre compte</h2>
      <input
        type="text"
        placeholder="prenom"
        value={prenom}
        onChange={(event) => setPrenom(event.target.value)}
      />
      <input
        type="text"
        placeholder="nom"
        value={nom}
        onChange={(event) => setNom(event.target.value)}
      />
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="text"
        placeholder="Mot de passe"
        value={Password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={handleSubmit}>S'inscrire</button>
    </>
  )
}
export default NonMembre
