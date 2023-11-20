import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { instance } from "../../components/Axios"
import BasketContext from "../../components/contexts/BasketContext"
import "./Details.scss"

function Details() {
  const { id } = useParams()
  const [detail, setDetail] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [total, setTotal] = useState(0)
  const { setBasketItems } = useContext(BasketContext)

  useEffect(() => {
    instance
      .get(`/products/${id}`)
      .then((res) => {
        setDetail(res.data)
      })
      .catch((error) => {
        console.error("There was an error!", error)
      })
  }, [id])

  const decreaseQuantity = () => {
    setQuantity((data) => Math.max(1, data - 1))
  }
  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  useEffect(() => {
    setTotal(detail.price * quantity)
  }, [quantity, detail.price])

  const addToBasket = () => {
    const basketData = {
      productsId: id,
      quantity,
      total,
    }
    instance
      .post("/basket", basketData)
      .then((data) => {
        alert("Le produit a été ajouté au panier")
        setBasketItems(data)
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout au panier", error)
        alert("Echec de l'ajout au panier")
      })
  }

  return (
    <div className="Details">
      <div className="DetailCardID">
        <div className="leftContainerD">
          <img src={`http://localhost:4242${detail.image}`} alt={detail.name} />
        </div>
        <div className="rightContainerD">
          <figcaption>{detail.name}</figcaption>
          <p className="PricesD">{detail.price} €</p>
          <div className="quantityD">
            <button onClick={decreaseQuantity}>-</button>
            <p>{quantity}</p>
            <button onClick={increaseQuantity}>+</button>
          </div>
          <p>Total : {total} €</p>
          <button className="buttonPurple" onClick={addToBasket}>
            Ajouter au panier
          </button>
          <button className="buttonPurple">Acheter maintenant</button>
        </div>
      </div>
      <div className="buttonsD">
        <button className="buttonYellow">Revenir à la selection</button>
      </div>
    </div>
  )
}
export default Details
