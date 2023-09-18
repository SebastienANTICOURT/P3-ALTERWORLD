const AbstractManager = require("./AbstractManager")

class OrdersManager extends AbstractManager {
  constructor() {
    super({ table: "orders" })
  }

  findBillNumber() {
    return this.database.query(
      `SELECT MAX(billNumber) as maxBillNumber FROM  ${this.table}`
    )
  }

  insert(orders) {
    // Si 'orders' n'est pas un tableau, convertir en tableau
    if (!Array.isArray(orders)) {
      orders = [orders]
    }
    const sql = `
      INSERT INTO ${this.table} 
      (usersId, productsId, billNumber, quantity, total, date) 
      VALUES ?
    `
    const values = orders.map((order) => [
      order.usersId,
      order.productsId,
      order.billNumber,
      order.quantity,
      order.total,
      order.date,
    ])
    return new Promise((resolve, reject) => {
      this.database.query(sql, [values], (err, results) => {
        if (err) reject(err)
        resolve(results)
      })
    })
  }
}

module.exports = OrdersManager
