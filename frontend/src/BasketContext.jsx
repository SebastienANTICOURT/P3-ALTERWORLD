import React, { createContext, useState, useContext } from "react"

export const BasketContext = createContext()

export const BasketProvider = ({ children }) => {
  const [basketCount, setBasketCount] = useState(0)

  return (
    <BasketContext.Provider value={{ basketCount, setBasketCount }}>
      {children}
    </BasketContext.Provider>
  )
}

export const useBasket = () => {
  return useContext(BasketContext)
}
