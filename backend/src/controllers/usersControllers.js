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

const destroy = (req, res) => {
  models.users
    .deleteUser(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404)
      } else {
        res.sendStatus(204)
      }
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const loginUsers = (req, res, next) => {
  models.users.loginUser(req.body.email)
  .then(([users]) => {
    if (users.length > 0) {
      req.user = users[0];
      next(); 
    } else {
      res.status(404).send("Utilisateur non trouvé"); 
    }
  }).catch((err) => {
    console.error(err);
    res.status(500).send("Erreur Interne du Serveur"); 
  });
};

const logoutUsers = (req, res) => {
  res.clearCookie("token").clearCookie("usersId").clearCookie("firstName").sendStatus(200)
}

module.exports = {
  browse,
  read,
  add,
  destroy,
  loginUsers,
  logoutUsers,
}
