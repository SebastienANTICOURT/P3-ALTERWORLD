import { useState, useEffect } from "react"
import axios from "axios"
import Membre from "./components/Membre"
import NonMembre from "./components/NonMembre"
import "./Connexion.scss"

function Connexion({ setUser }) {
  const [isMembreVisible, setIsMembreVisible] = useState(true)
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4242/users").then((res) => setUsers(res.data))
  }, [])

  return (
    <div className="Connexion">
      {isMembreVisible ? (
        <Membre
          switchView={() => setIsMembreVisible(false)}
          users={users}
          setUser={setUser}
        />
      ) : (
        <NonMembre switchView={() => setIsMembreVisible(true)} users={users} />
      )}
      {/* <div>{users.map((user) => console.log(user))}</div> */}
    </div>
  )
}
export default Connexion
