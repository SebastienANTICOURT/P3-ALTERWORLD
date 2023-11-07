import { createContext, useContext, useEffect, useState } from "react"
import { getOrders } from "../Axios"

const OrdersContext = createContext()

export const useOrdersContext = () => useContext(OrdersContext)

export const OrdersProvider = ({ children }) => {
  const [ordersData, setOrdersData] = useState([])

  useEffect(() => {
    getOrders().then((data) => {
      setOrdersData(data)
    })
  }, [])

  return (
    <OrdersContext.Provider value={{ ordersData }}>
      {children}
    </OrdersContext.Provider>
  )
}
