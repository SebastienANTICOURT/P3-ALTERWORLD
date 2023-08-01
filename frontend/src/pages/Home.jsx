import { useState, useEffect } from "react"
import axios from "axios"

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:4242/products")
      .then((res) => setProducts(res.data))
  }, [])

  return (
    <header className="App-header">
      {products.map((product) => (
        <>
          <img src={product.imgUrl} alt={product.name} />
          <p>{product.firstname}</p>
        </>
      ))}
    </header>
  )
}
