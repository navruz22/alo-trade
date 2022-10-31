const { validateProduct } = require("../../models/validators");
const { Product, Organization } = require("../../models/models");
const {
  getProduct,
  getProductWithId,
  getProducts,
  getProductForUpdate,
  getProductForOffer,
} = require("./constants");

const createProduct = async (req, res) => {
  try {
    const id = req.user.id;
    const { error } = validateProduct(req.body);

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    const organization = await Organization.findOne({ user: id });

    const newProduct = new Product({
      ...req.body,
      user: id,
    });

    if (organization) {
      newProduct.organization = organization._id;
    }

    await newProduct.save();

    const product = await getProduct(newProduct._id);

    res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductsByFilter = async (req, res) => {
  try {
    const {
      count,
      page,
      product: productFilter,
      categories,
      subcategories,
      tradetypes,
      regions,
      districts,
      user,
    } = req.body;
    let query = {};
    if (tradetypes.length > 0) {
      query.tradetypes = { $in: tradetypes };
    }
    if (districts.length) {
      query.district = { $in: districts };
    }
    if (regions.length) {
      query.region = { $in: regions };
    }
    if (categories.length) {
      query.categories = { $in: categories };
    }
    if (subcategories.length) {
      query.subcategories = { $in: subcategories };
    }
    if (productFilter === "my") {
      query.user = user;
    }
    const products = await getProducts({ count, page, query });
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ Serverda: "Serverda xatolik yuz berdi..." });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.body;

    const product = await getProductWithId(id);

    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi..." });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.body;

    delete req.body.id;

    const { error } = validateProduct(req.body);

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    const product = await getProduct(id);

    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.body;

    await Product.findByIdAndDelete(id);

    res.status(200).json({ id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProductPosition = async (req, res) => {
  try {
    const { id } = req.body;

    const updatedProduct = await Product.findById(id);

    if (!updatedProduct) {
      return res.status(400).json({ message: "Buyurtma topilmadi" });
    }

    updatedProduct.position =
      updatedProduct.position === "active" ? "unactive" : "active";
    await updatedProduct.save();

    const product = await getProductForUpdate(id);
    res.status(200).json({ product });
  } catch (err) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi..." });
  }
};

const getProductByOffer = async (req, res) => {
  try {
    const { id } = req.body;

    const product = await getProductForOffer(id);

    res.status(200).json({ product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Serverda xatolik yuz berdi..." });
  }
};

module.exports = {
  createProduct,
  getProductsByFilter,
  getProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  updateProductPosition,
  getProductByOffer,
};
