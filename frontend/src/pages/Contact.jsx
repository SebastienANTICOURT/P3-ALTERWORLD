import axios from "axios"
import { useState } from "react"
import "./Contact.scss"

function Contact() {
  const [name, setName] = useState("")
  const [imagePath, setImagePath] = useState("")
  const [price, setPrice] = useState("")
  const [univers, setUnivers] = useState("")
  const [type, setType] = useState("")
  const [image, setImage] = useState()

  const addProducts = () => {
    const formData = new FormData()

    const CreatorId = localStorage.getItem("usersId")
    formData.append("name", name)
    formData.append("image", imagePath)
    formData.append("price", price)
    formData.append("creatorId", CreatorId)
    formData.append("universId", univers)
    formData.append("typesId", type)
    axios.post("http://localhost:4242/products", formData).then((res) => {})
    // .catch((error) => {
    //   // console.log(error)
    // })
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
    // .catch((er) => console.log(er))
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
          <img src={image} alt="Selected" style={{ maxWidth: "200px" }} />
        )}
        <button onClick={upload}>selectionner</button>
        <figcaption>Description</figcaption>
        <input
          className="Description"
          type="text"
          placeholder="Type"
          value={type}
          onChange={(event) => setType(event.target.value)}
        />
        <button onClick={addProducts}>Envoyer</button>
      </div>
    </div>
  )
}
export default Contact
