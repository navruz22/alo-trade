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
    .sort({ createdAt: -1 })
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
    .populate("user", "firstname lastname phone email")
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
        tradetypes: order?.tradetypes,
        status: order?.status,
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
      };
    });

module.exports = { getOrder, getOrderWithId, getOrders };
