import { useState } from "react"
import Membre from "./components/Membre"
import NonMembre from "./components/NonMembre"
import "./Connexion.scss"

function Connexion({ setUser, users }) {
  const [isMembreVisible, setIsMembreVisible] = useState(true)

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
