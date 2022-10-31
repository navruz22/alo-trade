const { Offer, Message } = require("../../models/models");
const { map } = require("lodash");

const getOffersByUser = async (id) =>
  await Offer.find()
    .or([{ user: id }, { offererUser: id }])
    .sort({ createdAt: -1 })
    .populate("messages", "message")
    .populate("user")
    .populate("organization")
    .populate("offererUser")
    .populate("offererOrganization")
    .populate("order")
    .populate("product")
    .then((offers) =>
      map(offers, (offer) => {
        return {
          messages: offer?.messages[offer?.messages.length - 1],
          user: offer?.user,
          organization: offer?.organization,
          offererUser: offer?.offererUser,
          offererOrganization: offer?.offererOrganization,
          order: offer?.order,
          product: offer?.product,
          _id: offer?._id,
          createdAt: offer?.createdAt,
        };
      })
    );

const getOfferById = async (id) =>
  await Offer.findById(id)
    .populate("messages", "message")
    .populate("user")
    .populate("organization")
    .populate("offererUser")
    .populate("offererOrganization")
    .populate("order")
    .populate("product")
    .then((offer) => {
      return {
        messages: offer?.messages[offer?.messages?.length - 1],
        user: offer?.user,
        organization: offer?.organization,
        offererUser: offer?.offererUser,
        offererOrganization: offer?.offererOrganization,
        order: offer?.order,
        product: offer?.product,
        _id: offer?._id,
        createdAt: offer?.createdAt,
      };
    });

const getOfferUser = async (query) =>
  await Offer.findOne(query)
    .populate("messages", "message")
    .populate("user")
    .populate("organization")
    .populate("offererUser")
    .populate("offererOrganization")
    .populate("order")
    .populate("product")
    .then((offer) => {
      if (!offer) return offer;
      return {
        messages: offer?.messages[offer?.messages?.length - 1],
        user: offer?.user,
        organization: offer?.organization,
        offererUser: offer?.offererUser,
        offererOrganization: offer?.offererOrganization,
        order: offer?.order,
        product: offer?.product,
        _id: offer?._id,
        createdAt: offer?.createdAt,
      };
    });

const getMessages = async (offer) =>
  await Message.find(offer)
    .select("user message createdAt")
    .populate("user", "firstname lastname")
    .sort({ createdAt: 1 });

module.exports = {
  getOffersByUser,
  getOfferById,
  getOfferUser,
  getMessages,
};
