const models = require("../models")

const browse = (req, res) => {
  models.orders
    .findAll()
    .then((rows) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

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
  // console.log(req.body, "constadd")
  if (Array.isArray(orders)) {
    // Traiter plusieurs commandes
    // console.log("test01")
    // const resultPromise = Promise.all(orders.map((order) => models.orders.insert(order)))
    //   resultPromise.then((results) => {
    //     console.log("test03")
    //     models.basket
    //     .deleteAll(req.body.usersId)
    //     res.json(results.map((result) => result.insertId))
    //   })
    //   .catch((err) => {
    //     console.error(err)
    //     res.sendStatus(500)
    //   })
    return Promise.all(orders.map((order) => models.orders.insert(order))).then(
      (results) => {
        return models.basket.deleteAll(req.body.usersId).then(() => {
          return results.map((result) => result.insertId)
        })
      }
    )
  } else {
    // Traiter une seule commande
    // console.log("test02")
    models.orders
      .insert([orders])
      .then(([result]) => {
        models.basket.deleteAll(req.body.usersId)
        res.json(result.insertId)
      })
      .catch((err) => {
        console.error(err)
        res.sendStatus(500)
      })
  }
}

module.exports = {
  browse,
  newBillNumber,
  add,
}
