const {
  Favorite,
  validateFavorite,
} = require("../../models/Favorite/Favorite");
const { Product, User } = require("../../models/models");

const createFavorite = async (req, res) => {
  try {
    const { productId, userId } = req.body;

    const user = await User.findById(userId);
    const product = await Product.findById(productId);

    if (user.favorites) {
      user.favorites.push(productId);
    } else {
      user.favorites = [productId];
    }

    if (product.favorites) {
      product.favorites.push(userId);
    } else {
      product.favorites = [userId];
    }

    product.save();
    user.save();

    res.status(200).json({ productId, userId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFavorites = async (req, res) => {
  try {
    const { user } = req.body;

    const products = await Product.find({ favorites: user });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFavorite = async (req, res) => {
  try {
    const { productId, userId } = req.body;

    await User.findByIdAndUpdate(userId, {
      $pullAll: {
        favorites: [productId],
      },
    });
    await Product.findByIdAndUpdate(productId, {
      $pullAll: {
        favorites: [userId],
      },
    });

    res.status(200).json({ productId, userId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createFavorite,
  getFavorites,
  deleteFavorite,
};
