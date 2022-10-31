const router = require("express").Router();
const auth = require("../../middleware/auth.middleware");
const {
  createProduct,
  getProductsByFilter,
  getProductById,
  updateProduct,
  deleteProduct,
  updateProductPosition,
  getProductByOffer,
} = require("./product");

router.post("/create", auth, createProduct);
router.post("/getbyfilter", getProductsByFilter);
router.post("/getbyid", auth, getProductById);
router.put("/update", auth, updateProduct);
router.post("/delete", auth, deleteProduct);
router.put("/updateposition", auth, updateProductPosition);
router.post("/getbyoffer", auth, getProductByOffer);

module.exports = router;
