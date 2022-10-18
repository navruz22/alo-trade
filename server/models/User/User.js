const { Schema, model, Joi } = require("../packages");

const user = new Schema(
  {
    firstname: { type: String, required: true, trim: true, capitalize: true },
    lastname: { type: String, required: true, trim: true, capitalize: true },
    email: { type: String, email: true, lowercase: true },
    images: [{ type: String }],
    phone: { type: String, unique: true },
    password: { type: String, min: 6, required: true },
    organization: { type: Schema.Types.ObjectId, ref: "Organization" },
    region: { type: Schema.Types.ObjectId, ref: "Region" },
    district: { type: Schema.Types.ObjectId, ref: "District" },
    isArchive: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

function validateUserSignUp(user) {
  const schema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string(),
    image: Joi.array(),
    password: Joi.string().required(),
    region: Joi.string().required(),
    district: Joi.string().required(),
  });

  return schema.validate(user);
}

function validateUserSignIn(user) {
  const schema = Joi.object({
    phone: Joi.string().required(),
    login: Joi.string().required(),
  });

  return schema.validate(user);
}

module.exports.validateUserSignUp = validateUserSignUp;
module.exports.validateUserSignIn = validateUserSignIn;
module.exports.User = model("User", user);
