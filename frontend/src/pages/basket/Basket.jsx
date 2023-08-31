import { useEffect, useState } from "react"
import axios from "axios"
import "./Basket.scss"

function Basket() {
  const [basketItems, setBasketItems] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4242/basket").then((res) => {
      setBasketItems(res.data)
    })
  }, [])

  const decreaseQuantity = (index) => {
    const newBasketItems = [...basketItems]
    newBasketItems[index].quantity = Math.max(
      1,
      newBasketItems[index].quantity - 1
    )
    setBasketItems(newBasketItems)
  }
  const increaseQuantity = (index) => {
    const newBasketItems = [...basketItems]
    newBasketItems[index].quantity += 1
    setBasketItems(newBasketItems)
  }

  const totalPrice = basketItems.reduce((total, item) => {
    return total + item.quantity * item.price
  }, 0)

  return (
    <div className="Basket">
      <div className="LeftColumnB">
        <h1>Your Basket</h1>
        {basketItems.map((item, index) => (
          <div className="BasketItem" key={index}>
            <img src={`http://localhost:4242${item.image}`} alt={item.name} />
            <div>
              <h2>{item.name}</h2>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => decreaseQuantity(index)}>-</button>
              <p>{item.quantity}</p>
              <button onClick={() => increaseQuantity(index)}>+</button>
              <p>Price: {item.quantity * item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="RightColumnB">
        <h1>TOTAL :{totalPrice}</h1>
        <p>Dont TVA :{(totalPrice * 20) / 100}</p>
      </div>
    </div>
  )
}

export default Basket
