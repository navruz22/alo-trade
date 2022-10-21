const {
  validateOrganization,
  validateUserSignUp,
} = require("../../models/validators");
const { Organization, User } = require("../../models/models");
const { bcrypt, config, jwt } = require("../../packages");

const createOrganization = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      name,
      region,
      district,
      password,
      email,
      phone,
      categories,
      subcategories,
    } = req.body;

    const { error } = validateUserSignUp({
      firstname,
      lastname,
      region,
      district,
      password,
      email,
      phone,
    });

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    const { error: organizationError } = validateOrganization({
      name,
      phone,
      email,
      categories,
      subcategories,
    });

    if (organizationError) {
      return res.status(400).json({ message: organizationError.message });
    }

    const user = await User.findOne({ phone });

    if (user) {
      return res.status(400).json({
        message: `${phone} telefon raqamdan avval ro'yxatdan o'tilgan`,
      });
    }

    const organization = await Organization.findOne({ name, phone });

    if (organization) {
      return res.status(400).json({
        message: `${name} nomli tashkilot avval ro'yxatdan`,
      });
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      firstname,
      lastname,
      region,
      district,
      password: hashPassword,
      email,
      phone,
    });
    await newUser.save();

    const newOrganization = new Organization({
      name,
      phone,
      email,
      categories,
      subcategories,
      user: newUser._id,
    });
    await newOrganization.save();

    newUser.organization = newOrganization._id;
    newOrganization.user = newUser._id;
    await newOrganization.save();
    await newUser.save();

    jwt.sign(
      { id: newUser._id },
      config.get("JWT_SECRET"),
      {},
      (err, token) => {
        if (err) {
          return res.status(400).json({
            error: err.message,
          });
        }
        return res.status(200).json({
          token,
          user: {
            firstname: newUser.firstname,
            lastname: newUser.lastname,
            phone: newUser.phone,
            image: newUser.image,
            _id: newUser._id,
            type: "organization",
          },
        });
      }
    );
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Serverda xatolik yuz berdi..." });
  }
};

module.exports = { createOrganization };
