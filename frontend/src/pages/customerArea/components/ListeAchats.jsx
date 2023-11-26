import { useEffect, useState } from "react"
import { getListeAchats } from "../../../components/Axios"
import "./Listes.scss"

function ListeAchats() {
  const [purchases, setPurchases] = useState([])

  useEffect(() => {
    const getPurchases = async () => {
      try {
        const data = await getListeAchats()
        setPurchases(data)
      } catch (error) {
        console.error("Erreur lors de la récupération des achats", error)
      }
    }
    getPurchases()
  }, [])

  const groupByBillNumber = (purchases) => {
    return purchases.reduce((acc, purchase) => {
      if (!acc[purchase.billNumber]) {
        acc[purchase.billNumber] = []
      }
      acc[purchase.billNumber].push(purchase)
      return acc
    }, {})
  }

  const groupedOrders = groupByBillNumber(purchases)

  return (
    <div className="Listes">
      <h1>Historique des achats</h1>
      <div className="colonne">
        {Object.entries(groupedOrders).map(([billNumber, purchases]) => (
          <div key={billNumber}>
            <h2>Numéro de facture: {billNumber}</h2>
            {purchases.length > 0 && (
              <p>
                Date: {new Date(purchases[0].date).toLocaleDateString("en-GB")}
              </p>
            )}
            {purchases.map((purchase) => (
              <li key={purchase.ordersId}>
                Produit: {purchase.name}, Quantité:
                {purchase.quantity}, Total: {purchase.total}
              </li>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListeAchats
