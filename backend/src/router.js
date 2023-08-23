const express = require("express")

const router = express.Router()

const productsControllers = require("./controllers/productsControllers")
const usersControllers = require("./controllers/usersControllers")
const { hashPassword } = require("./auth");
const charactersControllers = require("./controllers/charactersControllers")

router.get("/products", productsControllers.browse)
router.get("/products", productsControllers.productsN)
router.get("/products/:id", productsControllers.read)
router.post("/products",productsControllers.add)
// router.put("/users/:id", usersControllers.edit)
// router.delete("/users/:id", usersControllers.destroy)

router.get("/users", usersControllers.browse)
router.get("/users/:id", usersControllers.read)
router.post("/users", hashPassword, usersControllers.add)
// router.put("/users/:id", usersControllers.edit)
// router.delete("/users/:id", usersControllers.destroy)

router.get("/characters", charactersControllers.browse)
router.get("/characters/:id", charactersControllers.read)
router.post("/characters", charactersControllers.add)
router.put("/characters/:id", charactersControllers.edit)
router.delete("/characters/:id", charactersControllers.destroy)

module.exports = router
