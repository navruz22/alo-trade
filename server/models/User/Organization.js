const { Schema, model, Joi } = require("../../packages");

const organization = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, email: true, lowercase: true },
    address: { type: String },
    image: { type: String },
    phone: { type: String, unique: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    region: { type: Schema.Types.ObjectId, ref: "Region" },
    district: { type: Schema.Types.ObjectId, ref: "District" },
    isArchive: { type: Boolean, default: false },
    categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    subcategories: [{ type: Schema.Types.ObjectId, ref: "Subcategory" }],
    subcategories2: [{ type: Schema.Types.ObjectId, ref: "Subcategory2" }],
    tradetypes: [{ type: Schema.Types.ObjectId, ref: "TradeType" }],
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

function validateOrganization(organization) {
  const schema = Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string(),
    image: Joi.string(),
    categories: Joi.array().required(),
    subcategories: Joi.array().required(),
    subcategories2: Joi.array(),
    tradetypes: Joi.array().required(),
    region: Joi.string(),
    district: Joi.string(),
    description: Joi.string(),
  });

  return schema.validate(organization);
}

module.exports.validateOrganization = validateOrganization;
module.exports.Organization = model("Organization", organization);
