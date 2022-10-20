const { validateSubcategory } = require("../../models/validators");
const { Category, Subcategory } = require("../../models/models");

const createSubcategory = async (req, res) => {
  try {
    const { image, name, category } = req.body;
    const { error } = validateSubcategory(req.body);
    if (error) {
      return res.status(400).json({ message: error.message });
    }

    const subcategory = await Subcategory.findOne({
      name,
      category,
    });

    if (subcategory) {
      return res.status(400).json({
        message: `${name} subcategoriyasi allaqachon yaratilgan  `,
      });
    }

    const categoryy = await Category.findById(category);
    if (!categoryy) {
      return res.status(404).json({ message: "Kategoriya mavjd emas" });
    }

    const newSubcategory = new Subcategory({
      image,
      name,
      category,
    });

    await newSubcategory.save();

    categoryy.subcategories.push(newSubcategory._id);
    await categoryy.save();

    res.status(201).json({ newSubcategory });
  } catch (err) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi..." });
  }
};

const getSubcategories = async (req, res) => {
  try {
    const { category } = req.body;

    const categoryy = await Category.findById(category);

    if (!categoryy) {
      return res.status(400).json({ message: "Kategoriya mavjud emas" });
    }

    const subcategories = await Subcategory.find({ category }).select(
      "name image"
    );

    res.status(200).json({ subcategories });
  } catch (err) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi..." });
  }
};

module.exports = { createSubcategory, getSubcategories };
