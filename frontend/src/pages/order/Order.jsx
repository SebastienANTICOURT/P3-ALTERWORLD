import axios from "axios"
import { useEffect, useState } from "react"
import smiley from "../../assets/smiley.png"
import "./Order.scss"
import ItemsOrder from "./components/ItemsOrder"
import Presentation from "./components/Presentation"
import RightColumn from "./components/RightColumn"

function Order({ users, user }) {
  const [date] = useState(new Date())
  const dateStr = date.toISOString().split("T")[0]
  const [basketItems, setBasketItems] = useState([])
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:4242/basket").then((res) => {
      // console.log(res.data)
      setBasketItems(res.data)
    })
  }, [])

  const handleOrderAndDelete = () => {
    addToOrder()
    deleteBasket()
    setShowMessage(true)
  }

  const addToOrder = () => {
    return new Promise((resolve, reject) => {
      // console.log("addToOrder déclenché")
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
      axios
        .get("http://localhost:4242/latestBillNumber")
        .then((responseBillNumber) => {
          const latestBillNumber = responseBillNumber.data
          const newBillNumber = latestBillNumber + 1
          return axios.post(
            "http://localhost:4242/orders",
            basketItems.map((item) => ({
              usersId: item.usersId,
              productsId: item.productsId,
              billNumber: newBillNumber,
              quantity: item.quantity,
              total: item.quantity * item.price,
              date: dateStr,
            })),
            { headers }
          )
        })
        .then(() => {
          resolve()
        })
        .catch((error) => {
          console.error("Erreur lors du traitement :", error)
          alert(
            "Une erreur s'est produite lors de l'ajout des produits à la commande ou de la suppression du panier."
          )
          reject(error)
        })
    })
  }

  const deleteBasket = () => {
    if (basketItems.length === 0) {
      // console.log("Basket is empty, nothing to delete.")
      return
    }
    const usersId = basketItems[0].usersId
    axios
      .delete(`http://localhost:4242/basket/all?usersId=${usersId}`)
      .then((response) => {
        if (response.status === 204) {
          setBasketItems([])
        }
      })
      .catch((error) => {
        console.error("Error deleting the basket:", error)
        alert("Une erreur s'est produite lors de la suppression du panier.")
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
      <h1>Votre commande</h1>
      <div className="Merci">
        {showMessage && (
          <p>
            {user && `Merci, ${user.firstName} `} <img src={smiley} alt="" /> à
            bientot pour de nouvelles aventures.
          </p>
        )}
      </div>
      <div className="countainerOrder">
        <div className="LeftColumnO">
          <Presentation users={users} basketItems={basketItems} />
          <ItemsOrder basketItems={basketItems} />
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
