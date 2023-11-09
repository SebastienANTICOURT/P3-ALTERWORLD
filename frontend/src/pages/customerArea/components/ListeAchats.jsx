import { useAuthContext } from "../../../components/contexts/AuthContext"
import "./Listes.scss"

function ListeAchats({ orders }) {
  const { userLog } = useAuthContext()
  const purchases = orders.filter((order) => order.usersId === userLog.usersId)

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
