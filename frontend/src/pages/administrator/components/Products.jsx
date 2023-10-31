function Products({ products }) {
  return (
    <div className="container">
      {products.map((product) => (
        <div className="listContainer" key={product.id}>
          <p>{product.id}</p>
          <p>{product.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Products
