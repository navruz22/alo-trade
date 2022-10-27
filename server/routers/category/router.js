const {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategories,
  getCategoriesWithSubcategories,
} = require("./category");
const {
  createSubcategory,
  getSubcategories,
  createSubcategories,
} = require("./subcategory");
const router = require("express").Router();
const auth = require("../../middleware/auth.middleware");

// Category
router.post("/create", auth, createCategory);
router.put("/update", auth, updateCategory);
router.delete("/delete", auth, deleteCategory);
router.get("/get", auth, getCategories);
router.get("/getwithsubcategories", getCategoriesWithSubcategories);

// Subcategory
router.post("/subcategory/create", createSubcategory);
router.post("/subcategories/getbycategory", getSubcategories);
router.post("/subcategories/create", createSubcategories);

module.exports = router;
