const { User } = require("../../models/models");
const { validateUserSignUp } = require("../../models/validators");
const { bcrypt, jwt, config } = require("../../packages");

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
        });
      }
    );
  } catch (error) {
    res.status(501).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

const updateUser = async (req, res) => {
  try {
    const {
      _id,
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
    const user = await User.findById(_id);
    if (!user) {
      return res.status(400).json({ message: "Foydalanuvchi topilmadi!" });
    }

    user.firstname = firstname || user.firstname;
    user.lastname = lastname || user.lastname;
    user.image = image || user.image;
    user.region = region || user.region;
    user.district = district || user.district;

    if (email) {
      const userEmail = await User.findOne({ email });
      if (userEmail && userEmail._id.toString() !== _id) {
        return res
          .status(400)
          .json({ message: "Email avval ro'yxatdan o'tgan!" });
      }
    }

    if (phone) {
      const userPhone = await User.findOne({ phone });
      if (userPhone && userPhone._id.toString() !== _id) {
        return res
          .status(400)
          .json({ message: "Bu telefon raqam avval ro'yxatdan o'tgan!" });
      }
      user.phone = phone;
    }

    if (newPassword) {
      const isMatch = bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Parol noto'g'ri" });
      }
      const passwordHash = bcrypt.hash(newPassword, 12);
      user.password = passwordHash;
    }
    await user.save();

    res.status(200).json({
      _id,
      firstname,
      lastname,
      email,
      phone,
      image,
      region,
      district,
    });
  } catch (error) {
    res.status(500).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findById(id)
      .select("-password")
      .populate("region", "name")
      .populate("district", "name");
    if (!user) {
      return res.status(400).json({ message: "Foydalanuvchi topilmadi!" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findById(id).select("-password");
    if (!user) {
      return res.status(400).json({ message: "Foydalanuvchi topilmadi!" });
    }
    user.isArchive = true;
    await user.save();
    res.status(200).json({ message: "Foydalanuvchi o'chirildi!" });
  } catch (error) {
    res.status(500).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

module.exports = { createUser, updateUser, getUserById, deleteUser };
