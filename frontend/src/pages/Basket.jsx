import { useContext } from "react"
import { Link } from "react-router-dom"
import BasketContext from "../components/contexts/BasketContext"
import "./Basket.scss"
import BasketItems from "./BasketItems"

function Basket() {
  const { basketItems } = useContext(BasketContext)

  const totalPrice = basketItems
    .reduce((total, item) => {
      return total + item.quantity * item.price
    }, 0)
    .toFixed(2)

  const TVA = ((totalPrice * 20) / 100).toFixed(2)

  return (
    <div>
      <div className="ContainerOrder">
        <div className="titleOrder">
          <h1>Votre panier</h1>
        </div>
        <div className="columnsOrders">
          <BasketItems />
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
