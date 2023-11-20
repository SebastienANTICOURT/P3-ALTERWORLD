import { useEffect, useState } from "react"
import { deleteUserById, getProducts, getUsers } from "../../components/Axios"
import "./Administrator.scss"
import Customers from "./components/Customers"
import Graph from "./components/Graph"
import Graph2 from "./components/Graph2"
import Products from "./components/Products"

function Administrator({ ordersData }) {
  const [users, setUsers] = useState([])
  const [products, setProducts] = useState([])
  const [activeSection, setActiveSection] = useState("customers")

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data)
    })
    getProducts().then((data) => {
      setProducts(data)
    })
  }, [])

  const deleteUser = (userId) => {
    deleteUserById(userId)
      .then(() => {
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user.usersId !== userId)
        )
      })
      .catch((err) => {
        console.error("Error deleting user:", err)
      })
  }

  return (
    <div className="UserContainer">
      <h1>Espace Administrateur</h1>
      <div className="sectionButtons">
        <button onClick={() => setActiveSection("customers")}>Clients</button>
        <button onClick={() => setActiveSection("products")}>Produits</button>
        <button onClick={() => setActiveSection("charts")}>Graphiques</button>
      </div>
      {activeSection === "customers" && (
        <div>
          <Customers users={users} deleteUser={deleteUser} />
        </div>
      )}
      {activeSection === "products" && (
        <div>
          <Products products={products} />
        </div>
      )}
      {activeSection === "charts" && (
        <div className="GraphA">
          <h1>Produits par quantités vendues.</h1>
          <Graph orders={ordersData} />
          <h1>clients par quantités vendues.</h1>
          <Graph2 orders={ordersData} />
        </div>
      )}
    </div>
  )
}

export default Administrator
