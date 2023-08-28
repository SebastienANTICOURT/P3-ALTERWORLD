import { useState } from "react"
import Membre from "./components/Membre"
import NonMembre from "./components/NonMembre"
import "./Connexion.scss"

function Connexion() {
  const [isMembreVisible, setIsMembreVisible] = useState(true)

  return (
    <div className="Connexion">
      {isMembreVisible ? (
        <Membre switchView={() => setIsMembreVisible(false)} />
      ) : (
        <NonMembre switchView={() => setIsMembreVisible(true)} />
      )}
    </div>
  )
}
export default Connexion
