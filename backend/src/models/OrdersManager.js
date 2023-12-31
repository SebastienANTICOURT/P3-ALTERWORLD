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

  findOrdersWithName() {
    return this.database.query(
      `SELECT orders.*, products.name, users.firstname
      FROM p2alterworld.orders
      JOIN p2alterworld.products ON orders.productsId = products.id
      JOIN p2alterworld.users ON orders.usersId = users.usersId
      ORDER BY orders.billNumber ASC;`
    )
  }

  findOrdersUsersId(usersId) {
    return this.database.query(
      `SELECT orders.*, products.name, users.firstname
      FROM p2alterworld.orders
      JOIN p2alterworld.products ON orders.productsId = products.id
      JOIN p2alterworld.users ON orders.usersId = users.usersId
      WHERE orders.usersId = ?
      ORDER BY orders.billNumber ASC;`,
      [usersId]
    )
  }

  insert(orders) {
    // console.log("test04", orders)
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
    // console.log("test05",values)
    return new Promise((resolve, reject) => {
      this.database.query(sql, [values], (err, results) => {
        if (err) {
          // console.log("test07", err)
          reject(err)
        }
        // console.log("test06", results)
        resolve(results)
      })
    })
  }
}

module.exports = OrdersManager
