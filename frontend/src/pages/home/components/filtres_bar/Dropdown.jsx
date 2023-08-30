import "./Dropdown.scss"

function Dropdown({
  univers,
  selectedUnivers,
  setSelectedUnivers,
  types,
  selectedTypes,
  setSelectedTypes,
  sortOrder,
  setSortOrder,
}) {
  return (
    <div className="Dropdown">
      <div className="DivFB">
        <select
          value={selectedUnivers}
          onChange={(e) => setSelectedUnivers(e.target.value)}
        >
          <option value="all">Univers</option>
          {univers.map((univer) => (
            <option key={univer.id} value={univer.id}>
              {univer.name}
            </option>
          ))}
        </select>
      </div>
      <div className="DivFB">
        <select
          value={selectedTypes}
          onChange={(e) => setSelectedTypes(e.target.value)}
        >
          <option value="all">Types</option>
          {types.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="Trier par prix">Trier par prix</option>
        <option value="Prix croissant">Prix croissant</option>
        <option value="Prix décroissant">Prix décroissant</option>
      </select>
      <select name="" id="">
        <option value="Tous les créateurs">Tous les créateurs</option>
        <option value="Sebastien">Sebastien</option>
        <option value="XYZ">XYZ</option>
      </select>
    </div>
  )
}

export default Dropdown
