import { Link } from "react-router-dom"
import CardDetails from "../../../../components/CardDetails"
import "./ProductsList.scss"

function ProductsList({ products }) {
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
              <span className="VoirPL">VOIR</span>
              <CardDetails key={product.id} cardProduct={product} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductsList
