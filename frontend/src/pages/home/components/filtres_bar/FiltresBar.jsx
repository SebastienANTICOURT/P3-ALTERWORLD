import { useState, useEffect } from "react"
import axios from "axios"
import FilterSection from "./FilterSection"
import ProductsList from "./ProductsList"
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
      return filtered.sort((a, b) => a.price - b.price)
    } else if (sortOrder === "Prix décroissant") {
      return filtered.sort((a, b) => b.price - a.price)
    }

    return filtered
  }

  return (
    <div className="FiltresBar">
      <div className="BlocFiltre">
        <FilterSection
          univers={univers}
          selectedUnivers={selectedUnivers}
          setSelectedUnivers={setSelectedUnivers}
          types={types}
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
        />
        <Dropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>
      <ProductsList products={filteredProducts()} />
    </div>
  )
}
export default FiltresBar
