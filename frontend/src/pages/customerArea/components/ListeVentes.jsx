import { useEffect, useState } from "react"
import { getListeVentes } from "../../../components/Axios"
import "./Listes.scss"

function ListeVentes() {
  const [sales, setSales] = useState([])

  useEffect(() => {
    const getSales = async () => {
      try {
        const data = await getListeVentes()
        setSales(data)
      } catch (error) {
        console.error("Erreur lors de la récupération des achats", error)
      }
    }
    getSales()
  }, [])

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
