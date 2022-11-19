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
    res.status(501).json({ error: "Ошибка в сервере..." });
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
    res.status(501).json({ error: "Ошибка в сервере..." });
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
    res.status(501).json({ error: "Ошибка в сервере..." });
  }
};

const getRegions = async (req, res) => {
  try {
    const regions = await Region.find({ isArchive: false })
      .sort("name")
      .select("name districts")
      .populate({ path: "districts", select: "name" })
      .then((regions) =>
        map(regions, (region) => {
          return {
            label: region.name,
            value: region._id,
            districts: map(region.districts, (district) => {
              return { label: district.name, value: district._id };
            }),
          };
        })
      );
    res.send(regions);
  } catch (error) {
    res.status(501).json({ error: "Ошибка в сервере..." });
  }
};

module.exports = { createRegion, updateRegion, deleteRegion, getRegions };
