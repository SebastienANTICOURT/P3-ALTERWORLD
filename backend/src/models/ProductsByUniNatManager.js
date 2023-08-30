const AbstractManager = require("./AbstractManager")

class ProductsByUniNatManager extends AbstractManager {
  constructor() {
    super({ table: "products" })
  }

  insert(products) {
    return this.database.query(
      `insert into ${this.table}(name, image1, image2, Prix, Creator_id) values (?,?,?,?,?)`,
      [
        products.name,
        products.image1,
        products.image2,
        products.Prix,
        products.Creator_id,
      ]
    )
  }
}

module.exports = ProductsByUniNatManager
