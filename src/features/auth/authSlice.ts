import { createSlice } from "@reduxjs/toolkit";

export interface authState {
  user: string;
  loading: boolean;
  error: boolean;
  isAuthenticated: boolean;
}

const initialState: authState = {
  user: "",
  loading: false,
  error: false,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default authSlice.reducer;
