import { useContext, useEffect, useState } from "react"
import smiley from "../../assets/smiley.png"
import { instance, postOrder } from "../../components/Axios"
import BasketContext from "../../components/contexts/BasketContext"
import BasketItems from "../BasketItems"
import "./Order.scss"
import Presentation from "./components/Presentation"
import RightColumn from "./components/RightColumn"

function Order({ users, userLog }) {
  const [date] = useState(new Date())
  const dateStr = date.toISOString().split("T")[0]
  const [showMessage, setShowMessage] = useState(false)
  const { basketItems, fetchBasketItems, setBasketItems } =
    useContext(BasketContext)

  useEffect(() => {
    fetchBasketItems()
  }, [setBasketItems])

  const handleOrderAndDelete = () => {
    addToOrder()
    deleteBasket()
    setShowMessage(true)
  }

  const addToOrder = () => {
    instance
      .get("/latestBillNumber")
      .then((responseBillNumber) => {
        const latestBillNumber = responseBillNumber.data
        const newBillNumber = latestBillNumber + 1
        return postOrder(basketItems, newBillNumber, dateStr)
      })
      .then(() => {})
      .catch((error) => {
        console.error(error)
        alert(
          "Une erreur s'est produite lors de l'ajout des produits à la commande."
        )
      })
  }

  const deleteBasket = () => {
    const usersId = basketItems[0].usersId
    instance
      .delete(`/basket/all?usersId=${usersId}`)
      .then(() => {
        setBasketItems([])
      })
      .catch((error) => {
        console.error("Error deleting the basket:", error)
      })
  }

  const totalPrice = basketItems
    .reduce((total, item) => {
      return total + item.quantity * item.price
    }, 0)
    .toFixed(2)

  const TVA = ((totalPrice * 20) / 100).toFixed(2)

  return (
    <div className="order">
      <div className="titleOrder">
        <h1>Votre commande</h1>
      </div>
      <div className="Merci">
        {showMessage && (
          <p>
            {userLog && `Merci, ${userLog.firstName} `}{" "}
            <img src={smiley} alt="" /> à bientot pour de nouvelles aventures.
          </p>
        )}
      </div>
      <div className="countainerOrder">
        <div className="LeftColumnO">
          <Presentation users={users} basketItems={basketItems} />
          <BasketItems />
        </div>
        <div className="RightColumnO" style={{ opacity: showMessage ? 0 : 1 }}>
          <RightColumn
            handleOrderAndDelete={handleOrderAndDelete}
            totalPrice={totalPrice}
            TVA={TVA}
          />
        </div>
      </div>
    </div>
  )
}
export default Order
