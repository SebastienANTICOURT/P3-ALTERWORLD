const AbstractManager = require("./AbstractManager")

class NatureManager extends AbstractManager {
  constructor() {
    super({ table: "natures" })
  }

  insert(natures) {
    return this.database.query(`insert into ${this.table} (name) values (?)`, [
      natures.name,
    ])
  }

  update(natures) {
    return this.database.query(
      `UPDATE ${this.table} SET name = ? WHERE (id = ?)`,
      [natures.name]
    )
  }
}

module.exports = NatureManager
