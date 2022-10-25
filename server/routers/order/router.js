const router = require("express").Router();
const auth = require("../../middleware/auth.middleware");
const { createOrder } = require("./order");

router.post("/create", auth, createOrder);

module.exports = router;
