const AbstractManager = require("./AbstractManager")

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" })
  }

  insert(users) {
    return this.database.query(
      `insert into ${this.table}(first_name, last_name, email, password) values (?,?,?,?)`,
      [users.first_name, users.last_name, users.email, users.password]
    )
  }
}

module.exports = UsersManager
