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
}

module.exports = UsersManager
