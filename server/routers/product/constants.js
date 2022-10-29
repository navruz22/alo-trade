const { Product } = require("../../models/models");
const { map } = require("lodash");

const getProduct = async (id) =>
  await Product.findById(id)
    .populate("region", "name")
    .populate("district", "name")
    .populate("categories", "name")
    .populate("subcategories", "name")
    .populate("tradetypes", "name")
    .populate("user", "firstname lastname phone email")
    .populate("organization", "name phone email");

const getProducts = async ({ page, count, query }) =>
  await Product.find(query)
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

const getProductWithId = async (id) =>
  await Product.findById(id)
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
    .then((product) => {
      return {
        _id: product?._id,
        name: product?.name,
        description: product?.description,
        images: product?.images,
        minPrice: product?.minPrice,
        maxPrice: product?.maxPrice,
        currency: product?.currency,
        position: product?.position,
        tradetypes: product?.tradetypes,
        status: product?.status,
        district: {
          label: product?.district?.name,
          value: product?.district?._id,
        },
        region: {
          label: product?.region?.name,
          value: product?.region?._id,
          districts: map(product?.region?.districts, (district) => {
            return { label: district.name, value: district._id };
          }),
        },
        categories: map(product?.categories, (category) => {
          return {
            label: category.name,
            value: category._id,
            subcategories: map(category?.subcategories, (subcategory) => {
              return { label: subcategory.name, value: subcategory._id };
            }),
          };
        }),
        subcategories: map(product?.subcategories, (subcategory) => {
          return { label: subcategory.name, value: subcategory._id };
        }),
      };
    });

const getProductForUpdate = async (id) =>
  await Product.findById(id)
    .select("-updatedAt -__v")
    .populate("region", "name")
    .populate("district", "name")
    .populate("categories", "name")
    .populate("subcategories", "name")
    .populate("tradetypes", "name")
    .populate("user", "firstname lastname phone email")
    .populate("organization", "name phone email");

module.exports = {
  getProduct,
  getProductWithId,
  getProducts,
  getProductForUpdate,
};
