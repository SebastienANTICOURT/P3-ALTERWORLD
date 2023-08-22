const AbstractManager = require("./AbstractManager")

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" })
  }

  insert(users) {
    return this.database.query(
      `insert into ${this.table}(prenom, nom, email, adresse, Code_postal, Ville, telephone, Password,
        Presentation, is_creator) values (?,?,?,?,?,?,?,?,?,?)`,
      [
        users.prenom,
        users.nom,
        users.email,
        users.adresse,
        users.Code_postal,
        users.Ville,
        users.telephone,
        users.Password,
        users.Presentation,
        users.is_creator,
      ]
    )
  }
}

module.exports = UsersManager