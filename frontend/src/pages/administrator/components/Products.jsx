function Products({ products }) {
  return (
    <div className="container">
      <table className="listUsers">
        <thead>
          <tr>
            <th>ID Produits</th>
            <th>User ID</th>
            <th>Prix</th>
          </tr>
        </thead>

        {products.map((product) => (
          <tr className="listContainer" key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default Products
