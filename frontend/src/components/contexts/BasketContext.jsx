import { createContext, useEffect, useState } from "react"
import { instance } from "../Axios"

const BasketContext = createContext()

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([])

  const fetchBasketItems = async () => {
    try {
      const response = await instance.get("/basket")
      setBasketItems(response.data)
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des éléments du panier :",
        error
      )
    }
  }

  useEffect(() => {
    fetchBasketItems()
  }, [])

  return (
    <BasketContext.Provider
      value={{ basketItems, setBasketItems, fetchBasketItems }}
    >
      {children}
    </BasketContext.Provider>
  )
}

export default BasketContext
