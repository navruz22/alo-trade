const { Order } = require("../../models/models");
const { map } = require("lodash");

const getOrder = async (id) =>
  await Order.findById(id)
    .populate("region", "name")
    .populate("district", "name")
    .populate("categories", "name")
    .populate("subcategories", "name")
    .populate("tradetypes", "name")
    .populate("user", "firstname lastname phone email")
    .populate("organization", "name phone email");

const getOrders = async ({ page, count, query }) =>
  await Order.find(query)
    .sort({ position: 1, createdAt: -1 })
    .skip(page * count)
    .limit(count)
    .select("-updatedAt -__v")
    .populate("region", "name")
    .populate("district", "name")
    .populate("categories", "name")
    .populate("subcategories", "name")
    .populate("tradetypes", "name")
    .populate("user", "firstname lastname phone email")
    .populate("organization", "name phone email");

const getOrdersCount = async ({ query }) => await Order.find(query).count();

const getOrderWithId = async (id) =>
  await Order.findById(id)
    .populate({
      path: "region",
      select: "name",
      populate: {
        path: "districts",
        select: "name",
      },
    })
    .populate("district", "name")
    .populate({
      path: "categories",
      select: "name",
      populate: {
        path: "subcategories",
        select: "name",
      },
    })
    .populate("subcategories", "name")
    .populate("subcategories2", "name")
    .populate({
      path: "user",
      select: "firstname lastname phone email image region district",
      populate: {
        path: "district",
        select: "name",
      },
    })
    .populate({
      path: "user",
      select: "firstname lastname phone email image region district",
      populate: {
        path: "region",
        select: "name",
      },
    })
    .populate("organization", "name phone email")
    .then((order) => {
      return {
        _id: order?._id,
        name: order?.name,
        description: order?.description,
        images: order?.images,
        minPrice: order?.minPrice,
        maxPrice: order?.maxPrice,
        currency: order?.currency,
        position: order?.position,
        tradetypes: order?.tradetypes,
        status: order?.status,
        user: {
          firstname: order?.user?.firstname,
          lastname: order?.user?.lastname,
          phone: order?.user?.phone,
          image: order?.user?.image,
          region: order?.user?.region?.name,
          district: order?.user?.district?.name,
        },
        district: {
          label: order?.district?.name,
          value: order?.district?._id,
        },
        region: {
          label: order?.region?.name,
          value: order?.region?._id,
          districts: map(order?.region?.districts, (district) => {
            return { label: district.name, value: district._id };
          }),
        },
        categories: map(order?.categories, (category) => {
          return {
            label: category.name,
            value: category._id,
            subcategories: map(category?.subcategories, (subcategory) => {
              return { label: subcategory.name, value: subcategory._id };
            }),
          };
        }),
        subcategories: map(order?.subcategories, (subcategory) => {
          return { label: subcategory.name, value: subcategory._id };
        }),
        subcategories2: map(order?.subcategories, (subcategory) => {
          return { label: subcategory.name, value: subcategory._id };
        }),
      };
    });

const getOrderForOffer = async (id) =>
  await Order.findById(id)
    .populate({
      path: "region",
      select: "name",
    })
    .populate("district", "name")
    .populate({
      path: "categories",
      select: "name",
    })
    .populate("tradetypes", "name")
    .populate("subcategories", "name")
    .populate("user", "firstname lastname phone email")
    .populate("organization", "name phone email");

const getOrderForUpdate = async (id) =>
  await Order.findById(id)
    .select("-updatedAt -__v")
    .populate("region", "name")
    .populate("district", "name")
    .populate("categories", "name")
    .populate("subcategories", "name")
    .populate("tradetypes", "name")
    .populate("user", "firstname lastname phone email")
    .populate("organization", "name phone email");

module.exports = {
  getOrder,
  getOrderWithId,
  getOrders,
  getOrderForUpdate,
  getOrderForOffer,
  getOrdersCount,
};
