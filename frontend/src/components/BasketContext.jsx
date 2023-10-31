import axios from "axios"
import React, { useCallback, useState } from "react"

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
    setBasketChanged((prevState) => !prevState)
  }

  return (
    <BasketContext.Provider
      value={{
        basketItems,
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
