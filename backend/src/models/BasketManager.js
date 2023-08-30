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

  update(basket) {
    return this.database.query(
      `UPDATE ${this.table} SET Name = ? WHERE (id = ?)`,
      [basket.name]
    )
  }
}

module.exports = BasketManager
