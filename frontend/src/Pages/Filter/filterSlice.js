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
} = filterSlice.actions;
export default filterSlice.reducer;
