import "./FiltresBar.scss"

function FiltresBar() {
  return (
    <div className="FiltresBar">
      <div className="FB">
        <div className="UniversFB">
          <ul className="ulFB">
            <li className="TitleListFB">Univers :</li>
            <li>Fantaisy</li>
            <li>Post Apocalypse</li>
            <li>Science Fiction</li>
          </ul>
        </div>
        <div>
          <ul className="ulFB">
            <li className="TitleListFB">Objets :</li>
            <li>Avatars</li>
            <li>Armes</li>
            <li>Monstres</li>
            <li>Maps</li>
          </ul>
        </div>
      </div>
      <div className="buttonFB">
        <button>SELECTIONNER</button>
      </div>
    </div>
  )
}
export default FiltresBar
