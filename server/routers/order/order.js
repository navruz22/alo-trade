const { validateOrder } = require("../../models/validators");
const { Order, Organization } = require("../../models/models");
const {
  getOrder,
  getOrderWithId,
  getOrders,
  getOrderForUpdate,
  getOrderForOffer,
} = require("./constants");

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

const getOrdersByFilter = async (req, res) => {
  try {
    const {
      count,
      page,
      order: orderFilter,
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
    if (orderFilter === "my") {
      query.user = user;
    }
    const orders = await getOrders({ count, page, query });
    res.status(200).json({ orders });
  } catch (error) {
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

const updateOrder = async (req, res) => {
  try {
    const { id } = req.body;

    delete req.body.id;

    const { error } = validateOrder(req.body);

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    await Order.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    const order = await getOrder(id);

    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.body;

    await Order.findByIdAndDelete(id);

    res.status(200).json({ id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateOrderPosition = async (req, res) => {
  try {
    const { id } = req.body;

    const updatedOrder = await Order.findById(id);

    if (!updatedOrder) {
      return res.status(400).json({ message: "Buyurtma topilmadi" });
    }

    updatedOrder.position =
      updatedOrder.position === "active" ? "unactive" : "active";
    await updatedOrder.save();

    const order = await getOrderForUpdate(id);
    res.status(200).json({ order });
  } catch (err) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi..." });
  }
};

const getOrderByOffer = async (req, res) => {
  try {
    const { id } = req.body;

    const order = await getOrderForOffer(id);

    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi..." });
  }
};

module.exports = {
  createOrder,
  getOrdersByFilter,
  getOrder,
  getOrderById,
  updateOrder,
  deleteOrder,
  updateOrderPosition,
  getOrderByOffer,
};
