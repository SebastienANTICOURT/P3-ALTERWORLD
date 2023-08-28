import { useState, useEffect } from "react"
import axios from "axios"
import ProductsList from "../../../../components/ProductsList"
import Dropdown from "./Dropdown"
import "./FiltresBar.scss"

function FiltresBar() {
  const [products, setProducts] = useState([])
  const [univers, setUnivers] = useState([])
  const [types, setTypes] = useState([])
  const [selectedUnivers, setSelectedUnivers] = useState([])
  const [selectedTypes, setSelectedTypes] = useState([])
  const [sortOrder, setSortOrder] = useState("Trier par")

  useEffect(() => {
    axios
      .get("http://localhost:4242/products")
      .then((res) => setProducts(res.data))
    axios
      .get("http://localhost:4242/univers")
      .then((res) => setUnivers(res.data))
    axios.get("http://localhost:4242/types").then((res) => setTypes(res.data))
  }, [])

  const filteredProducts = () => {
    const filtered = products.filter(
      (product) =>
        (selectedUnivers.length === 0 ||
          selectedUnivers.includes(product.univer_id)) &&
        (selectedTypes.length === 0 || selectedTypes.includes(product.type_id))
    )

    if (sortOrder === "Prix croissant") {
      return filtered.sort((a, b) => a.price - b.price) // Assuming products have a 'price' property
    } else if (sortOrder === "Prix décroissant") {
      return filtered.sort((a, b) => b.price - a.price)
    }

    return filtered
  }

  return (
    <div className="FiltresBar">
      <div className="FB">
        <div className="DivFB">
          <h1>Univers :</h1>
          {univers.map((univer) => (
            <p
              key={univer.id}
              className={
                selectedUnivers.includes(univer.id)
                  ? "selected"
                  : "defaultColor"
              }
              onClick={() => {
                if (selectedUnivers.includes(univer.id)) {
                  setSelectedUnivers(
                    selectedUnivers.filter((id) => id !== univer.id)
                  )
                } else {
                  setSelectedUnivers([...selectedUnivers, univer.id])
                }
              }}
            >
              {univer.name}
            </p>
          ))}
        </div>
        <div className="DivFB">
          <h1>Types :</h1>
          {types.map((type) => (
            <p
              key={type.id}
              className={
                selectedTypes.includes(type.id) ? "selected" : "defaultColor"
              }
              onClick={() => {
                if (selectedTypes.includes(type.id)) {
                  setSelectedTypes(selectedTypes.filter((id) => id !== type.id))
                } else {
                  setSelectedTypes([...selectedTypes, type.id])
                }
              }}
            >
              {type.name}
            </p>
          ))}
        </div>
      </div>
      <Dropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <ProductsList products={filteredProducts()} />
    </div>
  )
}
export default FiltresBar
