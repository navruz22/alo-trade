const {
  validateOrganization,
  validateUserSignUp,
} = require("../../models/validators");
const { Organization, User } = require("../../models/models");
const { bcrypt, config, jwt } = require("../../packages");
const {
  getOrganizationById,
  getOrganizations,
  getOrganizationsCount,
  getOrganization,
} = require("./constants");

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
      tradetypes,
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
      tradetypes,
      region,
      district,
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
      region,
      district,
      tradetypes,
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
    res.status(500).json({ message: "Ошибка в сервере..." });
  }
};

const updateOrganization = async (req, res) => {
  try {
    const {
      name,
      region,
      district,
      email,
      image,
      phone,
      categories,
      subcategories,
      tradetypes,
      id,
      description,
    } = req.body;

    const { error } = validateOrganization({
      name,
      phone,
      email,
      categories,
      subcategories,
      tradetypes,
      region,
      district,
      image,
    });
    if (error) {
      return res.status(400).json({ message: error.message });
    }

    const organization = await Organization.findById(id);
    if (!organization) {
      return res.status(400).json({
        message: `${name} nomli tashkilot mavjud emas`,
      });
    }

    organization.name = name;
    organization.image = image;
    organization.phone = phone;
    organization.email = email;
    organization.region = region;
    organization.district = district;
    organization.categories = categories;
    organization.subcategories = subcategories;
    organization.tradetypes = tradetypes;
    organization.description = description;
    await organization.save();

    const updated = await getOrganizationById(organization._id);

    res.status(200).json({ organization: updated });
  } catch (e) {
    res.status(500).json({ message: "Ошибка в сервере..." });
  }
};

const createNewOrganization = async (req, res) => {
  try {
    const {
      name,
      region,
      district,
      email,
      phone,
      image,
      categories,
      subcategories,
      tradetypes,
    } = req.body;
    const { error } = validateOrganization({
      name,
      phone,
      email,
      categories,
      subcategories,
      tradetypes,
      region,
      district,
      image,
    });
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    const newOrganization = new Organization({
      name,
      phone,
      email,
      categories,
      subcategories,
      tradetypes,
      region,
      district,
      image,
      user: req.user.id,
    });
    await newOrganization.save();
    res.status(200).json(newOrganization);
  } catch (e) {
    res.status(500).json({ message: "Ошибка в сервере..." });
  }
};

const getOrganizationsByFilter = async (req, res) => {
  try {
    const {
      count,
      page,
      categories,
      subcategories,
      tradetypes,
      regions,
      districts,
      name,
    } = req.body;
    let query = {};
    if (tradetypes.length > 0) {
      query.tradetypes = { $in: tradetypes };
    }
    if (districts.length) {
      query.district = { $in: districts };
    }
    if (regions.length) {
      query.region = { $in: regions };
    }
    if (categories.length) {
      query.categories = { $in: categories };
    }
    if (subcategories.length) {
      query.subcategories = { $in: subcategories };
    }
    if (name.length > 0) {
      query.name = new RegExp(".*" + name + ".*", "i");
    }
    const organizations = await getOrganizations({ count, page, query });
    res.status(200).json({ organizations });
  } catch (e) {
    res.status(500).json({ message: "Ошибка в сервере..." });
  }
};

const getOrganizationsByFilterCount = async (req, res) => {
  try {
    const { categories, subcategories, tradetypes, regions, districts, name } =
      req.body;
    let query = {};
    if (tradetypes.length > 0) {
      query.tradetypes = { $in: tradetypes };
    }
    if (districts.length) {
      query.district = { $in: districts };
    }
    if (regions.length) {
      query.region = { $in: regions };
    }
    if (categories.length) {
      query.categories = { $in: categories };
    }
    if (subcategories.length) {
      query.subcategories = { $in: subcategories };
    }
    if (name.length > 0) {
      query.name = new RegExp(".*" + name + ".*", "i");
    }
    const totalCount = await getOrganizationsCount({ query });
    res.status(200).json({ totalCount });
  } catch (e) {
    res.status(500).json({ message: "Ошибка в сервере..." });
  }
};

const getOrganizationByid = async (req, res) => {
  try {
    const { id } = req.body;
    const organization = await getOrganization(id);
    if (!organization) {
      return res.status(400).json({ message: "Компания не найдена" });
    }
    res.status(200).json({ organization });
  } catch (e) {
    res.status(500).json({ message: "Ошибка в сервере..." });
  }
};

module.exports = {
  createOrganization,
  updateOrganization,
  createNewOrganization,
  getOrganizationsByFilter,
  getOrganizationsByFilterCount,
  getOrganizationByid,
};
