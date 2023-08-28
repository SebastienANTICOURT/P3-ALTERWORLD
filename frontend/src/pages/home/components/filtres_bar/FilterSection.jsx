import "./FilterSection.scss"

function FilterSection({
  univers,
  selectedUnivers,
  setSelectedUnivers,
  types,
  selectedTypes,
  setSelectedTypes,
}) {
  return (
    <div className="FB">
      <div className="DivFB">
        <h1>Univers :</h1>
        {univers.map((univer) => (
          <p
            key={univer.id}
            className={
              selectedUnivers.includes(univer.id) ? "selected" : "defaultColor"
            }
            onClick={() => {
              if (selectedUnivers.includes(univer.id)) {
                setSelectedUnivers(
                  selectedUnivers.filter((id) => id !== univer.id)
                )
              } else {
                setSelectedUnivers([...selectedUnivers, univer.id])
              }
            }}
          >
            {univer.name}
          </p>
        ))}
      </div>
      <div className="DivFB">
        <h1>Types :</h1>
        {types.map((type) => (
          <p
            key={type.id}
            className={
              selectedTypes.includes(type.id) ? "selected" : "defaultColor"
            }
            onClick={() => {
              if (selectedTypes.includes(type.id)) {
                setSelectedTypes(selectedTypes.filter((id) => id !== type.id))
              } else {
                setSelectedTypes([...selectedTypes, type.id])
              }
            }}
          >
            {type.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default FilterSection
