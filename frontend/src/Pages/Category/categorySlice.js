import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../Config/Api";

export const getAllCategories = createAsyncThunk(
  "categories/getAllCategories",
  async (body = {}, { rejectWithValue }) => {
    try {
      const { data } = await Api.get("/category/getwithsubcategories");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categoriesWithSubcategories: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearErrorCategories: (state) => {
      state.error = null;
    },
  },
  extraReducers: {
    [getAllCategories.pending]: (state) => {
      state.loading = true;
    },
    [getAllCategories.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.categoriesWithSubcategories = payload;
    },
    [getAllCategories.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { clearErrorCategories } = categorySlice.actions;
export default categorySlice.reducer;
