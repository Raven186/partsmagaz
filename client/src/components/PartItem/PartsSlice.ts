import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Part, PartsState } from "./types";
import { fetchAddPart, fetchGetParts } from "../../api";

const initialState: PartsState = {
  parts: [],
  error: undefined,
  loading: true,
};

const getParts = createAsyncThunk("parts/getParts", () => fetchGetParts());
const addPart = createAsyncThunk("parts/addPart", (part: Part) =>
  fetchAddPart(part)
);

export const partsSlice = createSlice({
  name: "parts",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = undefined;
    },
    clearParts: (state) => {
      state.parts = [];
    },
    clearLoading: (state) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getParts.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getParts.fulfilled, (state, action: PayloadAction<Part[]>) => {
        state.parts = action.payload;
        state.loading = false;
      })
      .addCase(getParts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(addPart.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(addPart.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addPart.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { clearError, clearParts, clearLoading } = partsSlice.actions;
export const partsActions = { getParts, addPart };
export default partsSlice.reducer;
