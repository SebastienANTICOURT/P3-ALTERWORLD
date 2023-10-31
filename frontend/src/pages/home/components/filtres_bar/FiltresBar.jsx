import { useEffect, useState } from "react"
import {
  getProducts,
  getTypes,
  getUnivers,
  getUsers,
} from "../../../../components/Axios"
import Dropdown from "./Dropdown"
import "./FiltresBar.scss"
import ProductsList from "./ProductsList"

function FiltresBar() {
  const [products, setProducts] = useState([])
  const [univers, setUnivers] = useState([])
  const [selectedUnivers, setSelectedUnivers] = useState("all")
  const [types, setTypes] = useState([])
  const [selectedTypes, setSelectedTypes] = useState("all")
  const [creators, setCreators] = useState([])
  const [selectedCreators, setSelectedCreators] = useState("all")
  const [sortOrder, setSortOrder] = useState("Trier par prix")

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data)
    })
    getUnivers().then((data) => {
      setUnivers(data)
    })
    getUsers().then((data) => {
      setCreators(data)
    })
    getTypes().then((data) => {
      setTypes(data)
    })
  })

  const filteredProducts = () => {
    let filtered = products
    if (selectedUnivers !== "all") {
      filtered = filtered.filter(
        (product) => product.univerId.toString() === selectedUnivers
      )
    }
    if (selectedTypes !== "all") {
      filtered = filtered.filter(
        (product) => product.typesId.toString() === selectedTypes
      )
    }
    if (selectedCreators !== "all") {
      filtered = filtered.filter(
        (product) => product.creatorId.toString() === selectedCreators
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
          creators={creators}
          selectedCreators={selectedCreators}
          setSelectedCreators={setSelectedCreators}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
      </div>
      <div className="proposeCreation"></div>
      <ProductsList products={filteredProducts()} />
    </div>
  )
}
export default FiltresBar
