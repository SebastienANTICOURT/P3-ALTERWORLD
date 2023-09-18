import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import "./Basket.scss"

function Basket() {
  const [basketItems, setBasketItems] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4242/basket").then((res) => {
      // console.log(res.data)
      setBasketItems(res.data)
    })
  }, [])

  const deleteItem = (index) => {
    const itemId = basketItems[index].id
    axios
      .delete(`http://localhost:4242/basket/${itemId}`)
      .then((res) => {
        // console.log(itemId)
        const newBasketItems = [...basketItems]
        newBasketItems.splice(index, 1)
        setBasketItems(newBasketItems)
      })
      .catch((err) => {
        console.error("Error deleting item:", err)
      })
  }

  const decreaseQuantity = (index) => {
    const newBasketItems = [...basketItems]
    const updatedItem = newBasketItems[index]
    updatedItem.quantity = Math.max(1, updatedItem.quantity - 1)
    axios
      .put(`http://localhost:4242/basket/${updatedItem.id}`, {
        quantity: updatedItem.quantity,
      })
      .then(() => {
        setBasketItems(newBasketItems)
      })
      .catch((err) => {
        console.error("Error updating quantity:", err)
      })
  }

  const increaseQuantity = (index) => {
    const newBasketItems = [...basketItems]
    const updatedItem = newBasketItems[index]
    updatedItem.quantity += 1
    axios
      .put(`http://localhost:4242/basket/${updatedItem.id}`, {
        quantity: updatedItem.quantity,
      })
      .then(() => {
        setBasketItems(newBasketItems)
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
        <div className="LeftColumnB">
          <h1>Votre panier</h1>
          {basketItems.map((item, index) => {
            return (
              <div className="BasketItem" key={index}>
                <button
                  className="deleteButton"
                  onClick={() => deleteItem(index)}
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
                    <button onClick={() => decreaseQuantity(index)}>-</button>
                    <p>{item.quantity}</p>
                    <button onClick={() => increaseQuantity(index)}>+</button>
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
        </div>
      </div>
      <Link to="/order">
        <div className="buttonAchats">
          <button className="buttonPurple">Finaliser mes achats</button>
        </div>
      </Link>
    </div>
  )
}
export default Basket
