const express = require("express")
const multer = require("multer")
const router = express.Router()

const productsControllers = require("./controllers/productsControllers")
const universControllers = require("./controllers/universControllers")
const typesControllers = require("./controllers/typesControllers")
const basketControllers = require("./controllers/basketControllers")
const favoritesControllers = require("./controllers/favoritesControllers")
const ordersControllers = require("./controllers/ordersControllers")
const usersControllers = require("./controllers/usersControllers")
const { validateUsers } = require("./validators.js")
const { hashPassword, verifyPassword, verifyToken } = require("./auth")

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
  console.log("router", req.file, req.body)
  if (req.file) {
    const imagePath = `/assets/images/${req.file.filename}`;
    res.json({ path: imagePath });
  } else {
    res.status(400).send('No image uploaded');
  }
});


router.get("/products", productsControllers.browse)
router.get("/products", productsControllers.productsN)
router.get("/products/:id", productsControllers.read)
router.post("/products", productsControllers.add)
// router.put("/products/:id", productsControllers.edit)
router.delete("/products/:id", productsControllers.destroy)

router.get("/univers", universControllers.browse)
router.post("/univers")

router.get("/types", typesControllers.browse)

router.get("/basket", basketControllers.browse)
router.post("/basket", verifyToken, basketControllers.add)
router.put("/basket/:id", basketControllers.edit)
router.delete("/basket/all", basketControllers.deleteAll)
router.delete("/basket/:id", basketControllers.destroy)

router.get("/favorites", favoritesControllers.browse)
router.post("/favorites", favoritesControllers.add)
router.put("/favorites/:id", favoritesControllers.edit)

router.get("/orders", ordersControllers.browse)
router.get("/orders/:usersId", ordersControllers.orderUsersId)
router.post("/orders", verifyToken, ordersControllers.add)

router.get("/latestBillNumber", ordersControllers.newBillNumber)

router.get("/users", usersControllers.browse)
router.get("/users/:id", usersControllers.read)
router.post("/users", validateUsers, hashPassword, usersControllers.add)
router.delete("/users/:id", usersControllers.destroy)

// ROUTE DE CONNEXION
router.post("/login", usersControllers.loginUsers, verifyPassword)
router.get("/logout", usersControllers.logoutUsers)

// router.get("/characters", charactersControllers.browse)
// router.get("/characters/:id", charactersControllers.read)
// router.post("/characters", charactersControllers.add)
// // router.put("/characters/:id", charactersControllers.edit)
// // router.delete("/characters/:id", charactersControllers.destroy)

module.exports = router
