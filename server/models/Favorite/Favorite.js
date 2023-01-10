const Joi = require("joi");
const { Schema, model } = require("mongoose");

const favorite = new Schema(
  {
    product: { type: Schema.Types.ObjectId, ref: "Product" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    isArchive: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const validateFavorite = (favorite) => {
  const schema = Joi.object({
    product: Joi.string().required(),
    user: Joi.string().required(),
  });

  return schema.validate(favorite);
};

module.exports.validateFavorite = validateFavorite;
module.exports.Favorite = model("Favorite", favorite);
