const AbstractManager = require("./AbstractManager")

class OrdersManager extends AbstractManager {
  constructor() {
    super({ table: "orders" })
  }

  insert(orders) {
    return this.database.query(
      `insert into ${this.table}(usersId, productsId, billNumber, quantity, date) values (?,?,?,?,?)`,
      [
        orders.usersId,
        orders.productsId,
        orders.billNumber,
        orders.quantity,
        orders.date,
      ]
    )
  }
}

module.exports = OrdersManager
