const AbstractManager = require("./AbstractManager")

class BasketManager extends AbstractManager {
  constructor() {
    super({ table: "basket" })
  }

  insert(basket) {
    return this.database.query(
      `insert into ${this.table} (usersId, productsId, quantity, total) values (?,?,?,?)`,
      [basket.usersId, basket.productsId, basket.quantity, basket.total]
    )
  }

  findBasketWithProducts() {
    return this.database
      .query(`SELECT basket.id, basket.usersId, basket.productsId, basket.quantity, products.name, products.image, products.price
    FROM ${this.table}
    INNER JOIN products ON basket.productsId = products.id;`)
  }

  update(basket) {
    return this.database.query(
      `UPDATE ${this.table} SET usersId = ?, productsId = ?, quantity = ?, total = ? WHERE (id = ?)`,
      [
        basket.usersId,
        basket.productsId,
        basket.quantity,
        basket.total,
        basket.id,
      ]
    )
  }

  deleteAll(usersId) {
    // console.log(usersId, "basketmanager")
    return this.database.query(`DELETE FROM ${this.table} WHERE usersId = ?`, [
      usersId,
    ])
  }
}

module.exports = BasketManager
