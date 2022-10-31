const { validateOffer } = require("../../models/validators");
const { Product, Order, Offer, User, Message } = require("../../models/models");
const {
  getOffersByUser,
  getOfferById,
  getMessages,
  getOfferUser,
} = require("./constants");

const createOffer = async (req, res) => {
  try {
    const { product, order, message } = req.body;

    const offererUser = await User.findById(req.user.id);
    const offererOrganization = offererUser.organization || null;
    let user = null;
    let organization = null;

    if (product) {
      const productt = await Product.findById(product);
      organization = productt.organization;
      user = productt.user;
    }
    if (order) {
      const orderr = await Order.findById(order);
      organization = orderr.organization;
      user = orderr.user;
    }

    const newMessage = new Message({
      message,
      order,
      product,
      user: offererUser._id,
    });

    await newMessage.save();

    const newOffer = new Offer({
      user,
      organization,
      offererUser,
      offererOrganization,
      product,
      order,
      messages: [newMessage._id],
    });
    await newOffer.save();

    newMessage.offer = newOffer._id;
    await newOffer.save();
    await newMessage.save();
    const offer = await getOfferById(newOffer._id);

    res.status(201).json({ offer });
  } catch (e) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi..." });
  }
};

const getOffers = async (req, res) => {
  try {
    const id = req.user.id;
    const offers = await getOffersByUser(id);
    res.status(200).json({ offers });
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi..." });
  }
};

const getOfferByUser = async (req, res) => {
  try {
    const { product = null, order = null } = req.body;
    let query = { offererUser: req.user.id };
    if (product) {
      query.product = product;
    }
    if (order) {
      query.order = order;
    }
    const offer = await getOfferUser(query);
    res.status(200).json({ offer });
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi..." });
  }
};

const getMessagesByOffer = async (req, res) => {
  try {
    const { id } = req.body;
    const messages = await getMessages({ offer: id });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi..." });
  }
};

module.exports = { createOffer, getOffers, getMessagesByOffer, getOfferByUser };
