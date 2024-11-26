const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const upload = require('../services/upload')

router.post("/register",productController.register);
router.post("/register_imagen",productController.register_imagen);
router.post("/remove_imagen",productController.remove_imagen);
router.put("/update",productController.update);
router.get("/list",productController.list);
router.delete("/delete",productController.remove);

router.get("/uploads/product/:img",productController.obtener_imagen);

router.get("/show/:id",productController.show);

module.exports = router;