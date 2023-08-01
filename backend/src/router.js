const express = require("express")

const router = express.Router()

const productsControllers = require("./controllers/productsControllers")
const itemControllers = require("./controllers/itemControllers")
const charactersControllers = require("./controllers/charactersControllers")

router.get("/products", productsControllers.browse)
router.get("/products/:id", productsControllers.read)
router.post("/products", productsControllers.add)
// router.put("/users/:id", usersControllers.edit)
// router.delete("/users/:id", usersControllers.destroy)

router.get("/characters", charactersControllers.browse)
router.get("/characters/:id", charactersControllers.read)
router.post("/characters", charactersControllers.add)
router.put("/characters/:id", charactersControllers.edit)
router.delete("/characters/:id", charactersControllers.destroy)

router.get("/items", itemControllers.browse)
router.get("/items/:id", itemControllers.read)
router.put("/items/:id", itemControllers.edit)
router.post("/items", itemControllers.add)
router.delete("/items/:id", itemControllers.destroy)

module.exports = router
