const express = require("express")
const multer = require("multer")
const router = express.Router()

const productsControllers = require("./controllers/productsControllers")
const universControllers = require("./controllers/universControllers")
const typesControllers = require("./controllers/typesControllers")
const basketControllers = require("./controllers/basketControllers")
const ordersControllers = require("./controllers/ordersControllers")
const usersControllers = require("./controllers/usersControllers")
const { validateUsers } = require("./validators.js")
const {
  hashPassword,
  verifyPassword,
  verifyToken,
  verifyIsAdministrator,
} = require("./auth")

// UPLOAD IMAGE MULTER
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/assets/images")
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
})
const upload = multer({ storage })
router.post("/upload", upload.single("image"), (req, res) => {
  if (req.file) {
    const imagePath = `/assets/images/${req.file.filename}`
    res.json({ path: imagePath })
  } else {
    res.status(400).send("No image uploaded")
  }
})

router.get("/products", productsControllers.browse)
router.get("/products", productsControllers.productsN)
router.get("/products/:id", productsControllers.read)
router.post("/products", verifyToken, productsControllers.add)
// router.put("/products/:id", productsControllers.edit)
router.delete("/products/:id", verifyToken, productsControllers.destroy)

router.get("/univers", universControllers.browse)

router.get("/types", typesControllers.browse)

router.get("/users", usersControllers.browse)
router.get("/userId",verifyToken, usersControllers.read)
router.post("/users", validateUsers, hashPassword, usersControllers.add)
router.put("/users", verifyToken, usersControllers.edit)
router.delete("/users/:id", verifyToken, usersControllers.destroy)

router.get("/basket", basketControllers.browse)
router.post("/basket", verifyToken, basketControllers.add)
router.put("/basket/:id", verifyToken,basketControllers.edit)
router.delete("/basket/all", verifyToken,basketControllers.deleteAll)
router.delete("/basket/:id", verifyToken,basketControllers.destroy)

router.get("/orders", ordersControllers.browse)
router.get("/ordersByUser", verifyToken, ordersControllers.orderUsersId)
router.get("/ordersByCreator", verifyToken, ordersControllers.orderCreatorId)
router.post("/orders", verifyToken, ordersControllers.add)
// router.get("/listeAchats", verifyToken, ordersControllers.ListeAchat)

router.get("/latestBillNumber", ordersControllers.newBillNumber)



// ROUTE DE CONNEXION
router.post("/login", usersControllers.loginUsers, verifyPassword)
router.get("/logout", usersControllers.logoutUsers)

router.get("/Admin", verifyToken, verifyIsAdministrator, (req, res) => {
  res.send("Zone protégée de l’administrateur")
})

module.exports = router

// router.get("/characters", charactersControllers.browse)
// router.get("/characters/:id", charactersControllers.read)
// router.post("/characters", charactersControllers.add)
// // router.put("/characters/:id", charactersControllers.edit)
// // router.delete("/characters/:id", charactersControllers.destroy)
