const {
  createTradeType,
  getTradeTypes,
  deleteTradeType,
  updateTradeType,
} = require("./tradeType");
const router = require("express").Router();
const auth = require("../../middleware/auth.middleware");

router.post("/tradetype/create", auth, createTradeType);
router.get("/tradetype/get", getTradeTypes);
router.delete("/tradetype/delete", auth, deleteTradeType);
router.put("/tradetype/update", auth, updateTradeType);

module.exports = router;
