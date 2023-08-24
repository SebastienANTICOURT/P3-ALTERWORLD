const AbstractManager = require("./AbstractManager")

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" })
  }

  insert(users) {
    return this.database.query(
      `insert into ${this.table}(prenom, nom, email, password) values (?,?,?,?)`,
      [users.prenom, users.nom, users.email, users.password]
    )
  }
}

module.exports = UsersManager
