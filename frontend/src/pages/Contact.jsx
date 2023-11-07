import axios from "axios"
import { useState } from "react"
import { useAuthContext } from "../components/AuthContext"
import "./Contact.scss"

function Contact() {
  const { userLog } = useAuthContext()
  const [name, setName] = useState("")
  const [imagePath, setImagePath] = useState("")
  const [price, setPrice] = useState("")
  const [univers, setUnivers] = useState("")
  const [type, setType] = useState("")
  const [image, setImage] = useState()

  const creatorId = userLog.usersId
  const productData = {
    name: name,
    image: imagePath,
    price: price,
    creatorId: creatorId,
    univerId: univers,
    typesId: type,
  }
  const addProducts = () => {
    axios
      .post("http://localhost:4242/products", productData)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
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
      // Mettre à jour l'état avec le chemin de l'image
      setImagePath(res.data.path)
    })
    // Gérer les erreurs ici
  }

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
        <figcaption>Image</figcaption>
        <input type="file" onChange={handleImageChange} />
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Selected"
            style={{ maxWidth: "200px" }}
          />
        )}
        <button onClick={upload}>selectionner</button>
        <button onClick={addProducts}>Envoyer</button>
      </div>
    </div>
  )
}
export default Contact
