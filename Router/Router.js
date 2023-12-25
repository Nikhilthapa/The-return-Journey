const createProduct = require("../controller/createproduct");
const delete_product = require("../controller/deleteproduct");
const getproduct_data = require("../controller/getproduct");
const productId = require("../controller/productId");
const updateProduct = require("../controller/updateproduct");
const requestLogger = require("../middleWare/Requestlogger");

const router = require("express").Router();

router.get("/getproduct", requestLogger, getproduct_data);
router.get("/productId/:id", requestLogger, productId);
router.post("/craeteproduct", requestLogger, createProduct);
router.put("/updateProduct/:id", requestLogger, updateProduct);
router.delete("/deleteProduct/:id", requestLogger, delete_product);

module.exports = router;
