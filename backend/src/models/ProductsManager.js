const AbstractManager = require("./AbstractManager")

class ProductsManager extends AbstractManager {
  constructor() {
    super({ table: "products" })
  }

  insert(products) {
    return this.database.query(
      `insert into ${this.table}(prName, image, price, creatorId, univerId, typesId) values (?,?,?,?,?,?)`,
      [ products.prName,
        products.image,
        products.price,
        products.creatorId,
        products.univerId,
        products.typesId,
      ]
    )
  }

  find(id) {
    return this.database.query(
      `SELECT products.*, users.firstName, users.lastName, univers.uniName, types.typName
      FROM  ${this.table} 
      JOIN users ON products.creatorId = users.usersId
      JOIN univers ON products.univerId = univers.id
      JOIN types ON products.typesId = types.id
      WHERE products.id = ?`,
      [id]
    )
  }
}

module.exports = ProductsManager
