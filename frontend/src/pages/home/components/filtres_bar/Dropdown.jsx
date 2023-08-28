import "./Dropdown.scss"

function Dropdown({ sortOrder, setSortOrder }) {
  return (
    <div className="Dropdown">
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="Trier par">Trier par</option>
        <option value="Prix croissant">Prix croissant</option>
        <option value="Prix décroissant">Prix décroissant</option>
      </select>
      <select name="" id="">
        <option value="Trier par créateur">Trier par créateur</option>
        <option value="Sebastien">Sebastien</option>
        <option value="XYZ">XYZ</option>
      </select>
    </div>
  )
}

export default Dropdown
