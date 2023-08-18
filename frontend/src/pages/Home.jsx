import { useState, useEffect } from "react"
// import ImagePrincipale from "../components/ImagePrincipale"
import axios from "axios"
import Text from "../components/Text"
import FiltresBar from "../components/FiltresBar"
import ProductsList from "../components/ProductsList"

function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:4242/products")
      .then((res) => setProducts(res.data))
  }, [])

  
  return (
    <>
      <div className="TextH">
        <Text />
      </div>
      <div>
        <FiltresBar />
      </div>
      <div className="BestSellersH">
        <ProductsList products={products} />
      </div>
    </>
  )
}

export default Home
