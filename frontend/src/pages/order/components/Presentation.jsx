function Presentation({ users, basketItems }) {
  return (
    <div className="presentationO">
      {Array.from(new Set(basketItems.map((item) => item.usersId))).map(
        (userId) => {
          const user = users.find((u) => u.usersId === userId)

          if (user) {
            return (
              <div key={user.usersId}>
                <p className="titleInfo">Vos informations:</p>
                <p>adresse: {user.address}</p>
                <p>code postal: {user.zipcode}</p>
                <p>ville: {user.city}</p>
                <p>email: {user.email}</p>
                <button className="buttonYellow">Modifier</button>
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
