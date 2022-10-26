const router = require("express").Router();
const auth = require("../../middleware/auth.middleware");
const {
  createOrder,
  getOrdersByFilter,
  getOrderById,
  updateOrder,
  deleteOrder,
} = require("./order");

router.post("/create", auth, createOrder);
router.post("/getbyfilter", auth, getOrdersByFilter);
router.post("/getbyid", auth, getOrderById);
router.put("/update", auth, updateOrder);
router.post("/delete", auth, deleteOrder);

module.exports = router;
