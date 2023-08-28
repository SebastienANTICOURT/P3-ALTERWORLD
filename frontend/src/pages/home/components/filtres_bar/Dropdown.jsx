function Dropdown({ sortOrder, setSortOrder }) {
  return (
    <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
      <option value="Trier par">Trier par</option>
      <option value="Prix croissant">Prix croissant</option>
      <option value="Prix décroissant">Prix décroissant</option>
    </select>
  )
}

export default Dropdown
