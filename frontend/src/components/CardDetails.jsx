import "./CardDetails.scss"

function CardDetails({ cardProduct }) {
  return (
    <>
      <img
        className="imageProd"
        src={`http://localhost:4242${cardProduct.image1}`}
      />
      <figcaption>{cardProduct.name}</figcaption>
      <p className="PriceH">{cardProduct.Prix} €</p>
    </>
  )
}
export default CardDetails
