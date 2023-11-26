import "../../Basket.scss"
function RightColumn({ handleOrderAndDelete, totalPrice, TVA }) {
  return (
    <div className="RightColumnB">
      <h1>TOTAL :{totalPrice} €</h1>
      <p>Dont TVA :{TVA} €</p>
      <div className="buttonOrder">
        <button className="buttonPurple" onClick={handleOrderAndDelete}>
          Commander!
        </button>
      </div>
    </div>
  )
}

export default RightColumn
