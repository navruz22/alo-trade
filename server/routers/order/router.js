const router = require("express").Router();
const auth = require("../../middleware/auth.middleware");
const {
  createOrder,
  getOrdersByFilter,
  getOrderById,
  updateOrder,
  deleteOrder,
  updateOrderPosition,
  getOrderByOffer,
  getOrdersByFilterCount,
} = require("./order");

router.post("/create", auth, createOrder);
router.post("/getbyfilter", getOrdersByFilter);
router.post("/getbyfiltercount", getOrdersByFilterCount);
router.post("/getbyid", auth, getOrderById);
router.put("/update", auth, updateOrder);
router.post("/delete", auth, deleteOrder);
router.put("/updateposition", auth, updateOrderPosition);
router.post("/getbyoffer", auth, getOrderByOffer);

module.exports = router;
