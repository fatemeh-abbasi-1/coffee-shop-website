import { createAsyncThunk, createSlice,PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  inventory: number;
  discount: number;
}

interface ProductsState {
  products: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const respanse = await axios.get("http://localhost:3000/products");
    console.log(respanse);
    
    return respanse.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // وقتی در حال fetch هست
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      // وقتی fetch موفق بود
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      // وقتی fetch خطا داد
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'خطا در دریافت اطلاعات';
      });
  },
});

export default productsSlice.reducer;






