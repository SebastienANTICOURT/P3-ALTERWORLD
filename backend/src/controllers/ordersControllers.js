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
  const orders = req.body
  if (Array.isArray(orders)) {
    Promise.all(
      orders.map((order) => {
        return models.orders.insert(order)
      })
    )
      .catch((err) => {
        throw err
      })
      .then((results) => {
        return models.basket
          .deleteAll(orders[0].usersId)
          .then(() => results.map((result) => result.insertId))
      })
      .then((response) => {
        res.json(response)
      })
      .catch((err) => {
        console.error(err)
        res.sendStatus(500)
      })
  } else {
    models.orders
      .insert([orders])
      .then(([result]) => {
        // console.log("Before deleteAll:", orders[0].usersId)
        return models.basket
          .deleteAll(orders[0].usersId)
          .then(() => result.insertId)
      })
      .then((response) => {
        res.json(response)
      })
      .catch((err) => {
        console.error(err)
        res.sendStatus(500)
      })
  }
}

module.exports = {
  orderUsersId,
  browse,
  newBillNumber,
  add,
  orderCreatorId,
}
