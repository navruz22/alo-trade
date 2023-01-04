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
const {
  createSubcategory2,
  getSubcategories2,
  createSubcategories2,
} = require("./subcategory2");

// Category
router.post("/create", createCategory);
router.put("/update", updateCategory);
router.delete("/delete", deleteCategory);
router.get("/get", getCategories);
router.get("/getwithsubcategories", getCategoriesWithSubcategories);

// Subcategory
router.post("/subcategory/create", createSubcategory);
router.post("/subcategories/getbycategory", getSubcategories);
router.post("/subcategories/create", createSubcategories);

// Subcategory2
router.post("/subcategory2/create", createSubcategory2);
router.post("/subcategories2/getbycategory", getSubcategories2);
router.post("/subcategories2/create", createSubcategories2);

module.exports = router;
