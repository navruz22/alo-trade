const { validateOrder } = require("../../models/validators");
const { Order } = require("../../models/models");

const createOrder = async (req, res) => {
  try {
    const id = req.user.id;
    const { error } = validateOrder(req.body);

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    const newOrder = new Order({
      ...req.body,
      user: id,
    });

    await newOrder.save();

    res.status(201).json({ order: newOrder });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createOrder };
