const { Category } = require("../../models/models");
const { validateCategory } = require("../../models/validators");
const { map } = require("lodash");

const createCategory = async (req, res) => {
  try {
    const { name, image } = req.body;
    console.log("fff");
    const { error } = validateCategory({ name, image });
    if (error) {
      return res.status(400).json({ message: error.message });
    }

    const category = await Category.findOne({ name });
    if (category) {
      return res
        .status(400)
        .json({ message: `${name} kategoriyasi avval yaratilgan` });
    }

    const newCategory = new Category({ name, image });
    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ message: "Ошибка в сервере..." });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { name, image, _id } = req.body;

    const { error } = validateCategory({ name, image });
    if (error) {
      return res.status(400).json({ message: error.message });
    }

    const category = await Category.findById(_id);
    if (!category) {
      return res.status(404).json({ message: "Kateriya topilmadi" });
    }

    category.name = name;
    category.image = image;
    await category.save();

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: "Ошибка в сервере..." });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { _id } = req.body;

    const category = await Category.findById(_id);
    if (!category) {
      return res.status(404).json({ message: "Категория не найдена" });
    }

    category.isArchive = true;
    await category.save();

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: "Ошибка в сервере..." });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().select("name image");
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: "Ошибка в сервере..." });
  }
};

const getCategoriesWithSubcategories = async (req, res) => {
  try {
    const categories = await Category.find()
      .select("name image")
      .populate("subcategories", "name")
      .then((categories) =>
        map(categories, (category) => {
          return {
            label: category.name,
            value: category._id,
            subcategories: map(category.subcategories, (subcategory) => {
              return {
                label: subcategory.name,
                value: subcategory._id,
                category: category._id,
              };
            }),
          };
        })
      );
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: "Ошибка в сервере..." });
  }
};

module.exports = {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategoriesWithSubcategories,
  getCategories,
};
