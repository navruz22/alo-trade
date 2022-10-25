const router = require("express").Router();
const {
  createUser,
  updateUser,
  getUserData,
  deleteUser,
  signInUser,
  updatePassword,
} = require("./user");
const {
  createOrganization,
  createNewOrganization,
  updateOrganization,
} = require("./organization");
const auth = require("../../middleware/auth.middleware");

// Main
router.post("/signup", createUser);
router.put("/update", auth, updateUser);
router.post("/getuserbyid", auth, getUserData);
router.delete("/delete", auth, deleteUser);
router.post("/signin", signInUser);
router.put("/updatepassword", auth, updatePassword);

// Organization
router.post("/organization/create", createOrganization);
router.put("/organization/update", updateOrganization);
router.post("/organization/new", createNewOrganization);

module.exports = router;
