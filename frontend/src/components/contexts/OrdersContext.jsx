import { createContext, useContext, useEffect, useState } from "react"
import { getOrders } from "../Axios"

const OrdersContext = createContext()

export const useOrdersContext = () => useContext(OrdersContext)

export const OrdersProvider = ({ children }) => {
  const [ordersData, setOrdersData] = useState([])

  const aggregateData = (data) => {
    return data.reduce((aggregated, order) => {
      const productName = order.prName
      if (aggregated[productName]) {
        aggregated[productName] += order.quantity
      } else {
        aggregated[productName] = order.quantity
      }
      return aggregated
    }, {})
  }

  const salesQuantities = aggregateData(ordersData)

  useEffect(() => {
    getOrders().then((data) => {
      setOrdersData(data)
    })
  }, [])

  return (
    <OrdersContext.Provider
      value={{ ordersData, salesQuantities, aggregateData }}
    >
      {children}
    </OrdersContext.Provider>
  )
}
