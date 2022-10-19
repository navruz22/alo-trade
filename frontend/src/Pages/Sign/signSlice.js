import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../Config/Api";
import { universalToast } from "../../Components/ToastMessages/ToastMessages";

export const signUp = createAsyncThunk(
  "login/signUp",
  async (body = {}, { rejectWithValue }) => {
    try {
      const { data } = await Api.post("/user/signup", body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signIn = createAsyncThunk(
  "login/signIn",
  async (body = {}, { rejectWithValue }) => {
    try {
      const { data } = await Api.post("/user/signin", body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUser = createAsyncThunk(
  "login/getUser",
  async (body = {}, { rejectWithValue }) => {
    try {
      const { data } = await Api.post("/user/getuserbyid", body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const signSlice = createSlice({
  name: "login",
  initialState: {
    user: null,
    logged: false,
    loading: false,
    error: null,
  },
  reducers: {
    logOut: (state) => {
      state.logged = false;
      state.user = null;
      state.loading = false;
      state.error = null;
      localStorage.removeItem("_grecaptcha");
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: {
    [signUp.pending]: (state) => {
      state.loading = true;
    },
    [signUp.fulfilled]: (state, { payload: { token, user } }) => {
      state.loading = false;
      state.logged = true;
      state.user = user;
      localStorage.setItem("_grecaptcha", JSON.stringify(token));
    },
    [signUp.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      universalToast(payload, "error");
    },
    [signIn.pending]: (state) => {
      state.loading = true;
    },
    [signIn.fulfilled]: (state, { payload: { token, user } }) => {
      state.loading = false;
      state.logged = true;
      state.user = user;
      localStorage.setItem("_grecaptcha", JSON.stringify(token));
    },
    [signIn.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      universalToast(payload, "error");
    },
    [getUser.pending]: (state) => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.logged = true;
    },
    [getUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      universalToast(payload, "error");
    },
  },
});

export const { clearError, logOut } = signSlice.actions;
export default signSlice.reducer;
