const jwt = require("jsonwebtoken")
const argon2 = require("argon2")

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
}
const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashedPassword) => {
      req.body.hashedPassword = hashedPassword
      delete req.body.password
      next()
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const verifyPassword = (req, res) => {
  // console.log("req", req)
  argon2
    .verify(req.user.password, req.body.password)
    .then((isVerified) => {
      if (isVerified) {
        const payload = {
          sub: req.user.usersId,
          isAdministrator: req.user.isAdministrator,
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "5h",
        })
        delete req.user.password
        res.cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
        })
        res.cookie("firstName", req.user.firstName, {
          httpOnly: false,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
        })
        res.send({ utilisateur: req.user })
      } else {
        res.sendStatus(401)
      }
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(520)
    })
}

const verifyToken = (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).send("No token provided")
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error(err)
      return res.status(401).send("Invalid token")
    }
    req.payload = decoded
    next()
  })
}

const verifyIsAdministrator = (req, res, next) => {
  if (req.payload && req.payload.isAdministrator === 1) {
    next()
  } else {
    res.sendStatus(401)
  }
}

module.exports = {
  hashPassword,
  verifyPassword,
  verifyToken,
  verifyIsAdministrator,
}
