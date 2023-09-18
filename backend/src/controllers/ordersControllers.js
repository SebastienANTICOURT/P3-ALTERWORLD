const models = require("../models")

const newBillNumber = (req, res) => {
  models.orders
    .findBillNumber()
    .then(([rows]) => {
      res.send(String(rows[0].maxBillNumber))
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const add = (req, res) => {
  const orders = req.body
  // console.log(req.body)
  if (Array.isArray(orders)) {
    // Traiter plusieurs commandes
    Promise.all(orders.map((order) => models.orders.insert(order)))
      .then((results) => {
        res.json(results.map((result) => result.insertId))
      })
      .catch((err) => {
        console.error(err)
        res.sendStatus(500)
      })
  } else {
    // Traiter une seule commande
    models.orders
      .insert([orders])
      .then(([result]) => {
        res.json(result.insertId)
      })
      .catch((err) => {
        console.error(err)
        res.sendStatus(500)
      })
  }
}

module.exports = {
  newBillNumber,
  add,
}
