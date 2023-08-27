import "./CardDetails.scss"

function CardDetails({ cardProduct }) {
  return (
    <>
      <img
        className="imageProd"
        src={`http://localhost:4242${cardProduct.image_url}`}
      />
      <figcaption>{cardProduct.name}</figcaption>
      <p className="PriceH">{cardProduct.price} €</p>
    </>
  )
}
export default CardDetails
