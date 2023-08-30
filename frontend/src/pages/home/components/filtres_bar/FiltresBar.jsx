import { useState, useEffect } from "react"
import axios from "axios"
import ProductsList from "./ProductsList"
import Dropdown from "./Dropdown"
import "./FiltresBar.scss"

function FiltresBar() {
  const [products, setProducts] = useState([])
  const [univers, setUnivers] = useState([])
  const [types, setTypes] = useState([])
  const [selectedUnivers, setSelectedUnivers] = useState("all")
  const [selectedTypes, setSelectedTypes] = useState("all")
  const [sortOrder, setSortOrder] = useState("Trier par prix")

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
    let filtered = products
    if (selectedUnivers !== "all") {
      filtered = filtered.filter(
        (product) => product.univer_id.toString() === selectedUnivers
      )
    }
    if (selectedTypes !== "all") {
      filtered = filtered.filter(
        (product) => product.type_id.toString() === selectedTypes
      )
    }
    if (sortOrder === "Prix croissant") {
      return filtered.sort((a, b) => a.price - b.price)
    } else if (sortOrder === "Prix décroissant") {
      return filtered.sort((a, b) => b.price - a.price)
    }
    return filtered
  }

  return (
    <div className="FiltresBar">
      <div className="BlocFiltre">
        <Dropdown
          univers={univers}
          selectedUnivers={selectedUnivers}
          setSelectedUnivers={setSelectedUnivers}
          types={types}
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
      </div>
      <div className="proposeCreation">
        <p>Proposez vos créations !</p>
      </div>
      <ProductsList products={filteredProducts()} />
    </div>
  )
}
export default FiltresBar
