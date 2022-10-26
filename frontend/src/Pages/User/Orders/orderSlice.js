import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../../Config/Api";
import { universalToast } from "../../../Components/ToastMessages/ToastMessages";

export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (body = {}, { rejectWithValue }) => {
    try {
      const { data } = await Api.post("/order/create", body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getOrders = createAsyncThunk(
  "orders/getOrders",
  async (body = {}, { rejectWithValue }) => {
    try {
      const { data } = await Api.post("/order/getbyfilter", body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getOrdersByFilter = createAsyncThunk(
  "orders/getOrdersByFilter",
  async (body = {}, { rejectWithValue }) => {
    try {
      const { data } = await Api.post("/order/getbyfilter", body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getOrderById = createAsyncThunk(
  "orders/getOrdersById",
  async (body = {}, { rejectWithValue }) => {
    try {
      const { data } = await Api.post("/order/getbyid", body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearErrorCategories: (state) => {
      state.error = null;
    },
  },
  extraReducers: {
    [createOrder.pending]: (state) => {
      state.loading = true;
    },
    [createOrder.fulfilled]: (state, { payload: { order } }) => {
      state.loading = false;
      state.orders = [order, ...state.orders];
    },
    [createOrder.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      universalToast(payload, "error");
    },
    [getOrders.pending]: (state) => {
      state.loading = true;
    },
    [getOrders.fulfilled]: (state, { payload: { orders } }) => {
      state.loading = false;
      state.orders = orders;
    },
    [getOrders.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      universalToast(payload, "error");
    },
    [getOrdersByFilter.pending]: (state) => {
      state.loading = true;
    },
    [getOrdersByFilter.fulfilled]: (state, { payload: { orders } }) => {
      state.loading = false;
      state.orders = [...state.orders, ...orders];
    },
    [getOrdersByFilter.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      universalToast(payload, "error");
    },
    [getOrderById.pending]: (state) => {
      state.loading = true;
    },
    [getOrderById.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      universalToast(payload, "error");
    },
  },
});

export const { clearErrorCategories } = orderSlice.actions;
export default orderSlice.reducer;
