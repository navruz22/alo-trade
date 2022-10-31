import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../../Config/Api";
import { universalToast } from "../../../Components/ToastMessages/ToastMessages";

export const createOffer = createAsyncThunk(
  "offers/createOffer",
  async (body = {}, { rejectWithValue }) => {
    try {
      const { data } = await Api.post("/offer/create", body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getOffers = createAsyncThunk(
  "offers/getOffers",
  async (body = {}, { rejectWithValue }) => {
    try {
      const { data } = await Api.post("/offer/getoffers", body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getOfferByUser = createAsyncThunk(
  "offers/getOffers",
  async (body = {}, { rejectWithValue }) => {
    try {
      const { data } = await Api.post("/offer/getofferbyuser", body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getMessagesByOffer = createAsyncThunk(
  "offers/getMessagesByOffer",
  async (body = {}, { rejectWithValue }) => {
    try {
      const { data } = await Api.post("/offer/getmessagesbyoffer", body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const offerSlice = createSlice({
  name: "offers",
  initialState: {
    offers: [],
    messages: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearErrorCategories: (state) => {
      state.error = null;
    },
    setAllMessages: (state, { payload: { messages } }) => {
      state.messages = messages;
    },
  },
  extraReducers: {
    [createOffer.pending]: (state) => {
      state.loading = true;
    },
    [createOffer.fulfilled]: (state, { payload: { offer } }) => {
      state.loading = false;
      state.offers = [offer, ...state.offers];
      state.messages = offer.messages;
    },
    [createOffer.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      universalToast(payload, "error");
    },
    [getOffers.pending]: (state) => {
      state.loading = true;
    },
    [getOffers.fulfilled]: (state, { payload: { offers } }) => {
      state.loading = false;
      state.offers = offers;
    },
    [getOffers.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      universalToast(payload, "error");
    },
    [getMessagesByOffer.pending]: (state) => {
      state.loading = true;
    },
    [getMessagesByOffer.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.messages = payload;
    },
    [getMessagesByOffer.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      universalToast(payload, "error");
    },
    [getOfferByUser.pending]: (state) => {
      state.loading = true;
    },
    [getOfferByUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      universalToast(payload, "error");
    },
  },
});

export const { clearErrorCategories, setAllMessages } = offerSlice.actions;
export default offerSlice.reducer;
