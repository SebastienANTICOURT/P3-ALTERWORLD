import { useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import FiltresBar from "../components/FiltresBar"
import "./Details.scss"

function Details() {
  const { id } = useParams()
  const [detail, setDetail] = useState([])
  const [quantity, setQuantity] = useState(1)

  axios.get(`http://localhost:4242/products/${id}`).then((res) => {
    setDetail(res.data)
  }, [])

  const decreaseQuantity = () => {
    setQuantity(quantity - 1)
  }
  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <div className="Details">
      <FiltresBar />
      <div className="DetailCardID">
        <div className="leftContainerD">
          <img src={`http://localhost:4242${detail.image1}`} />
        </div>
        <div className="rightContainerD">
          <figcaption>{detail.name}</figcaption>
          <p className="PricesD">{detail.Prix} €</p>
          <div className="quantityD">
            <button onClick={decreaseQuantity}>-</button>
            <p>{quantity}</p>
            <button onClick={increaseQuantity}>+</button>
          </div>
          <button>Ajouter au panier</button>
          <button>Acheter maintenant</button>
        </div>
      </div>
      <div className="buttonsD">
        <button className="buttonPanierD">Revenir à la selection</button>
      </div>
    </div>
  )
}
export default Details
