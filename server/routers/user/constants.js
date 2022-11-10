const { Organization, User } = require("../../models/models");
const { map } = require("lodash");

const separateOrganization = (organization) => {
  return {
    _id: organization._id,
    name: organization?.name,
    image: organization?.image,
    description: organization?.description,
    tradetypes: organization?.tradetypes,
    email: organization?.email,
    phone: organization?.phone,
    address: organization?.address,
    district: {
      label: organization?.district?.name,
      value: organization?.district?._id,
    },
    region: {
      label: organization?.region?.name,
      value: organization?.region?._id,
      districts: map(organization?.region.districts, (district) => {
        return { label: district.name, value: district._id };
      }),
    },
    categories: map(organization?.categories, (category) => {
      return {
        label: category.name,
        value: category._id,
        subcategories: map(category.subcategories, (subcategory) => {
          return { label: subcategory.name, value: subcategory._id };
        }),
      };
    }),
    subcategories: map(organization?.subcategories, (subcategory) => {
      return { label: subcategory.name, value: subcategory._id };
    }),
  };
};

const getUserById = async (id) =>
  await User.findById(id)
    .select("-password")
    .populate({
      path: "region",
      select: "name",
      populate: {
        path: "districts",
        select: "name",
      },
    })
    .populate("district", "name")
    .then((user) => {
      return {
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        phone: user.phone,
        image: user.image,
        email: user.email,
        district: { label: user.district.name, value: user.district._id },
        region: {
          label: user.region.name,
          value: user.region._id,
          districts: map(user.region.districts, (district) => {
            return { label: district.name, value: district._id };
          }),
        },
        organization: user.organization,
        type: user.organization ? "organization" : "user",
      };
    });

const getOrganizationById = async (id) =>
  await Organization.findById(id)
    .populate("district", "name")
    .populate({
      path: "region",
      select: "name",
      populate: {
        path: "districts",
        select: "name",
      },
    })
    .populate({
      path: "categories",
      select: "name",
      populate: {
        path: "subcategories",
        select: "name",
      },
    })
    .populate("subcategories", "name")
    .then((organization) => {
      return separateOrganization(organization);
    });

const getOrganizations = async ({ page, count, query }) =>
  await Organization.find(query)
    .sort({ createdAt: -1 })
    .skip(page * count)
    .limit(count)
    .populate("district", "name")
    .populate("region", "name")
    .populate("categories", "name")
    .populate("subcategories", "name")
    .populate("tradetypes", "name")
    .populate("user", "firstname lastname phone email");

const getOrganizationsCount = async ({ query }) =>
  await Organization.find(query).count();

const getOrganization = async (id) =>
  await Organization.findById(id)
    .populate("district", "name")
    .populate({
      path: "region",
      select: "name",
      populate: {
        path: "districts",
        select: "name",
      },
    })
    .populate({
      path: "categories",
      select: "name",
      populate: {
        path: "subcategories",
        select: "name",
      },
    })
    .populate("subcategories", "name")
    .populate("tradetypes", "name")
    .then((organization) => {
      return separateOrganization(organization);
    });

module.exports = {
  getUserById,
  getOrganizationById,
  getOrganizations,
  getOrganizationsCount,
  getOrganization,
};
