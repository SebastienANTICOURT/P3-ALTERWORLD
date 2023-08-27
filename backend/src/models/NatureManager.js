const AbstractManager = require("./AbstractManager")

class NatureManager extends AbstractManager {
  constructor() {
    super({ table: "nature" })
  }

  insert(nature) {
    return this.database.query(`insert into ${this.table} (name) values (?)`, [
      nature.name,
    ])
  }

  update(nature) {
    return this.database.query(
      `UPDATE ${this.table} SET name = ? WHERE (id = ?)`,
      [nature.name]
    )
  }
}

module.exports = NatureManager
