import { useState } from "react"

function Customers({ users, deleteUser }) {
  const [searchUserId, setSearchUserId] = useState("")
  const [searchEmail, setSearchEmail] = useState("")
  const [searchLastName, setSearchLastName] = useState("")
  const [filteredUsers, setFilteredUsers] = useState(users)

  const handleSearch = () => {
    const results = users.filter(
      (user) =>
        user.usersId === parseInt(searchUserId) ||
        user.lastName.toLowerCase() === searchLastName.toLowerCase() ||
        user.email === searchEmail
    )
    setFilteredUsers(results)
  }

  const handleDeleteUser = (userId) => {
    deleteUser(userId)
  }

  return (
    <div className="container">
      <div className="BarAdminUsers">
        <div className="searchBar">
          <input
            type="text"
            placeholder="User ID"
            value={searchUserId}
            onChange={(e) => setSearchUserId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={searchLastName}
            onChange={(e) => setSearchLastName(e.target.value)}
          />
        </div>
        <div>
          <button className="buttonYellow" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div>
        <table className="listUsers">
          <thead>
            <tr>
              <th>Actions</th>
              <th>ID Utilisateurs</th>
              <th>Prénoms</th>
              <th>Noms</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {(filteredUsers.length > 0 ? filteredUsers : users).map((user) => (
              <tr key={user.usersId}>
                <td>
                  <button onClick={() => handleDeleteUser(user.usersId)}>
                    X
                  </button>
                </td>
                <td>{user.usersId}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Customers
