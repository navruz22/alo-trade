const { validateUserSignIn, validateUserSignUp } = require("./User/User");
const { validateOrganization } = require("./User/Organization");
const { validateRegion } = require("./Adress/Region");
const { validateDistrict } = require("./Adress/District");
const { validateCategory } = require("./Category/Category");
const { validateSubcategory } = require("./Category/Subcategory");
const { validateOffer } = require("./Order_Offer_Product/Offer");
const { validateAdmin } = require("./User/Admin");
const { validateTradeType } = require("./Trade/TradeType");
const { validateOrder } = require("./Order/Order");
const { validateProduct } = require("./Product/Product");

module.exports = {
  validateTradeType,
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
  validateAdmin,
};
