import "./CardDetails.scss"

function CardDetails({ cardProduct }) {
  return (
    <>
      <img
        className="imageProd"
        src={`http://localhost:4242${cardProduct.image}`}
        alt={cardProduct.prName}
      />
      <figcaption>{cardProduct.prName}</figcaption>
      <p className="PriceH">{cardProduct.price} €</p>
    </>
  )
}
export default CardDetails
