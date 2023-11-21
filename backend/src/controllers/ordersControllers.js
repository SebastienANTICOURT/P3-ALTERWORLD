const models = require("../models")

const browse = (req, res) => {
  models.orders
    .findOrdersWithName()
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const orderUsersId = (req, res) => {
  const usersId = req.payload.sub
  models.orders
    .findOrdersUsersId(usersId)
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const orderCreatorId = (req, res) => {
  const creatorId = req.payload.sub
  models.orders
    .findOrdersCreatorId(creatorId)
    .then(([rows]) => {
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
  console.log("test01", req.body)
  const orders = req.body
  models.orders
    .insert(orders)
    .then(([result]) => {
      console.log("test02", result)
      res.json(result.insertId)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}


module.exports = {
  orderUsersId,
  browse,
  newBillNumber,
  add,
  orderCreatorId,
}
