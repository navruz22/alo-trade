const { Schema, model, Joi } = require("../../packages");

const offer = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  organization: { type: Schema.Types.ObjectId, ref: "Organization" },
  title: { type: String, required: true },
  images: [{ type: String }],
  offer: { type: Schema.Types.ObjectId, ref: "Order", required: true },
  isArchive: { type: Boolean, default: false },
});

const validateOffer = (offer) => {
  const schema = Joi.object({
    user: Joi.string(),
    organization: Joi.string(),
    title: Joi.string().required(),
    images: Joi.array(),
    order: Joi.string().required(),
  });

  return schema.validate(offer);
};

module.exports.validateOffer = validateOffer;
module.exports.Offer = model("Offer", offer);
