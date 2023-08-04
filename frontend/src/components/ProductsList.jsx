import { Link } from "react-router-dom"
import "./ProductsList.scss"

function ProductsList({ products }) {
  const formatPrice = (price) => {
    return price.toLocaleString("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  return (
    <div className="ProductList">
      <div className="BSh1">
        <hr />
        <h1>Best Sellers</h1>
        <hr />
      </div>
      <div className="BSProductsH">
        {products.map((product) => (
          <Link
            className="LinkPL"
            key={product.id}
            to={`/details/${product.id}`}
          >
            <div className="CartProductsH">
              <img
                className="imageProd"
                src={`http://localhost:4242${product.image1}`}
              />
              <p>{product.name}</p>
              <p className="PriceH">{formatPrice(product.Prix)} €</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductsList
