import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import "./Basket.scss"

function Basket() {
  const [basketItems, setBasketItems] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4242/basket").then((res) => {
      setBasketItems(res.data)
    })
  }, [])

  const deleteItem = (index) => {
    // index fait reference à la position d'un element particulier
    const itemId = basketItems[index].id
    axios
      .delete(`http://localhost:4242/basket/${itemId}`)
      .then((res) => {
        const newBasketItems = [...basketItems]
        newBasketItems.splice(index, 1)
        setBasketItems(newBasketItems)
      })
      .catch((err) => {
        console.error("Error deleting item:", err)
      })
  }

  const decreaseQuantity = (index) => {
    const newBasketItems = basketItems.slice() // nouveau tableau pour non modification directe de l'état.
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
    const newBasketItems = basketItems.slice()
    const updatedItem = newBasketItems[index]
    updatedItem.quantity += 1 // C'est égal à updatedItem.quantity = updatedItem.quantity + 1; operateur d'assignation composé
    // qui prend la valeur de la variable de gauche, la modifie en ajoutant la valeur à droite,
    // puis réaffecte le résultat à celle de gauche
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
        <div className="titleBasket">
          <h1>Votre panier</h1>
        </div>
        <div className="countainerBasket">
          <div className="LeftColumnB">
            {basketItems.map((item, index) => {
              return (
                <div className="BasketItems" key={index}>
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
