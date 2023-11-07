import { useOrdersContext } from "../../components/contexts/OrdersContext"
import "./CulstomerArea.scss"
import ListeAchats from "./components/ListeAchats"
import ListeVentes from "./components/ListeVentes"

function CustomerArea() {
  const { ordersData } = useOrdersContext()

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
