function RightColumn({ handleOrderAndDelete, totalPrice, TVA }) {
  return (
    <div>
      <p>TOTAL :{totalPrice} €</p>
      <p className="TVA">Dont TVA :{TVA} €</p>
      <div className="buttonOrder">
        <button className="buttonPurple" onClick={handleOrderAndDelete}>
          Commander!
        </button>
      </div>
    </div>
  )
}

export default RightColumn
