import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import BasketContext from "../../BasketContext"
import "./Details.scss"

function Details() {
  const { id } = useParams()
  const [detail, setDetail] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [total, setTotal] = useState(0)
  const { triggerBasketChange } = useContext(BasketContext)
  const usersId = localStorage.getItem("usersId")
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }

  useEffect(() => {
    axios
      .get(`http://localhost:4242/products/${id}`)
      .then((res) => {
        setDetail(res.data)
      })
      .catch((error) => {
        console.error("There was an error!", error)
      })
  }, [id])

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1))
  }
  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  useEffect(() => {
    // Mettez à jour le total lorsque la quantité change
    setTotal(detail.price * quantity)
  }, [quantity, detail.price])

  // const totalCost = detail.price * quantity

  const addToBasket = () => {
    axios
      .post(
        "http://localhost:4242/basket",
        {
          usersId,
          productsId: id,
          quantity,
          total,
        },
        { headers }
      )
      .then((response) => {
        alert("Le produit a été ajouté au panier")
        triggerBasketChange()
      })
  }

  // const changeFavorites = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:4242/favorites/${usersId}/${productsId}`
  //     )

  //     if (!response.data) {
  //       await axios.post("http://localhost:4242/favorites", {
  //         productsId: id,
  //         usersId,
  //         hearts: 0,
  //       })
  //     }
  //     await axios.put(
  //       `http://localhost:4242/favorites/${usersId}/${productsId}`,
  //       {
  //         hearts: response.data && response.data.hearts === 1 ? 0 : 1,
  //       }
  //     )
  //   } catch (error) {
  //     console.error("Error changing favorites", error)
  //   }
  // }

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
