const AbstractManager = require("./AbstractManager")

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" })
  }

  insert(users) {
    return this.database.query(
      `insert into ${this.table}(firstName, lastName, email, password) values (?,?,?,?)`,
      [users.firstName, users.lastName, users.email, users.password]
    )
  }

  loginUser(email) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE email = ?`, [
      email,
    ])
  }
}

module.exports = UsersManager
