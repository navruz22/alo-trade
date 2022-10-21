const router = require("express").Router();
const {
  createUser,
  updateUser,
  getUserById,
  deleteUser,
  signInUser,
  getUserType,
} = require("./user");
const { createOrganization } = require("./organization");
const auth = require("../../middleware/auth.middleware");

// User
router.post("/signup", createUser);
router.put("/update", auth, updateUser);
router.post("/getuserbyid", auth, getUserById);
router.delete("/delete", auth, deleteUser);
router.post("/signin", signInUser);
router.post("/getusertype", auth, getUserType);

// Organization
router.post("/organization/create", createOrganization);

module.exports = router;
