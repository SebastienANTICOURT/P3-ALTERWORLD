const AbstractManager = require("./AbstractManager")

class BasketManager extends AbstractManager {
  constructor() {
    super({ table: "basket" })
  }

  insert(basket) {
    return this.database.query(
      `insert into ${this.table} (productsId, quantity) values (?,?)`,
      [basket.productsId, basket.quantity]
    )
  }

  findBasketWithProducts() {
    return this.database
      .query(`SELECT basket.quantity, products.name, products.image, products.price
    FROM ${this.table}
    INNER JOIN products ON basket.productsId = products.id;`)
  }

  update(basket) {
    return this.database.query(
      `UPDATE ${this.table} SET Name = ? WHERE (id = ?)`,
      [basket.name]
    )
  }
}

module.exports = BasketManager
