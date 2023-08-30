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

  return (
    <div className="Basket">
      <h1>Your Basket</h1>
      {basketItems.map((item, index) => (
        <div className="BasketItem" key={index}>
          <img src={`http://localhost:4242${item.image}`} alt={item.name} />
          <div>
            <h2>{item.name}</h2>
            <p>Quantity: {item.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Basket
