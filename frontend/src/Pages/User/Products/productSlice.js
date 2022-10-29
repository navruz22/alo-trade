import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../../Config/Api";
import { universalToast } from "../../../Components/ToastMessages/ToastMessages";
import { findIndex } from "lodash";

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (body = {}, { rejectWithValue }) => {
    try {
      const { data } = await Api.post("/product/create", body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (body = {}, { rejectWithValue }) => {
    try {
      const { data } = await Api.post("/product/getbyfilter", body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getProductsByFilter = createAsyncThunk(
  "products/getProductsByFilter",
  async (body = {}, { rejectWithValue }) => {
    try {
      const { data } = await Api.post("/product/getbyfilter", body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getProductById = createAsyncThunk(
  "products/getProductsById",
  async (body = {}, { rejectWithValue }) => {
    try {
      const { data } = await Api.post("/product/getbyid", body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (body = {}, { rejectWithValue }) => {
    try {
      const { data } = await Api.put("/product/update", body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateProductPosition = createAsyncThunk(
  "products/updateProductPosition",
  async (body = {}, { rejectWithValue }) => {
    try {
      const { data } = await Api.put("/product/updateposition", body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (body = {}, { rejectWithValue }) => {
    try {
      const { data } = await Api.post("/product/delete", body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearErrorCategories: (state) => {
      state.error = null;
    },
  },
  extraReducers: {
    [createProduct.pending]: (state) => {
      state.loading = true;
    },
    [createProduct.fulfilled]: (state, { payload: { product } }) => {
      state.loading = false;
      state.products = [product, ...state.products];
    },
    [createProduct.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      universalToast(payload, "error");
    },
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, { payload: { products } }) => {
      state.loading = false;
      state.products = products;
    },
    [getProducts.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      universalToast(payload, "error");
    },
    [getProductsByFilter.pending]: (state) => {
      state.loading = true;
    },
    [getProductsByFilter.fulfilled]: (state, { payload: { products } }) => {
      state.loading = false;
      state.products = [...state.products, ...products];
    },
    [getProductsByFilter.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      universalToast(payload, "error");
    },
    [getProductById.pending]: (state) => {
      state.loading = true;
    },
    [getProductById.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      universalToast(payload, "error");
    },
    [updateProduct.pending]: (state) => {
      state.loading = true;
    },
    [updateProduct.fulfilled]: (state, { payload: { product } }) => {
      const productIndex = findIndex(state.products, { _id: product._id });
      state.products[productIndex] = product;
      state.loading = false;
    },
    [updateProduct.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      universalToast(payload, "error");
    },
    [deleteProduct.pending]: (state) => {
      state.loading = true;
    },
    [deleteProduct.fulfilled]: (state, { payload: { id } }) => {
      const productIndex = findIndex(state.products, { _id: id });
      state.products.splice(productIndex, 1);
      universalToast("Buyurtma muvaffaqqiyatli o'chirildi", "success");
      state.loading = false;
    },
    [updateProductPosition.pending]: (state) => {
      state.loading = true;
    },
    [updateProductPosition.fulfilled]: (state, { payload: { product } }) => {
      const productIndex = findIndex(state.products, { _id: product._id });
      state.products[productIndex] = product;
      state.loading = false;
    },
    [updateProductPosition.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      universalToast(payload, "error");
    },
  },
});

export const { clearErrorCategories } = productSlice.actions;
export default productSlice.reducer;
