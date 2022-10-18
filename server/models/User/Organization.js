const { Schema, model, Joi } = require("../packages");

const organization = new Schema(
  {
    email: { type: String, email: true, lowercase: true },
    images: [{ type: String }],
    phone: { type: String, unique: true },
    User: { type: Schema.Types.ObjectId, ref: "User" },
    Region: { type: Schema.Types.ObjectId, ref: "Region" },
    District: { type: Schema.Types.ObjectId, ref: "District" },
    isArchive: { type: Boolean, default: false },
    category: { type: Schema.Types.String, default: "Category" },
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
    image: Joi.array(),
  });

  return schema.validate(organization);
}

module.exports.validateOrganization = validateOrganization;
module.exports.Organization = model("Organization", organization);
