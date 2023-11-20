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
      .catch((error) => {})
  }
  return (
    <div>
      <div>
        <p>Prénom:{userDatas.firstName}</p>
        <p>Nom:{userDatas.lastName}</p>
        <p>email:{userDatas.email}</p>
        <p>adresse:{userDatas.address}</p>
        <p>Code postal:{userDatas.zipcode}</p>
        <p>Ville:{userDatas.city}</p>
      </div>
      <input
        type="text"
        placeholder="Prénom"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nom"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Adresse"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Code postal"
        value={zipcode}
        onChange={(e) => setZipcode(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ville"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={HandleClick}>Enregistrer les modifications</button>
    </div>
  )
}

export default CustomersData
