import axios from "axios"
import { useState } from "react"
import { instance } from "../components/Axios"
import "./Contact.scss"

function Contact() {
  const [name, setName] = useState("")
  const [imagePath, setImagePath] = useState("")
  const [price, setPrice] = useState("")
  const [univers, setUnivers] = useState("")
  const [type, setType] = useState("")
  const [image, setImage] = useState()

  const productData = {
    name,
    image: imagePath,
    price,
    univerId: univers,
    typesId: type,
  }
  const addProducts = () => {
    instance
      .post("/products", productData)
      .then((response) => {
        // console.log(response.data)
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
        <div className="Liste">
          <div className="Line">
            <figcaption>Nom de votre produit:</figcaption>
            <input
              type="text"
              placeholder="nom"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="Line">
            <figcaption>Prix:</figcaption>
            <input
              type="text"
              placeholder="prix"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
          <div className="Line">
            <figcaption>Univers souhaité</figcaption>
            <input
              type="text"
              placeholder="Univers"
              value={univers}
              onChange={(event) => setUnivers(event.target.value)}
            />
          </div>
          <div className="Line">
            <figcaption>Type souhaité</figcaption>
            <input
              type="text"
              placeholder="Type"
              value={type}
              onChange={(event) => setType(event.target.value)}
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
        <button className="buttonYellow" onClick={addProducts}>
          Envoyer
        </button>
      </div>
    </div>
  )
}
export default Contact
