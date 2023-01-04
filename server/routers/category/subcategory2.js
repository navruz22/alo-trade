const { Subcategory, Subcategory2 } = require("../../models/models");
const { forEach } = require("lodash");

const createSubcategory2 = async (req, res) => {
  try {
    const { image, name, subcategory } = req.body;

    const subcategory2 = await Subcategory2.findOne({
      name,
      subcategory,
    });

    if (subcategory2) {
      return res.status(400).json({
        message: `${name} subcategoriyasi allaqachon yaratilgan  `,
      });
    }

    const checkSubcategory = await Subcategory.findById(subcategory);
    if (!checkSubcategory) {
      return res.status(404).json({ message: "Категория не найдена" });
    }

    const newSubcategory2 = new Subcategory2({
      image,
      name,
      subcategory,
    });

    await newSubcategory2.save();

    checkSubcategory.subcategories.push(newSubcategory2._id);
    await checkSubcategory.save();

    res.status(201).json(newSubcategory2);
  } catch (err) {
    res.status(500).json({ message: "Ошибка в сервере..." });
  }
};

const createSubcategories2 = async (req, res) => {
  try {
    const { subcategories2, subcategory } = req.body;

    const checkSubcategory = await Subcategory.findById(subcategory);

    if (!checkSubcategory) {
      return res.status(400).json({ message: "Категория не найдена" });
    }

    forEach(subcategories2, async (subcategoryEl) => {
      const newSubcategory2 = new Subcategory2({
        name: subcategoryEl.name,
        subcategory,
      });

      await newSubcategory2.save();
      const subcategoryy = await Subcategory.findById(subcategory);
      subcategoryy.subcategories.push(newSubcategory2._id);
      await subcategoryy.save();
    });

    res
      .status(201)
      .json({ message: "Subkategoriyalar muvaffaqiyatli yaratildi" });
  } catch (err) {
    res.status(500).json({ message: "Ошибка в сервере..." });
  }
};

const getSubcategories2 = async (req, res) => {
  try {
    const { subcategory } = req.body;

    const subcategoryy = await Subcategory.findById(subcategory);

    if (!subcategoryy) {
      return res.status(400).json({ message: "Категория не найдена" });
    }

    const subcategories2 = await Subcategory2.find({ subcategory }).select(
      "name image"
    );

    res.status(200).json(subcategories2);
  } catch (err) {
    res.status(500).json({ message: "Ошибка в сервере..." });
  }
};

module.exports = {
  createSubcategory2,
  getSubcategories2,
  createSubcategories2,
};
