import { Link } from "react-router-dom"
import "./Presentation.scss"
function Presentation({ users, basketItems }) {
  return (
    <div className="presentationO">
      {Array.from(new Set(basketItems.map((item) => item.usersId))).map(
        (userId) => {
          const user = users.find((u) => u.usersId === userId)

          if (user) {
            return (
              <div className="Presentation" key={user.usersId}>
                <p className="titleInfo">Vos informations:</p>
                <p>adresse: {user.address}</p>
                <p>code postal: {user.zipcode}</p>
                <p>ville: {user.city}</p>
                <p>email: {user.email}</p>
                <Link to="/customerArea">
                  <button className="buttonYellow">Modifier</button>
                </Link>
              </div>
            )
          }
          return null
        }
      )}
    </div>
  )
}

export default Presentation
