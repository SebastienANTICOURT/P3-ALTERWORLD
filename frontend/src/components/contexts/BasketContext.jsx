import React, { createContext, useCallback, useState } from "react"
import { getBasket } from "../Axios"

const BasketContext = createContext()

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([])
  const [basketChanged, setBasketChanged] = useState(false)

  const fetchBasketItems = useCallback(() => {
    getBasket().then((data) => {
      setBasketItems(data)
    })
  }, [])

  const triggerBasketChange = () => {
    setBasketChanged((prevState) => !prevState)
  }

  return (
    <BasketContext.Provider
      value={{
        basketItems,
        setBasketItems,
        fetchBasketItems,
        triggerBasketChange,
        basketChanged,
        setBasketChanged,
      }}
    >
      {children}
    </BasketContext.Provider>
  )
}

export default BasketContext
