const { validateOrder } = require("../../models/validators");
const { Order, Organization } = require("../../models/models");
const { getOrder, getOrders, getOrderWithId } = require("./constants");

const createOrder = async (req, res) => {
  try {
    const id = req.user.id;
    const { error } = validateOrder(req.body);

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    const organization = await Organization.findOne({ user: id });

    const newOrder = new Order({
      ...req.body,
      user: id,
    });

    if (organization) {
      newOrder.organization = organization._id;
    }

    await newOrder.save();

    const order = await getOrder(newOrder._id);

    res.status(201).json({ order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOrdersByUser = async (req, res) => {
  try {
    const { count, page } = req.body;
    const user = req.user.id;

    const orders = await getOrders({ user, count, page });
    res.status(200).json({ orders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ Serverda: "Serverda xatolik yuz berdi..." });
  }
};

const getOrderById = async (req, res) => {
  try {
    const { id } = req.body;

    const order = await getOrderWithId(id);

    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi..." });
  }
};

module.exports = { createOrder, getOrdersByUser, getOrder, getOrderById };
