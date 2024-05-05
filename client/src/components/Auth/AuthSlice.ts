import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchCheckUser,
  fetchLogin,
  fetchLogout,
  fetchRegister,
} from "../../api";
import { AuthState, UserRegister, UserSignInn } from "./types";

const initialState: AuthState = {
  user: undefined,
  error: undefined,
  loading: true,
};

export const checkUser = createAsyncThunk("auth/check", () => fetchCheckUser());
export const signUp = createAsyncThunk("auth/sign-up", (user: UserRegister) =>
  fetchRegister(user)
);

export const signIn = createAsyncThunk("auth/sign-in", (user: UserSignInn) =>
  fetchLogin(user)
);
export const logout = createAsyncThunk("auth/logout", () => fetchLogout());

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = undefined;
    },
    stopLoadingAuth: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        window.location.href = "/main";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        window.location.href = "/main";
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = undefined;
        state.loading = false;
      });
  },
});

export const { clearError, stopLoadingAuth } = authSlice.actions;
export default authSlice.reducer;
