const AbstractManager = require("./AbstractManager")

class UniversManager extends AbstractManager {
  constructor() {
    super({ table: "univers" })
  }

  insert(univers) {
    return this.database.query(`insert into ${this.table} (name) values (?)`, [
      univers.name,
    ])
  }

  update(univers) {
    return this.database.query(
      `UPDATE ${this.table} SET name = ? WHERE (id = ?)`,
      [univers.name]
    )
  }
}

module.exports = UniversManager
