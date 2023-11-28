import { useContext } from "react"
import { instance } from "../components/Axios"
import BasketContext from "../components/contexts/BasketContext"
import "./BasketItems.scss"

function BasketItems() {
  const { basketItems, setBasketItems } = useContext(BasketContext)

  const deleteItem = (itemId) => {
    instance
      .delete(`/basket/${itemId}`)
      .then(() => {
        setBasketItems((prevItems) =>
          prevItems.filter((item) => item.id !== itemId)
        )
      })
      .catch((err) => {
        console.error("Erreur pendant la suppression de l'élément", err)
      })
  }
  return (
    <div className="LeftColumnB">
      {basketItems.map((item) => {
        return (
          <div className="itemsOrder" key={item.id}>
            <div className="imageOrder">
              <button
                className="deleteButton"
                onClick={() => deleteItem(item.id)}
              >
                X
              </button>
              <img
                src={`http://localhost:4242${item.image}`}
                alt={item.prName}
              />
            </div>
            <div className="QuantityB">
              <h1>{item.prName}</h1>
              <p>Quantité: {item.quantity}</p>
              <p>Prix: {item.quantity * item.price} €</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default BasketItems
