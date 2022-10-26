const router = require("express").Router();
const auth = require("../../middleware/auth.middleware");
const { createOrder, getOrdersByFilter, getOrderById } = require("./order");

router.post("/create", auth, createOrder);
router.post("/getbyfilter", auth, getOrdersByFilter);
router.post("/getbyid", auth, getOrderById);

module.exports = router;
