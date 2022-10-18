const express = require("express");
const router = express.Router();
const {
  createAdmin,
  updateAdmin,
  deleteAdmin,
  loginAdmin,
} = require("./admin");
const auth = require("../../middleware/auth.middleware");

router.post("/create", createAdmin);
router.put("/update", auth, updateAdmin);
router.delete("/delete", auth, deleteAdmin);
router.post("/login", loginAdmin);

module.exports = router;
