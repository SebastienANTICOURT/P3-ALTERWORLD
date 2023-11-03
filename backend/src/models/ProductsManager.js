const AbstractManager = require("./AbstractManager")

class ProductsManager extends AbstractManager {
  constructor() {
    super({ table: "products" })
  }

  insert(products) {
    return this.database.query(
      `insert into ${this.table}(name, image, price, creatorId, univerId, typesId) values (?,?,?,?,?,?)`,
      [
        products.name,
        products.image,
        products.price,
        products.creatorId,
        products.univerId,
        products.typesId,
      ]
    )
  }
}

module.exports = ProductsManager
