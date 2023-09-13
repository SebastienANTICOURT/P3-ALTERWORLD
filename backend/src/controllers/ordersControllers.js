const models = require("../models")

const add = (req, res) => {
  const orders = req.body
  models.orders
    .insert(orders)
    .then(([result]) => {
      res.json(result.insertId)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

module.exports = {
  add,
}
