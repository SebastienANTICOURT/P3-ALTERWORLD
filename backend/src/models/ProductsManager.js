const AbstractManager = require("./AbstractManager")

class ProductsManager extends AbstractManager {
  constructor() {
    super({ table: "products" })
  }

  insert(products) {
    return this.database.query(
      `insert into ${this.table}(Name, ImageURL, Price, CreatorId, universId, typesId) values (?,?,?,?,?,?)`,
      [
        products.Name,
        products.ImageURL,
        products.Price,
        products.CreatorId,
        products.universId,
        products.typesId,
      ]
    )
  }
}

module.exports = ProductsManager
