const AbstractManager = require("./AbstractManager")

class NatureManager extends AbstractManager {
  constructor() {
    super({ table: "nature" })
  }

  insert(nature) {
    return this.database.query(`insert into ${this.nature} (name) values (?)`, [
      nature.name,
    ])
  }

  update(characters) {
    return this.database.query(
      `UPDATE ${this.table} SET firstname = ?, lastname = ?, imgUrl = ?, houses_id = ? WHERE (id = ?)`,
      [
        characters.firstname,
        characters.lastname,
        characters.imgUrl,
        characters.houses_id,
        characters.id,
      ]
    )
  }
}

module.exports = NatureManager
