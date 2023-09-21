import React, { useState, useCallback } from "react"
import axios from "axios"

const BasketContext = React.createContext()

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([])
  const [basketChanged, setBasketChanged] = useState(false)

  const fetchBasketItems = useCallback(() => {
    axios.get("http://localhost:4242/basket").then((res) => {
      setBasketItems(res.data)
    })
  }, [])

  const triggerBasketChange = () => {
    setBasketChanged((prevState) => !prevState) // Toggle the state
  }

  return (
    <BasketContext.Provider
      value={{
        basketItems,
        fetchBasketItems,
        triggerBasketChange,
        basketChanged, // provide basketChanged in context
        setBasketChanged, // providing this function is optional and is only needed if child components need to modify basketChanged directly.
      }}
    >
      {children}
    </BasketContext.Provider>
  )
}

export default BasketContext
