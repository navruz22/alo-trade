const { validateRegion } = require("../../models/validators");
const { Region, District } = require("../../models/models");
const { map } = require("lodash");

const createRegion = async (req, res) => {
  try {
    const { error } = validateRegion(req.body);
    if (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
    const { name } = req.body;

    const region = await Region.findOne({ name: name });

    if (region) {
      return res.status(400).json({
        message: `Diqqat! ${name} viloyati avval yaratilgan.`,
      });
    }

    const newRegion = new Region({
      name,
    });

    await newRegion.save();

    res.send(newRegion);
  } catch (error) {
    res.status(501).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

const updateRegion = async (req, res) => {
  try {
    const { name, _id } = req.body;
    const { error } = validateRegion({ name });
    if (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
    const region = await Region.findById(_id.toString()).select("name");
    if (!region) {
      return res.status(400).json({
        message: `Diqqat! ${name} viloyati topilmadi.`,
      });
    }

    region.name = name;
    await region.save();

    res.send(region);
  } catch (error) {
    res.status(501).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

const deleteRegion = async (req, res) => {
  try {
    const { _id } = req.body;
    const region = await Region.findById(_id);

    if (!region) {
      return res.status(400).json({
        message: `Diqqat! Viloyat topilmadi.`,
      });
    }

    region.isArchive = true;
    await region.save();

    res.send(region);
  } catch (error) {
    res.status(501).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

const getRegions = async (req, res) => {
  try {
    const regions = await Region.find({ isArchive: false })
      .sort("name")
      .select("name districts")
      .populate({ path: "districts", select: "name" });
    res.send(regions);
  } catch (error) {
    res.status(501).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

module.exports = { createRegion, updateRegion, deleteRegion, getRegions };
