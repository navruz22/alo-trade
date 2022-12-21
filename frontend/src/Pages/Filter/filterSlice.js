import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    tradetypes: [],
    categories: [],
    subcategories: [],
    districts: [],
    regions: [],
    order: "all",
    product: "all",
    name: "",
  },
  reducers: {
    filterTradeTypes: (state, { payload }) => {
      state.tradetypes = payload;
    },
    filterCategories: (state, { payload }) => {
      state.categories = payload;
    },
    filterSubcategories: (state, { payload }) => {
      state.subcategories = payload;
    },
    filterDistricts: (state, { payload }) => {
      state.districts = payload;
    },
    filterRegions: (state, { payload }) => {
      state.regions = payload;
    },
    filterOrder: (state, { payload }) => {
      state.order = payload;
    },
    filterProduct: (state, { payload }) => {
      state.product = payload;
    },
    filterName: (state, { payload }) => {
      state.name = payload;
    },
    clearFilters: (state) => {
      state.tradetypes = [];
      state.categories = [];
      state.subcategories = [];
      state.districts = [];
      state.regions = [];
      state.order = "all";
      state.product = "all";
      state.name = "";
    },
  },
  extraReducers: {},
});

export const {
  filterCategories,
  filterDistricts,
  filterRegions,
  filterSubcategories,
  filterTradeTypes,
  filterOrder,
  filterProduct,
  filterName,
  clearFilters,
} = filterSlice.actions;
export default filterSlice.reducer;
