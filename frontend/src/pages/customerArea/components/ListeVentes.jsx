import { useAuthContext } from "../../../components/AuthContext"
import "./Listes.scss"

function ListeVentes({ orders }) {
  const { userLog } = useAuthContext()
  const sales = orders.filter((order) => order.creatorId === userLog.usersId)

  const groupByBillNumber = (sales) => {
    return sales.reduce((acc, sale) => {
      if (!acc[sale.billNumber]) {
        acc[sale.billNumber] = []
      }
      acc[sale.billNumber].push(sale)
      return acc
    }, {})
  }

  const groupedSales = groupByBillNumber(sales)

  return (
    <div className="Listes">
      <h1>Historique des ventes</h1>
      <div className="colonne">
        {Object.entries(groupedSales).map(([billNumber, sales]) => (
          <div key={billNumber}>
            <h2>Numéro de facture: {billNumber}</h2>
            {sales.length > 0 && (
              <p>Date: {new Date(sales[0].date).toLocaleDateString("en-GB")}</p>
            )}
            {sales.map((sale) => (
              <li key={sale.ordersId}>
                Produit: {sale.name}, Quantité: {sale.quantity}, Total:{" "}
                {sale.total}
              </li>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListeVentes
