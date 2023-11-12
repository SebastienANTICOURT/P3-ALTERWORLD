import React, { createContext, useCallback, useState } from "react"
import { getBasket } from "../Axios"

const BasketContext = createContext()

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([])

  const fetchBasketItems = useCallback(() => {
    getBasket().then((data) => {
      setBasketItems(data)
    })
  }, [])

  return (
    <BasketContext.Provider
      value={{
        basketItems,
        setBasketItems,
        fetchBasketItems,
      }}
    >
      {children}
    </BasketContext.Provider>
  )
}

export default BasketContext
