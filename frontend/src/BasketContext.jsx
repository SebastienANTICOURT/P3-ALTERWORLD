import React, { useState, useCallback } from "react"
import axios from "axios"

const BasketContext = React.createContext()

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([])

  const fetchBasketItems = useCallback(() => {
    axios.get("http://localhost:4242/basket").then((res) => {
      setBasketItems(res.data)
    })
  }, [])

  return (
    <BasketContext.Provider value={{ basketItems, fetchBasketItems }}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketContext
