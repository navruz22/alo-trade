const { Admin } = require("../../models/models");
const { validateAdmin } = require("../../models/validators");
const { bcrypt, jwt, config } = require("../../packages");

const createAdmin = async (req, res) => {
  try {
    const { phone, password } = req.body;
    const { error } = validateAdmin(req.body);
    if (error) {
      return res.status(400).json({ error: error.message });
    }
    const candidate = await Admin.findOne({ phone });
    if (candidate) {
      return res
        .status(400)
        .json({ message: "Foydalanuvchi avval ro'yxatga olingan" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const admin = new Admin({ phone, password: hashedPassword });
    await admin.save();

    const token = jwt.sign(
      {
        type: "admin",
        id: admin._id,
      },
      config.get("JWT_SECRET"),
      { expiresIn: "12h" }
    );

    res.status(201).json(token);
  } catch (e) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi..." });
  }
};

const loginAdmin = async (req, res) => {
  try {
    console.log(req.body);
    const { phone, password } = req.body;
    const admin = await Admin.findOne({ phone });
    if (!admin) {
      return res.status(400).json({ message: "Foydalanuvchi topilmadi" });
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Parol noto'g'ri" });
    }
    const token = jwt.sign(
      {
        type: "admin",
        id: admin._id,
      },
      config.get("JWT_SECRET"),
      { expiresIn: "12h" }
    );
    res.json(token);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Serverda xatolik yuz berdi..." });
  }
};

const updateAdmin = async (req, res) => {
  try {
    const { phone, password } = req.body;

    const { error } = validateAdmin(req.body);
    if (error) {
      return res.status(400).json({ error: error.message });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const admin = await Admin.findOneAndUpdate(
      { _id: req.user.id },
      { phone, password: hashedPassword }
    ).select("phone");

    res.json(admin);
  } catch (e) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi..." });
  }
};

const deleteAdmin = async (req, res) => {
  try {
    const { phone, password } = req.body;
    const adminn = await Admin.findOne({ phone });
    if (!adminn) {
      return res.status(400).json({ message: "Foydalanuvchi topilmadi" });
    }

    const admin = await Admin.findOneAndDelete({ _id: req.user.id }).select(
      "phone"
    );
    res.json(admin);
  } catch (e) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi..." });
  }
};

module.exports = { createAdmin, loginAdmin, updateAdmin, deleteAdmin };
