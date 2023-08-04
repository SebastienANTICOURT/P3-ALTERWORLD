import "./FiltresBar.scss"

function FiltresBar() {
  return (
    <div className="FiltresBar">
      <div className="FB">
        <div className="UniversFB">
          <h1>Univers</h1>
          <input type="text" placeholder="-" />
        </div>
        <ul className="NatureFB">
          <li>Avatars</li>
          <li>Armes</li>
          <li>Monstres</li>
          <li>Maps</li>
        </ul>
      </div>
      <div className="buttonFB">
        <button>SELECTIONNER</button>
      </div>
    </div>
  )
}
export default FiltresBar
