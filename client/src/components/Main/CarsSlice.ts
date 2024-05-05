import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Car, CarsState } from "./types";
import { fetchGetCars } from "../../api";

const initialState: CarsState = {
  cars: [],
};

const getCars = createAsyncThunk("cars/getCars", () => fetchGetCars());

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCars.fulfilled, (state, action) => {
      state.cars = action.payload;
    });
  },
});

export const carsActions = { getCars };
export default carsSlice.reducer;
