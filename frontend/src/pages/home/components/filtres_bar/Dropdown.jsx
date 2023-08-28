function Dropdown({ setSelectedOption, selectedOption }) {
  return (
    <select
      value={selectedOption}
      onChange={(e) => {
        setSelectedOption(e.target.value)
      }}
    >
      <option value="Trier par">Trier par</option>
      <option value="Prix croissant">Prix croissant</option>
      <option value="Prix décroissant">Prix décroissant</option>
    </select>
  )
}

export default Dropdown
