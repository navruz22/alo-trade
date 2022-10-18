const { validateUserSignIn, validateUserSignUp } = require("./User/User");
const { validateOrganization } = require("./User/Organization");
const { validateRegion } = require("./Adress/Region");
const { validateDistrict } = require("./Adress/District");
const { validateCategory } = require("./Category/Category");
const { validateSubcategory } = require("./Category/Subcategory");
const { validateProduct } = require("./Order_Offer_Product/Product");
const { validateOrder } = require("./Order_Offer_Product/Order");
const { validateOffer } = require("./Order_Offer_Product/Offer");

module.exports = {
  validateUserSignIn,
  validateUserSignUp,
  validateOrganization,
  validateRegion,
  validateDistrict,
  validateCategory,
  validateSubcategory,
  validateProduct,
  validateOrder,
  validateOffer,
};
