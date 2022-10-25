const { Schema, model, Joi } = require("../../packages");

const organization = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, email: true, lowercase: true },
    image: { type: String },
    phone: { type: String, unique: true, min: 13 },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    region: { type: Schema.Types.ObjectId, ref: "Region" },
    district: { type: Schema.Types.ObjectId, ref: "District" },
    isArchive: { type: Boolean, default: false },
    categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    subcategories: [{ type: Schema.Types.ObjectId, ref: "Subcategory" }],
    tradetypes: [{ type: Schema.Types.ObjectId, ref: "TradeType" }],
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
    tradetypes: Joi.array().required(),
    region: Joi.string(),
    district: Joi.string(),
  });

  return schema.validate(organization);
}

module.exports.validateOrganization = validateOrganization;
module.exports.Organization = model("Organization", organization);
