class AbstractManager {
  constructor({ table }) {
    this.table = table
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`)
  }

  findProduct() {
    return this.database.query(`SELECT products.id,
     products.name, products.image1, products.Prix, products.Creator_id,
    nature.name, nature.id, univers.name, univers.id
    FROM products
    INNER JOIN products_nature ON products.id = products_nature.Products_id
    INNER JOIN nature ON products_nature.Nature_id = nature.id
    INNER JOIN products_univers ON products.id = products_univers.Products_id
    INNER JOIN univers ON products_univers.Univers_id = univers.id
    ORDER BY products.id;`)
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
