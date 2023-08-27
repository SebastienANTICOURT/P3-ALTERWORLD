const AbstractManager = require("./AbstractManager")

class ProductsByUniNatManager extends AbstractManager {
  constructor() {
    super({ table: "products" })
  }

  // browseAll() {
  //   return this.database.query(
  //     `SELECT products.id, products.name, products.image1, products.Prix, products.Creator_id, nature.name, nature.id, univers.name, univers.id
  //     FROM ${this.table}
  //     INNER JOIN products_nature ON products.id = products_nature.Products_id
  //     INNER JOIN nature ON products_nature.Nature_id = nature.id
  //     INNER JOIN products_univers ON products.id = products_univers.Products_id
  //     INNER JOIN univers ON products_univers.Univers_id = univers.id
  //     ORDER BY products.id; `
  //   )
  // }

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
