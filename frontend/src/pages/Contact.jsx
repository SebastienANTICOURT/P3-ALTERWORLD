import { useState } from "react"
import "./Contact.scss"

function Contact() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [univers, setUnivers] = useState("")
  const [type, setType] = useState("")

  return (
    <div className="contact">
      <div className="newProduct">
        <div className="firstLine">
          <div className="column">
            <figcaption>Nom de votre produit</figcaption>
            <input
              type="text"
              placeholder="nom"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="column">
            <figcaption>Prix</figcaption>
            <input
              type="text"
              placeholder="prix"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
        </div>
        <div className="firstLine">
          <div className="column">
            <figcaption>Univers souhaité</figcaption>
            <input
              type="text"
              placeholder="Univers"
              value={univers}
              onChange={(event) => setUnivers(event.target.value)}
            />
          </div>
          <div className="column">
            <figcaption>Type souhaité</figcaption>
            <input
              type="text"
              placeholder="Type"
              value={type}
              onChange={(event) => setType(event.target.value)}
            />
          </div>
        </div>
        <figcaption>Description</figcaption>
        <input
          className="Description"
          type="text"
          placeholder="Type"
          value={type}
          onChange={(event) => setType(event.target.value)}
        />
        <button>Envoyer</button>
      </div>
    </div>
  )
}
export default Contact
