import { useEffect, useState } from "react"
import { getOrders } from "../../components/Axios"
import "./CulstomerArea.scss"
import ListeAchats from "./components/ListeAchats"
import ListeVentes from "./components/ListeVentes"

function CustomerArea() {
  const [ordersData, setOrdersData] = useState([])

  useEffect(() => {
    getOrders().then((data) => {
      setOrdersData(data[0])
    })
  }, [])

  return (
    <div className="CustomerArea">
      <div className="ListeFactures">
        <ListeAchats orders={ordersData} />
        <ListeVentes orders={ordersData} />
      </div>
    </div>
  )
}
export default CustomerArea
