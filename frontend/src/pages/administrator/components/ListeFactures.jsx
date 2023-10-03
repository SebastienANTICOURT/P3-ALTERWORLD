import axios from "axios"
import { useEffect, useState } from "react"
import "./ListeFactures.scss"

function ListeFactures() {
  const [orders, setOrders] = useState([])
  const userId = localStorage.getItem("usersId")

  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:4242/orders/${userId}`)
        .then((res) => {
          setOrders(res.data[0])
        })
        .catch((err) => {
          console.error("Error fetching orders", err)
        })
    }
  }, [userId])

  const groupByBillNumber = (orders) => {
    return orders.reduce((acc, order) => {
      if (!acc[order.billNumber]) {
        acc[order.billNumber] = []
      }
      acc[order.billNumber].push(order)
      return acc
    }, {})
  }

  const groupedOrders = groupByBillNumber(orders)

  return (
    <div className="ListeFactures">
      <h1>Historique des achats</h1>
      <div className="achats">
        {Object.entries(groupedOrders).map(([billNumber, orders]) => (
          <div key={billNumber}>
            <h2>Numéro de facture: {billNumber}</h2>
            {orders.length > 0 && (
              <p>
                Date: {new Date(orders[0].date).toLocaleDateString("en-GB")}
              </p>
            )}
            {orders.map((order) => (
              <li key={order.ordersId}>
                Produit: {order.name}, Quantité:
                {order.quantity}, Total: {order.total}
              </li>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListeFactures
