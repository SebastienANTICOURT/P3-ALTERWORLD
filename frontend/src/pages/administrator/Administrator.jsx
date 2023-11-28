import { useEffect, useState } from "react"
import { getProducts } from "../../components/Axios"
import "./Administrator.scss"
import Customers from "./components/Customers"
import Products from "./components/Products"

function Administrator({ users }) {
  const [products, setProducts] = useState([])
  const [activeSection, setActiveSection] = useState("customers")

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data)
    })
  }, [])

  return (
    <div className="UserContainer">
      <h1>Espace Administrateur</h1>
      <div className="sectionButtons">
        <button onClick={() => setActiveSection("customers")}>Clients</button>
        <button onClick={() => setActiveSection("products")}>Produits</button>
      </div>
      {activeSection === "customers" && (
        <div>
          <Customers
            users={users} // deleteUser={deleteUser}
          />
        </div>
      )}
      {activeSection === "products" && (
        <div>
          <Products products={products} />
        </div>
      )}
    </div>
  )
}

export default Administrator
