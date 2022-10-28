import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../../Config/Api";
import { universalToast } from "../../../Components/ToastMessages/ToastMessages";

export const getOrganizations = createAsyncThunk(
  "organizations/getAllOrganizations",
  async (body = {}, { rejectWithValue }) => {
    try {
      const { data } = await Api.post("/user/organization/getall", body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getOrganizationsByFilter = createAsyncThunk(
  "organizations/getAllOrganizationsByFilter",
  async (body = {}, { rejectWithValue }) => {
    try {
      const { data } = await Api.post("/user/organization/getall", body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const organizationSlice = createSlice({
  name: "organizations",
  initialState: {
    organizations: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearErrorCategories: (state) => {
      state.error = null;
    },
  },
  extraReducers: {
    [getOrganizations.pending]: (state) => {
      state.loading = true;
    },
    [getOrganizations.fulfilled]: (state, { payload: { organizations } }) => {
      state.loading = false;
      state.organizations = organizations;
    },
    [getOrganizations.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      universalToast(payload, "error");
    },
    [getOrganizationsByFilter.pending]: (state) => {
      state.loading = true;
    },
    [getOrganizationsByFilter.fulfilled]: (
      state,
      { payload: { organizations } }
    ) => {
      state.loading = false;
      state.organizations = [...state.organizations, ...organizations];
    },
    [getOrganizationsByFilter.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      universalToast(payload, "error");
    },
  },
});

export const { clearErrorCategories } = organizationSlice.actions;
export default organizationSlice.reducer;
