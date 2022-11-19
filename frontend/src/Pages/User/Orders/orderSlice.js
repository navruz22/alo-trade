import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../../Config/Api";
import { universalToast } from "../../../Components/ToastMessages/ToastMessages";
import { findIndex } from "lodash";

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

export const getOrdersCount = createAsyncThunk(
  "orders/getOrdersCount",
  async (body = {}, { rejectWithValue }) => {
    try {
      const { data } = await Api.post("/order/getbyfiltercount", body);
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

export const getOrderByOffer = createAsyncThunk(
  "orders/getOrdersByOffer",
  async (body = {}, { rejectWithValue }) => {
    try {
      const { data } = await Api.post("/order/getbyoffer", body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateOrder = createAsyncThunk(
  "orders/updateOrder",
  async (body = {}, { rejectWithValue }) => {
    try {
      const { data } = await Api.put("/order/update", body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateOrderPosition = createAsyncThunk(
  "orders/updateOrderPosition",
  async (body = {}, { rejectWithValue }) => {
    try {
      const { data } = await Api.put("/order/updateposition", body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteOrder = createAsyncThunk(
  "orders/deleteOrder",
  async (body = {}, { rejectWithValue }) => {
    try {
      const { data } = await Api.post("/order/delete", body);
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
    [getOrderById.pending]: (state) => {
      state.loading = true;
    },
    [getOrderById.fulfilled]: (state, { payload: { order } }) => {
      state.loading = false;
    },
    [getOrderById.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      universalToast(payload, "error");
    },
    [updateOrder.pending]: (state) => {
      state.loading = true;
    },
    [updateOrder.fulfilled]: (state, { payload: { order } }) => {
      const orderIndex = findIndex(state.orders, { _id: order._id });
      state.orders[orderIndex] = order;
      state.loading = false;
    },
    [updateOrder.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      universalToast(payload, "error");
    },
    [deleteOrder.pending]: (state) => {
      state.loading = true;
    },
    [deleteOrder.fulfilled]: (state, { payload: { id } }) => {
      const orderIndex = findIndex(state.orders, { _id: id });
      state.orders.splice(orderIndex, 1);
      universalToast("Заказ успешно удален", "success");
      state.loading = false;
    },
    [updateOrderPosition.pending]: (state) => {
      state.loading = true;
    },
    [updateOrderPosition.fulfilled]: (state, { payload: { order } }) => {
      const orderIndex = findIndex(state.orders, { _id: order._id });
      state.orders[orderIndex] = order;
      state.loading = false;
    },
    [updateOrderPosition.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      universalToast(payload, "error");
    },
    [getOrderByOffer.pending]: (state) => {
      state.loading = true;
    },
    [getOrderByOffer.fulfilled]: (state, { payload: { order } }) => {
      state.loading = false;
    },
    [getOrderByOffer.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      universalToast(payload, "error");
    },
  },
});

export const { clearErrorCategories } = orderSlice.actions;
export default orderSlice.reducer;
