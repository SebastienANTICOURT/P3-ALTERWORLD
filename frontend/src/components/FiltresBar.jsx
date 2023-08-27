import { useState, useEffect } from "react"
import axios from "axios"
import ProductsList from "./ProductsList"
import { useState, useEffect } from "react"
import axios from "axios"
import ProductsList from "./ProductsList"
import "./FiltresBar.scss"

function FiltresBar() {
  const [products, setProducts] = useState([])
  const [univers, setUnivers] = useState([])
  const [natures, setNatures] = useState([])
  const [selectedUnivers, setSelectedUnivers] = useState([])
  const [selectedNatures, setSelectedNatures] = useState([])

  const fetchFilteredProducts = () => {
    let filterURL = "http://localhost:4242/products"
    if (selectedUnivers || selectedNatures) {
      filterURL += `?univer=${selectedUnivers}&nature=${selectedNatures}`
    }

    axios.get(filterURL).then((res) => setProducts(res.data))
  }

  useEffect(() => {
    axios.get("http://localhost:4242/univers").then((res) => {
      setUnivers(res.data)
    })
    axios
      .get("http://localhost:4242/nature")
      .then((res) => setNatures(res.data))
    fetchFilteredProducts()
  }, [selectedUnivers, selectedNatures])

  return (
    <div className="FiltresBar">
      <div className="FB">
        <div className="DivFB">
          <h1>Univers</h1>
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
          <h1>Objets</h1>
          {natures.map((nature) => (
            <p
              key={nature.id}
              className={
                selectedNatures.includes(nature.id)
                  ? "selected"
                  : "defaultColor"
              }
              onClick={() => {
                if (selectedNatures.includes(nature.id)) {
                  setSelectedNatures(
                    selectedNatures.filter((id) => id !== nature.id)
                  )
                } else {
                  setSelectedNatures([...selectedNatures, nature.id])
                }
              }}
            >
              {nature.name}
            </p>
          ))}
        </div>
      </div>
      <div className="buttonFB">
        <button onClick={fetchFilteredProducts}>SELECTIONNER</button>
      </div>
      <div className="BestSellersH">
        <ProductsList products={products} />
        <button onClick={fetchFilteredProducts}>SELECTIONNER</button>
      </div>
      <div className="BestSellersH">
        <ProductsList products={products} />
      </div>
    </div>
  )
}
export default FiltresBar
