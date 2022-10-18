const { Schema, model, Joi } = require("../../packages");

const product = new Schema({
  organization: { type: Schema.Types.ObjectId, ref: "Organization" },
  region: { type: Schema.Types.ObjectId, ref: "Region" },
  district: { type: Schema.Types.ObjectId, ref: "District" },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  subcategory: { type: Schema.Types.ObjectId, ref: "Subcategory" },
  title: { type: String, required: true },
  images: [{ type: String }],
  price: { type: Number, required: true },
  isArchive: { type: Boolean, default: false },
});

const validateProduct = (order) => {
  const schema = Joi.object({
    organization: Joi.string(),
    region: Joi.string(),
    district: Joi.string(),
    category: Joi.string().required(),
    subcategory: Joi.string().required(),
    title: Joi.string().required(),
    images: Joi.array(),
    price: Joi.number().required(),
  });

  return schema.validate(order);
};

module.exports.validateProduct = validateProduct;
module.exports.Product = model("Product", product);
