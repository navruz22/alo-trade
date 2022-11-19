const { validateSubcategory } = require("../../models/validators");
const { Category, Subcategory } = require("../../models/models");
const { forEach } = require("lodash");

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
      return res.status(404).json({ message: "Категория не найдена" });
    }

    const newSubcategory = new Subcategory({
      image,
      name,
      category,
    });

    await newSubcategory.save();

    categoryy.subcategories.push(newSubcategory._id);
    await categoryy.save();

    res.status(201).json(newSubcategory);
  } catch (err) {
    res.status(500).json({ message: "Ошибка в сервере..." });
  }
};

const createSubcategories = async (req, res) => {
  try {
    const { subcategories, category } = req.body;

    const categoryy = await Category.findById(category);

    if (!categoryy) {
      return res.status(400).json({ message: "Категория не найдена" });
    }

    forEach(subcategories, async (subcategory) => {
      const newSubcategory = new Subcategory({
        name: subcategory.name,
        category,
      });

      await newSubcategory.save();
      const categoryy = await Category.findById(category);
      categoryy.subcategories.push(newSubcategory._id);
      await categoryy.save();
    });

    res
      .status(201)
      .json({ message: "Subkategoriyalar muvaffaqiyatli yaratildi" });
  } catch (err) {
    res.status(500).json({ message: "Ошибка в сервере..." });
  }
};

const getSubcategories = async (req, res) => {
  try {
    const { category } = req.body;

    const categoryy = await Category.findById(category);

    if (!categoryy) {
      return res.status(400).json({ message: "Категория не найдена" });
    }

    const subcategories = await Subcategory.find({ category }).select(
      "name image"
    );

    res.status(200).json(subcategories);
  } catch (err) {
    res.status(500).json({ message: "Ошибка в сервере..." });
  }
};

module.exports = { createSubcategory, getSubcategories, createSubcategories };
