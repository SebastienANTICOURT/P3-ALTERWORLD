import axios from "axios"
import { useState } from "react"
import { instance } from "../components/Axios"
import "./Contact.scss"

function Contact() {
  const [prName, setName] = useState("")
  const [imagePath, setImagePath] = useState("")
  const [price, setPrice] = useState("")
  const [univers, setUnivers] = useState("")
  const [type, setType] = useState("")
  const [image, setImage] = useState()

  const productData = {
    prName,
    image: imagePath,
    price,
    univerId: univers,
    typesId: type,
  }
  const submitProducts = (e) => {
    e.preventDefault()
    instance
      .post("/products", productData)
      .then(() => {
        alert("produit créé avec succés")
      })
      .catch((error) => {
        console.error("Erreur lors de la création de l'utilisateur:", error)
      })
  }

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0]
    if (selectedImage) {
      setImage(selectedImage)
    }
  }

  const upload = () => {
    const formData = new FormData()
    formData.append("image", image)
    axios.post("http://localhost:4242/upload", formData).then((res) => {
      setImagePath(res.data.path)
    })
  }

  return (
    <div className="contact">
      <div className="newProduct">
        <form onSubmit={submitProducts}>
          <div className="Liste">
            <div className="Line">
              <figcaption>Nom de votre produit:</figcaption>
              <input
                type="text"
                placeholder="nom"
                value={prName}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className="Line">
              <figcaption>Prix:</figcaption>
              <input
                type="text"
                placeholder="prix"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                required
              />
            </div>
            <div className="Line">
              <figcaption>Univers souhaité</figcaption>
              <input
                type="text"
                placeholder="Univers"
                value={univers}
                onChange={(event) => setUnivers(event.target.value)}
                required
              />
            </div>
            <div className="Line">
              <figcaption>Type souhaité</figcaption>
              <input
                type="text"
                placeholder="Type"
                value={type}
                onChange={(event) => setType(event.target.value)}
                required
              />
            </div>
            <div className="Line">
              <figcaption>Image</figcaption>
              <input
                className="inputImage"
                type="file"
                onChange={handleImageChange}
              />
              {image && (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Selected"
                  style={{ maxWidth: "200px" }}
                />
              )}
              <button className="buttonYellow" onClick={upload}>
                selectionner
              </button>
            </div>
          </div>
          <button className="buttonYellow" type="submit">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  )
}
export default Contact
