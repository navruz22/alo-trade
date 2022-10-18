const { Schema, model, Joi } = require("../../packages");

const Order = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  organization: { type: Schema.Types.ObjectId, ref: "Organization" },
  region: { type: Schema.Types.ObjectId, ref: "Region" },
  district: { type: Schema.Types.ObjectId, ref: "District" },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  subcategory: { type: Schema.Types.ObjectId, ref: "Subcategory" },
  title: { type: String, required: true },
  images: [{ type: String }],
  offers: [{ type: Schema.Types.ObjectId, ref: "Offer" }],
  isArchive: { type: Boolean, default: false },
});

const validateOrder = (order) => {
  const schema = Joi.object({
    user: Joi.string(),
    organization: Joi.string(),
    region: Joi.string(),
    district: Joi.string(),
    category: Joi.string().required(),
    subcategory: Joi.string().required(),
    title: Joi.string().required(),
    images: Joi.array(),
  });

  return schema.validate(order);
};

module.exports.validateOrder = validateOrder;
module.exports.Order = model("Order", Order);
