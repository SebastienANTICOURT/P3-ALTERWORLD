import { useContext, useEffect, useState } from "react"
import { instance } from "../../../components/Axios"
import { UserContext } from "../../../components/contexts/UserContext"

function CustomersData() {
  const { userDatas, setUserDatas, fetchUserDatas } = useContext(UserContext)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [city, setCity] = useState("")

  useEffect(() => {
    fetchUserDatas()
  }, [setUserDatas])

  const HandleClick = () => {
    instance
      .put("/users", { firstName, lastName, email, address, zipcode, city })
      .then((response) => {
        setUserDatas(response.data)
      })
  }
  return (
    <div className="containerUser">
      <div className="containerDatas">
        <div>
          <figcaption>Prénom: {userDatas.firstName}</figcaption>
          <input
            type="text"
            placeholder="Prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <figcaption>Nom: {userDatas.lastName}</figcaption>
          <input
            type="text"
            placeholder="Nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <figcaption>Email: {userDatas.email}</figcaption>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <figcaption>Adresse: {userDatas.address}</figcaption>
          <input
            type="text"
            placeholder="Adresse"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <figcaption>Code postal: {userDatas.zipcode}</figcaption>
          <input
            type="text"
            placeholder="Code postal"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
        </div>
        <div>
          <figcaption>Ville: {userDatas.city}</figcaption>
          <input
            type="text"
            placeholder="Ville"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
      </div>
      <button className="buttonYellow" onClick={HandleClick}>
        Enregistrer les modifications
      </button>
    </div>
  )
}

export default CustomersData
