import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
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
  page: number;
}

const initialState: ProductsState = {
  products: [],
  status: "idle",
  error: null,
  page: 1,
};

export const fetchProdects = createAsyncThunk(
  "products/fetchProducts",
  async (page: number) => {
    const response = await axios.get(
      `http://localhost:3000/products?_page=${page}&_limit=9`
    );
    return response.data;
  }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      setPage(state, action: PayloadAction<number>) {
        state.page = action.payload;
      },
    },
  