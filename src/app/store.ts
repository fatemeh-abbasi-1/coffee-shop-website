import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productSlice";
import authReduser from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
