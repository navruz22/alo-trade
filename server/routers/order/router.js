const router = require("express").Router();
const auth = require("../../middleware/auth.middleware");
const {
  createOrder,
  getOrdersByFilter,
  getOrderById,
  updateOrder,
  deleteOrder,
  updateOrderPosition,
} = require("./order");

router.post("/create", auth, createOrder);
router.post("/getbyfilter", getOrdersByFilter);
router.post("/getbyid", auth, getOrderById);
router.put("/update", auth, updateOrder);
router.post("/delete", auth, deleteOrder);
router.put("/updateposition", auth, updateOrderPosition);

module.exports = router;
