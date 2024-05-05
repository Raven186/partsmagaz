import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import authSlice from "../src/components/Auth/AuthSlice";
import carsSlice from "../src/components/Main/CarsSlice";
import partsSlice from "../src/components/PartItem/PartsSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    cars: carsSlice,
    parts: partsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
