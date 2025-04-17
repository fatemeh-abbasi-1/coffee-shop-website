import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  inventory: number;
  discount: number;
}

export interface ProductsState {
  products: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  page: number;
}

const initialState: ProductsState = {
  products: [],
  status: "idle",
  error: null,
  page: 1,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (page) => {
    const response = await axios.get(
      `http://localhost:3000/products?_page=${page}&_limit=9`
    );
    console.log(response);

    return response.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
    decrementPage: (state) => {
      state.page -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.status = "succeeded";
          state.products = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Error... ";
      });
  },
});

export const { incrementPage, decrementPage } = productsSlice.actions;
export default productsSlice.reducer;
