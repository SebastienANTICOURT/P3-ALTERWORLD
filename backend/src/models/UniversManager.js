const AbstractManager = require("./AbstractManager")

class UniversManager extends AbstractManager {
  constructor() {
    super({ table: "univers" })
  }

  insert(univers) {
    return this.database.query(`insert into ${this.table} (Name) values (?)`, [
      univers.Name,
    ])
  }

  update(univers) {
    return this.database.query(
      `UPDATE ${this.table} SET Name = ? WHERE (id = ?)`,
      [univers.name]
    )
  }
}

module.exports = UniversManager
