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
      `SELECT orders.*, products.name, products.creatorId, users.firstname, users.isAdministrator
      FROM ${this.table}
      JOIN p2alterworld.products ON orders.productsId = products.id
      JOIN p2alterworld.users ON orders.usersId = users.usersId
      ORDER BY orders.billNumber ASC;`
    )
  }

  findOrdersUsersId(usersId) {
    return this.database.query(
      `SELECT orders.*, products.name, products.creatorId, users.usersId, users.firstname, users.isAdministrator
      FROM ${this.table}
      JOIN p2alterworld.products ON orders.productsId = products.id
      JOIN p2alterworld.users ON orders.usersId = users.usersId
      WHERE orders.usersId = ?
      ORDER BY orders.billNumber ASC;`,
      [usersId]
    )
  }

  findOrdersCreatorId(creatorId) {
    return this.database.query(
      `SELECT orders.*, products.name, products.creatorId, users.usersId, users.firstname, users.isAdministrator
      FROM ${this.table}
      JOIN p2alterworld.products ON orders.productsId = products.id
      JOIN p2alterworld.users ON orders.usersId = users.usersId
      WHERE products.creatorId = ?
      ORDER BY orders.billNumber ASC;`,
      [creatorId]
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
        if (err) {
          reject(err)
        }
        resolve(results)
      })
    })
  }
}

module.exports = OrdersManager
