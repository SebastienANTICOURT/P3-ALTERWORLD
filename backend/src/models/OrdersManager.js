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
      `SELECT orders.*, products.prName, products.creatorId, users.firstname, users.isAdministrator
      FROM ${this.table}
      JOIN p2alterworld.products ON orders.productsId = products.id
      JOIN p2alterworld.users ON orders.usersId = users.usersId
      ORDER BY orders.billNumber ASC;`
    )
  }

  findOrdersUsersId(usersId) {
    return this.database.query(
      `SELECT orders.*, products.prName, products.creatorId, users.usersId, users.firstname, users.isAdministrator
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
      `SELECT orders.*, products.prName, products.creatorId, users.usersId, users.firstname, users.isAdministrator
      FROM ${this.table}
      JOIN p2alterworld.products ON orders.productsId = products.id
      JOIN p2alterworld.users ON orders.usersId = users.usersId
      WHERE products.creatorId = ?
      ORDER BY orders.billNumber ASC;`,
      [creatorId]
    )
  }

  // Permet d'inseret plusieurs lignes en une requète. Transforme un tableau d'objet en plusieurs tableau
  insert(orders) {
    const query = `INSERT INTO ${this.table} (billNumber, date, usersId, productsId, quantity, total) VALUES ?`
    const values = orders.map((order) => [
      order.billNumber,
      order.date,
      order.usersId,
      order.productsId,
      order.quantity,
      order.total,
    ])
    return this.database.query(query, [values])
  }
}

module.exports = OrdersManager
