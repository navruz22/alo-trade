const router = require("express").Router();
const {
  createUser,
  updateUser,
  getUserById,
  deleteUser,
  signInUser,
} = require("./user");
const auth = require("../../middleware/auth.middleware");

router.post("/signup", createUser);
router.put("/update", auth, updateUser);
router.post("/getuserbyid", auth, getUserById);
router.delete("/delete", auth, deleteUser);
router.post("/signin", signInUser);

module.exports = router;
