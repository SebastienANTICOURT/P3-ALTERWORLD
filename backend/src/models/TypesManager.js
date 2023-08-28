const AbstractManager = require("./AbstractManager")

class TypesManager extends AbstractManager {
  constructor() {
    super({ table: "types" })
  }

  insert(types) {
    return this.database.query(`insert into ${this.table} (name) values (?)`, [
      types.name,
    ])
  }

  update(types) {
    return this.database.query(
      `UPDATE ${this.table} SET name = ? WHERE (id = ?)`,
      [types.name]
    )
  }
}

module.exports = TypesManager
