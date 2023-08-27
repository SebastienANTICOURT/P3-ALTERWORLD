const AbstractManager = require("./AbstractManager")

class ProductsManager extends AbstractManager {
  constructor() {
    super({ table: "products" })
  }

  insert(products) {
    return this.database.query(
      `insert into ${this.table}(Name, ImageURL, Price, Creator_id) values (?,?,?,?)`,
      [products.Name, products.ImageURL, products.Price, products.Creator_id]
    )
  }
}

module.exports = ProductsManager
