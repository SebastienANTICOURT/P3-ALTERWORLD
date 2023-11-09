import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  deleteItemFromBasket,
  getBasket,
  updateBasketQuantity,
} from "../components/Axios"
import "./Basket.scss"

function Basket() {
  const [basketItems, setBasketItems] = useState([])

  useEffect(() => {
    getBasket().then((data) => {
      setBasketItems(data)
    })
  }, [])

  const deleteItem = (itemId) => {
    deleteItemFromBasket(itemId)
      .then(() => {
        setBasketItems((prevItems) =>
          prevItems.filter((item) => item.id !== itemId)
        )
      })
      .catch((err) => {
        console.error("Error deleting item:", err)
      })
  }

  const decreaseQuantity = (itemId) => {
    const item = basketItems.find((item) => item.id === itemId)
    const updatedQuantity = Math.max(1, item.quantity - 1)
    updateBasketQuantity(itemId, updatedQuantity)
      .then(() => {
        setBasketItems((prevItems) =>
          prevItems.map((existingItem) =>
            existingItem.id === itemId
              ? { ...existingItem, quantity: updatedQuantity }
              : existingItem
          )
        )
      })
      .catch((err) => {
        console.error("Error updating quantity:", err)
      })
  }

  const increaseQuantity = (itemId) => {
    const item = basketItems.find((item) => item.id === itemId)
    const updatedQuantity = item.quantity + 1
    updateBasketQuantity(itemId, updatedQuantity)
      .then(() => {
        setBasketItems((prevItems) =>
          prevItems.map((item) =>
            item.id === itemId ? { ...item, quantity: updatedQuantity } : item
          )
        )
      })
      .catch((err) => {
        console.error("Error updating quantity:", err)
      })
  }

  const totalPrice = basketItems
    .reduce((total, item) => {
      return total + item.quantity * item.price
    }, 0)
    .toFixed(2)

  const TVA = ((totalPrice * 20) / 100).toFixed(2)

  return (
    <div>
      <div className="Basket">
        <div className="titleBasket">
          <h1>Votre panier</h1>
        </div>
        <div className="countainerBasket">
          <div className="LeftColumnB">
            {basketItems.map((item) => {
              return (
                <div className="BasketItems" key={item.id}>
                  <button
                    className="deleteButton"
                    onClick={() => deleteItem(item.id)}
                  >
                    X
                  </button>
                  <img
                    src={`http://localhost:4242${item.image}`}
                    alt={item.name}
                  />
                  <div className="QuantityB">
                    <h2>{item.name}</h2>
                    <div className="QuantitéB">
                      <button onClick={() => decreaseQuantity(item.id)}>
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button onClick={() => increaseQuantity(item.id)}>
                        +
                      </button>
                    </div>
                    <p>Price: {item.quantity * item.price} €</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="RightColumnB">
            <h1>TOTAL :{totalPrice} €</h1>
            <p>Dont TVA :{TVA} €</p>
            <Link to="/order">
              <div className="buttonAchats">
                <button className="buttonPurple">Finaliser mes achats</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Basket
