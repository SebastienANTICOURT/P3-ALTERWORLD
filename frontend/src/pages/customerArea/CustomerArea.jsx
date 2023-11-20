import { useState } from "react"
import { useOrdersContext } from "../../components/contexts/OrdersContext"
import "./CulstomerArea.scss"
import CustomersData from "./components/CustomersData"
import ListeAchats from "./components/ListeAchats"
import ListeVentes from "./components/ListeVentes"

function CustomerArea() {
  const { ordersData } = useOrdersContext()
  const [activeSection, setActiveSection] = useState("customersData")

  return (
    <div className="UserContainer">
      <h1>Espace Client</h1>
      <div className="sectionButtons">
        <button onClick={() => setActiveSection("customersData")}>
          Mes informations
        </button>
        <button onClick={() => setActiveSection("operations")}>
          Mes opérations
        </button>
      </div>
      {activeSection === "customersData" && (
        <div>
          <CustomersData />
        </div>
      )}
      {activeSection === "operations" && (
        <div className="ListeFactures">
          <ListeAchats />
          <ListeVentes orders={ordersData} />
        </div>
      )}
    </div>
  )
}
export default CustomerArea
