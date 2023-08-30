import { useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import "./Details.scss"

function Details() {
  const { id } = useParams()
  const [detail, setDetail] = useState([])
  const [quantity, setQuantity] = useState(1)

  axios.get(`http://localhost:4242/products/${id}`).then(
    (res) => {
      setDetail(res.data)
    },
    [id]
  )

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1))
  }
  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const totalCost = detail.price * quantity

  return (
    <div className="Details">
      <div className="DetailCardID">
        <div className="leftContainerD">
          <img
            src={`http://localhost:4242${detail.image_url}`}
            alt={detail.name}
          />
        </div>
        <div className="rightContainerD">
          <figcaption>{detail.name}</figcaption>
          <p className="PricesD">{detail.price} €</p>
          <div className="quantityD">
            <button onClick={decreaseQuantity}>-</button>
            <p>{quantity}</p>
            <button onClick={increaseQuantity}>+</button>
          </div>
          <p>Total : {totalCost} €</p>
          <button className="panierD">Ajouter au panier</button>
          <button className="panierD">Acheter maintenant</button>
        </div>
      </div>
      <div className="buttonsD">
        <button className="buttonPanierD">Revenir à la selection</button>
      </div>
    </div>
  )
}
export default Details
