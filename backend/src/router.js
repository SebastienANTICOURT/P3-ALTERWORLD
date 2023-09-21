const express = require("express")

const router = express.Router()

const productsControllers = require("./controllers/productsControllers")
const universControllers = require("./controllers/universControllers")
const typesControllers = require("./controllers/typesControllers")
const basketControllers = require("./controllers/basketControllers")
const ordersControllers = require("./controllers/ordersControllers")
const usersControllers = require("./controllers/usersControllers")
const charactersControllers = require("./controllers/charactersControllers")
const { validateUsers } = require("./validators.js")
const { hashPassword, verifyPassword, verifyToken } = require("./auth")

router.get("/products", productsControllers.browse)
router.get("/products", productsControllers.productsN)
router.get("/products/:id", productsControllers.read)
router.post("/products", productsControllers.add)
// router.put("/products/:id", productsControllers.edit)
// router.delete("/products/:id", productsControllers.destroy)

router.get("/univers", universControllers.browse)
router.post("/univers")

router.get("/types", typesControllers.browse)

router.get("/basket", basketControllers.browse)
router.post("/basket", verifyToken, basketControllers.add)
router.put("/basket/:id", basketControllers.edit)
router.delete("/basket/all", basketControllers.deleteAll)
router.delete("/basket/:id", basketControllers.destroy)

router.get("/orders", ordersControllers.browse)
router.post("/orders", verifyToken, ordersControllers.add)

router.get("/latestBillNumber", ordersControllers.newBillNumber)

router.get("/users", usersControllers.browse)
router.get("/users/:id", usersControllers.read)
router.post("/users", validateUsers, hashPassword, usersControllers.add)

router.post("/login", usersControllers.loginUsers, verifyPassword)
// router.put("/users/:id", usersControllers.edit)
// router.delete("/users/:id", usersControllers.destroy)

router.get("/characters", charactersControllers.browse)
router.get("/characters/:id", charactersControllers.read)
router.post("/characters", charactersControllers.add)
// router.put("/characters/:id", charactersControllers.edit)
// router.delete("/characters/:id", charactersControllers.destroy)

module.exports = router
