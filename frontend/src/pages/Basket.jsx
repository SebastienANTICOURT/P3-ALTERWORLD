import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { deleteItemFromBasket, getBasket } from "../components/Axios"
import BasketContext from "../components/contexts/BasketContext"
import "./Basket.scss"

function Basket() {
  const { basketItems, setBasketItems } = useContext(BasketContext)

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
