const { User } = require("./User/User");
const { Organization } = require("./User/Organization");
const { Region } = require("./Adress/Region");
const { District } = require("./Adress/District");
const { Category } = require("./Category/Category");
const { Subcategory } = require("./Category/Subcategory");
const { Offer } = require("./Order_Offer_Product/Offer");
const { Admin } = require("./User/Admin");
const { TradeType } = require("./Trade/TradeType");
const { Order } = require("./Order/Order");
const { Product } = require("./Product/Product");

module.exports = {
  Product,
  TradeType,
  User,
  Subcategory,
  Category,
  District,
  Region,
  Organization,
  Order,
  Offer,
  Admin,
};
