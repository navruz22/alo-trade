const { User } = require("../../models/models");
const { validateUserSignUp } = require("../../models/validators");
const { bcrypt, jwt, config } = require("../../packages");
const { getOrganizationById, getUserById } = require("./constants");

const createUser = async (req, res) => {
  try {
    const { error } = validateUserSignUp(req.body);
    if (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
    const { phone, password } = req.body;
    const user = await User.findOne({ phone });
    if (user) {
      return res.status(400).json({
        message: `Diqqat! ${phone} telefon raqam avval ro'yxatdan o'tgan.`,
      });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = new User({
      ...req.body,
      password: passwordHash,
    });
    await newUser.save();

    const userData = await getUserById(newUser.id);
    const organization =
      userData.organization &&
      (await getOrganizationById(userData.organization));

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
          user: { ...userData },
          organization,
        });
      }
    );
  } catch (error) {
    res.status(501).json({ error: "Ошибка в сервере..." });
  }
};

const updateUser = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      image,
      phone,
      region,
      district,
      email,
      password,
      newPassword,
    } = req.body;
    const { id } = req.user;
    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({ message: "Пользователь не найден!" });
    }
    user.firstname = firstname || user.firstname;
    user.lastname = lastname || user.lastname;
    user.image = image || user.image;
    user.region = region || user.region;
    user.district = district || user.district;

    if (email) {
      const userEmail = await User.findOne({ email });
      if (userEmail && userEmail._id.toString() !== id) {
        return res
          .status(400)
          .json({ message: "Email avval ro'yxatdan o'tgan!" });
      }
      user.email = email;
    }
    if (phone) {
      const userPhone = await User.findOne({ phone });
      if (userPhone && userPhone._id.toString() !== id) {
        return res
          .status(400)
          .json({ message: "Bu telefon raqam avval ro'yxatdan o'tgan!" });
      }
      user.phone = phone;
    }

    if (newPassword) {
      const isMatch = bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Неверный пароль" });
      }
      const passwordHash = bcrypt.hash(newPassword, 12);
      user.password = passwordHash;
    }
    await user.save();

    const userData = await getUserById(id);

    res.status(200).json({
      user: userData,
    });
  } catch (error) {
    res.status(500).json({ error: "Ошибка в сервере..." });
  }
};

const getUserType = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findById(id).select("-password");
    if (!user) {
      return res.status(400).json({ message: "Пользователь не найден!" });
    }
    res.status(200).json({
      firstname: user.firstname,
      lastname: user.lastname,
      phone: user.phone,
      image: user.image,
      _id: user._id,
      type: user.organization ? "organization" : "user",
    });
  } catch (error) {
    res.status(500).json({ error: "Ошибка в сервере..." });
  }
};

const getUserData = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await getUserById(id);

    if (!user) {
      return res.status(401).json({ message: "Вы не авторизованы" });
    }

    const organization =
      user.organization && (await getOrganizationById(user.organization));

    res.status(200).json({ user, organization });
  } catch (error) {
    res.status(500).json({ error: "Ошибка в сервере..." });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findById(id).select("-password");
    if (!user) {
      return res.status(400).json({ message: "Пользователь не найден!" });
    }
    user.isArchive = true;
    await user.save();
    res.status(200).json({ message: "Foydalanuvchi o'chirildi!" });
  } catch (error) {
    res.status(500).json({ error: "Ошибка в сервере..." });
  }
};

const signInUser = async (req, res) => {
  try {
    const { phone, password } = req.body;
    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(400).json({ message: "Пользователь не найден!" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Неверный пароль" });
    }

    const userData = await getUserById(user.id);
    const organization =
      userData.organization &&
      (await getOrganizationById(userData.organization));

    jwt.sign({ id: user._id }, config.get("JWT_SECRET"), {}, (err, token) => {
      if (err) {
        return res.status(400).json({
          error: err.message,
        });
      }
      return res.status(200).json({
        token,
        user: { ...userData },
        organization,
      });
    });
  } catch (error) {
    res.status(500).json({ error: "Ошибка в сервере..." });
  }
};

const updatePassword = async (req, res) => {
  try {
    const { password, newPassword } = req.body;
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(400).json({ message: "Пользователь не найден!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Текущий пароль неверный" });
    }

    const passwordHash = await bcrypt.hash(newPassword, 12);
    user.password = passwordHash;
    await user.save();
    res.status(200).json({ message: "Пароль успешно изменен!" });
  } catch (error) {
    res.status(500).json({ error: "Ошибка в сервере..." });
  }
};

module.exports = {
  createUser,
  updateUser,
  getUserData,
  deleteUser,
  signInUser,
  getUserType,
  updatePassword,
};
