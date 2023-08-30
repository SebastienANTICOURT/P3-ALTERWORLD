class AbstractManager {
  constructor({ table }) {
    this.table = table
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`)
  }

  find(id) {
    return this.database.query(
      `select * from  ${this.table} 
    where id = ?`,
      [id]
    )
  }

  delete(id) {
    return this.database.query(
      `delete from ${this.table} 
    where id = ?`,
      [id]
    )
  }

  setDatabase(database) {
    this.database = database
  }
}

module.exports = AbstractManager
