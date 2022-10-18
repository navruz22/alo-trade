const { validateDistrict } = require("../../models/validators");
const { District, Region } = require("../../models/models");

const createDistrict = async (req, res) => {
  try {
    const { error } = validateDistrict(req.body);
    if (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
    const { name, region } = req.body;

    const district = await District.findOne({ name: name, region });

    if (district) {
      return res.status(400).json({
        message: `Diqqat! ${name} tumani avval yaratilgan.`,
      });
    }

    const newDistrict = new District({
      name,
      region,
    });

    await newDistrict.save();

    const updateRegion = await Region.findById(region);
    updateRegion.districts.push(newDistrict._id);
    await updateRegion.save();

    res.send(newDistrict);
  } catch (error) {
    res.status(501).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

const updateDistrict = async (req, res) => {
  try {
    const { name, _id, region } = req.body;
    const { error } = validateDistrict({ name, region });
    if (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
    const district = await District.findById(_id).select("name");
    if (!district) {
      return res.status(400).json({
        message: `Diqqat! ${name} tumani topilmadi.`,
      });
    }

    district.name = name;
    await district.save();

    res.send(district);
  } catch (error) {
    console.log(error);
    res.status(501).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

const deleteDistrict = async (req, res) => {
  try {
    const { _id, name } = req.body;
    const district = await District.findById(_id).select("name");
    if (!district) {
      return res.status(400).json({
        message: `Diqqat! ${name} tumani topilmadi.`,
      });
    }

    district.isArchive = true;
    await district.save();

    res.send(district);
  } catch (error) {
    res.status(501).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

const getDistrictsByRegion = async (req, res) => {
  try {
    const { region } = req.body;
    const districts = await District.find({ isArchive: false, region }).select(
      "name"
    );
    res.send(districts);
  } catch (error) {
    res.status(501).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

module.exports = {
  createDistrict,
  updateDistrict,
  deleteDistrict,
  getDistrictsByRegion,
};
