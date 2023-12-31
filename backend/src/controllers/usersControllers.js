const models = require("../models")

const browse = (req, res) => {
  models.users
    .findAll()
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const read = (req, res) => {
  models.users
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404)
      } else {
        res.send(rows[0])
      }
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const add = (req, res) => {
  const users = req.body
  users.password = req.body.hashedPassword
  models.users
    .insert(users)
    .then(([result]) => {
      res.json(result.insertId)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const loginUsers = (req, res, next) => {
  console.info("test01")
  models.users.loginUser(req.body.email).then(([users]) => {
    if (users[0] != null) {
      req.user = users[0]

      next()
    } else {
      res.sendStatus(404).send("pas trouvé")
    }
  })
  // .catch((err) => {
  //   console.error("poulet")
  //   res.status(518).send("Error retrieving data from database")
  // })
}

module.exports = {
  browse,
  read,
  add,
  loginUsers,
}
