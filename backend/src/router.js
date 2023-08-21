const express = require("express")

const router = express.Router()

const productsControllers = require("./controllers/productsControllers")
const natureControllers = require("./controllers/natureControllers")
const charactersControllers = require("./controllers/charactersControllers")

router.get("/products", productsControllers.browse)
router.get("/products/:id", productsControllers.read)
router.post("/products", productsControllers.add)
// router.put("/users/:id", usersControllers.edit)
// router.delete("/users/:id", usersControllers.destroy)

// router.get("/nature", natureControllers.browse)
// router.get("/nature/:id", natureControllers.read)
// router.post("/nature", natureControllers.add)
// // router.put("/users/:id", usersControllers.edit)
// // router.delete("/users/:id", usersControllers.destroy)

router.get("/characters", charactersControllers.browse)
router.get("/characters/:id", charactersControllers.read)
router.post("/characters", charactersControllers.add)
router.put("/characters/:id", charactersControllers.edit)
router.delete("/characters/:id", charactersControllers.destroy)

module.exports = router
