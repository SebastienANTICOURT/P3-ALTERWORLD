import { useContext, useState } from "react"
import smiley from "../../assets/smiley.png"
import { instance } from "../../components/Axios"
import BasketContext from "../../components/contexts/BasketContext"
import BasketItems from "../BasketItems"
import "./Order.scss"
import Presentation from "./components/Presentation"
import RightColumn from "./components/RightColumn"

function Order({ users, userLog }) {
  const [date] = useState(new Date())
  const dateStr = date.toISOString().substring(0, 10)
  const [showMessage, setShowMessage] = useState(false)
  const { basketItems, setBasketItems } = useContext(BasketContext)

  const addToOrder = async () => {
    try {
      const responseBillNumber = await instance.get("/latestBillNumber")
      const latestBillNumber = responseBillNumber.data
      const newBillNumber = latestBillNumber + 1
      const formattedOrdersData = basketItems.map((item) => ({
        usersId: item.usersId,
        productsId: item.productsId,
        billNumber: newBillNumber,
        quantity: item.quantity,
        total: item.quantity * item.price,
        date: dateStr,
      }))
      await instance.post("/orders", formattedOrdersData)
      await deleteBasket()
      setShowMessage(true)
    } catch (error) {
      console.error(error)
      alert(
        "Une erreur s'est produite lors de l'ajout des produits à la commande."
      )
    }
  }
  const deleteBasket = async () => {
    try {
      const usersId = basketItems[0].usersId
      await instance.delete(`/basket/all?usersId=${usersId}`)
      setBasketItems([])
    } catch (error) {
      console.error("Error deleting the basket:", error)
    }
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
          <h1>
            {userLog && `Merci, ${userLog.firstName} `}{" "}
            <img src={smiley} alt="smiley" /> à bientot pour de nouvelles
            aventures.
          </h1>
        )}
      </div>
      <div className="countainerOrder">
        <div className="LeftColumnO">
          <Presentation users={users} basketItems={basketItems} />
          <BasketItems />
        </div>
        <div className="RightColumnO" style={{ opacity: showMessage ? 0 : 1 }}>
          <RightColumn
            handleOrderAndDelete={addToOrder}
            totalPrice={totalPrice}
            TVA={TVA}
          />
        </div>
      </div>
    </div>
  )
}
export default Order
