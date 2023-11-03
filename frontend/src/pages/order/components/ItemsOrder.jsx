function ItemsOrder({ basketItems }) {
  return (
    <div>
      {basketItems.map((item, index) => {
        return (
          <div className="BasketItem" key={index}>
            <button
              className="deleteButton"
              // onClick={() => deleteItem(index)}
            >
              X
            </button>
            <img src={`http://localhost:4242${item.image}`} alt={item.name} />
            <div className="QuantityB">
              <h2>{item.name}</h2>
              <p>Price: {item.quantity * item.price} €</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ItemsOrder
