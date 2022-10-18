const { Schema, model, Joi } = require("../../packages");

const category = new Schema({
  name: { type: String, required: true },
  image: { type: String },
  subcategories: [{ type: Schema.Types.ObjectId, ref: "Subcategory" }],
  isArchive: { type: Boolean, default: false },
});

const validateCategory = (category) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().allow("").optional(),
    subcategories: Joi.array(),
  });

  return schema.validate(category);
};

module.exports.validateCategory = validateCategory;
module.exports.Category = model("Category", category);
