const router = require("express").Router();
const auth = require("../../middleware/auth.middleware");
const { createOrder, getOrdersByUser, getOrderById } = require("./order");

router.post("/create", auth, createOrder);
router.post("/getbyuser", auth, getOrdersByUser);
router.post("/getbyid", auth, getOrderById);

module.exports = router;
