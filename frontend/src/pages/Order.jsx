import { useState, useEffect } from "react"
import axios from "axios"
import "./Order.scss"

function Order() {
  const [orders] = useState([])
  const [date] = useState(new Date())
  const dateStr = date.toISOString().split("T")[0]
  const [basketItems, setBasketItems] = useState([])

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0")
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }
  const formattedDate = formatDate(date)

  useEffect(() => {
    axios.get("http://localhost:4242/basket").then((res) => {
      // console.log(res.data)
      setBasketItems(res.data)
    })
  }, [])

  const addToOrder = () => {
    axios
      .get("http://localhost:4242/latestBillNumber")
      .then((response) => {
        const latestBillNumber = response.data
        const newBillNumber = latestBillNumber + 1
        const orders = basketItems.map((item) => ({
          usersId: item.usersId,
          productsId: item.productsId,
          billNumber: newBillNumber,
          quantity: item.quantity,
          total: item.quantity * item.price,
          date: dateStr,
        }))
        // console.log("commandes:", orders)
        axios
          .post("http://localhost:4242/orders", orders)
          .then(() => {
            alert("Tous les produits ont été ajoutés à la commande")
            setBasketItems([])
          })
          .catch((error) => {
            console.error("Erreur Axios :", error)
            alert(
              "Une erreur s'est produite lors de l'ajout des produits à la commande."
            )
          })
      })
      .catch((error) => {
        console.error("Error fetching latest billNumber:", error)
      })
  }

  return (
    <div className="order">
      <div className="LeftColumnB">
        <div className="dateO">{formattedDate}</div>
        {orders.map((item, index) => (
          <p key={index}>{item.billNumber}</p>
        ))}
        <h1>Votre commande</h1>
        {basketItems.map((item, index) => {
          return (
            <div className="BasketItem" key={index}>
              <button
                className="deleteButton"
                // onClick={() => deleteItem(index)}
              >
                X
              </button>
              <img src={`http://localhost:4242${item.image}`} alt={item.name} />
              <div className="QuantityB">
                <h2>{item.name}</h2>
                <div className="QuantitéB">
                  {/* <button onClick={() => decreaseQuantity(index)}>-</button>
                  <p>{item.quantity}</p>
                  <button onClick={() => increaseQuantity(index)}>+</button> */}
                </div>
                <p>Price: {item.quantity * item.price} €</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="buttonOrder">
        <button className="buttonPurple" onClick={addToOrder}>
          Commander!
        </button>
      </div>
    </div>
  )
}
export default Order
