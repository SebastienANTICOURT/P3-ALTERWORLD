const AbstractManager = require("./AbstractManager")

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" })
  }

  find(usersId) {
    // console.log("usersIdM", usersId)
    return this.database.query(
      `select * from  ${this.table} 
    where usersId = ?`,
      [usersId]
    )
  }

  insert(users) {
    return this.database.query(
      `insert into ${this.table}(firstName, lastName, email, address, zipcode,city, password) values (?,?,?,?,?,?,?)`,
      [
        users.firstName,
        users.lastName,
        users.email,
        users.address,
        users.zipcode,
        users.city,
        users.password,
      ]
    )
  }

  update(users) {
    return this.database.query(
      `insert into ${this.table}(firstName, lastName, email, address, zipcode,city) values (?,?,?,?,?,?)`,
      [
        users.firstName,
        users.lastName,
        users.email,
        users.address,
        users.zipcode,
        users.city,
      ]
    )
  }

  

  deleteUser(id) {
    return this.database
      .query(
        `delete from ${this.table} 
        where usersId = ?`,
        [id]
      )
      .then((result) => {
        return result
      })
      .catch((error) => {
        throw error
      })
  }

  loginUser(email) {
    // console.log("emailManager", email)
    return this.database.query(`SELECT * FROM ${this.table} WHERE email = ?`, [
      email,
    ])
  }
}

module.exports = UsersManager
