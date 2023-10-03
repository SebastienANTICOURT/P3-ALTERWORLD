const AbstractManager = require("./AbstractManager")

class FavoritesManager extends AbstractManager {
  constructor() {
    super({ table: "favorites" })
  }

  insert(favorites) {
    return this.database.query(
      `insert into ${this.table} (productsId, usersId, hearts, notes) values (?,?,?,?)`,
      [
        favorites.productsId,
        favorites.usersId,
        favorites.hearts,
        favorites.notes,
      ]
    )
  }

  update(favorites) {
    return this.database.query(
      `UPDATE ${this.table} SET productsId = ?, usersId = ?, hearts = ?, notes = ? WHERE (id = ?)`,
      [
        favorites.productsId,
        favorites.usersId,
        favorites.hearts,
        favorites.notes,
      ]
    )
  }

  deleteAll(usersId) {
    // console.log(usersId, "basketmanager")
    return this.database.query(`DELETE FROM ${this.table} WHERE usersId = ?`, [
      usersId,
    ])
  }
}

module.exports = FavoritesManager
