import { useState, useEffect } from "react"
import axios from "axios"
import "./Order.scss"

function Order({ users }) {
  const [orders] = useState([])
  const [date] = useState(new Date())
  const dateStr = date.toISOString().split("T")[0]
  const [basketItems, setBasketItems] = useState([])

  // const formatDate = (date) => {
  //   const day = String(date.getDate()).padStart(2, "0")
  //   const month = String(date.getMonth() + 1).padStart(2, "0")
  //   const year = date.getFullYear()
  //   return `${day}/${month}/${year}`
  // }
  // const formattedDate = formatDate(date)

  useEffect(() => {
    axios.get("http://localhost:4242/basket").then((res) => {
      // console.log(res.data)
      setBasketItems(res.data)
    })
  }, [])

  const handleOrderAndDelete = () => {
    addToOrder()
    deleteBasket()
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
          // console.log("Basket deleted successfully.")
          setBasketItems([])
        } else if (response.status === 404) {
          // console.log("No basket items found for this user.")
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
      <div className="countainerOrder">
        <div className="LeftColumnO">
          {/* <div className="dateO">{formattedDate}</div> */}
          <div className="presentationO">
            {Array.from(new Set(basketItems.map((item) => item.usersId))).map(
              (userId) => {
                const user = users.find((u) => u.usersId === userId)

                if (user) {
                  return (
                    <div key={user.usersId}>
                      <p className="titleInfo">Vos informations:</p>
                      <p>adresse: {user.address}</p>
                      <p>code postal: {user.zipcode}</p>
                      <p>ville: {user.city}</p>
                    </div>
                  )
                }
                return null
              }
            )}
          </div>
          <div className="OrderItems">
            {orders.map((item, index) => (
              <p key={index}>{item.billNumber}</p>
            ))}

            {basketItems.map((item, index) => {
              return (
                <div className="BasketItem" key={index}>
                  <button
                    className="deleteButton"
                    // onClick={() => deleteItem(index)}
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
        </div>
        <div className="RightColumnO">
          <p>TOTAL :{totalPrice} €</p>
          <p className="TVA">Dont TVA :{TVA} €</p>
          <div className="buttonOrder">
            <button className="buttonPurple" onClick={handleOrderAndDelete}>
              Commander!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Order
