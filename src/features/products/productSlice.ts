import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../../app/store";
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
  selectedProducts: Product[];
  fetchStatus: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  page: number;
}

const initialState: ProductsState = {
  products: [],
  selectedProducts: [],
  fetchStatus: "idle",
  error: null,
  page: 1,
};

export const fetchProducts = createAsyncThunk<Product[], number>(
  "product/fetchProducts",
  async (page) => {
    const response = await axios.get(
      `http://localhost:3000/products?_start=${page * 9 - 9}&_end=${page * 9}
`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    return response.data;
  }
);

export const editProducts = createAsyncThunk(
  "products/editProducts",
  async (productId: number) => {
    const getRes = await axios.get(
      `http://localhost:3000/products/${productId}`
    );
    console.log(getRes.data);

    const currentProduct = getRes.data;
    const updatedInventory = currentProduct.inventory - 1;
    const patchRes = await axios.patch(
      `http://localhost:3000/products/${productId}`,
      {
        inventory: updatedInventory,
      }
    );

    return patchRes.data;
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
    //fetch
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.fetchStatus = "loading";
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.fetchStatus = "succeeded";
          console.log(action.payload);

          state.products = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.fetchStatus = "failed";
        state.error = action.error.message || "Error... ";
      });

    // edit
    builder.addCase(
      editProducts.fulfilled,
      (state, action: PayloadAction<Product>) => {
        state.selectedProducts.push();
        console.log(state.selectedProducts);
      }
    );
  },
});

export const { incrementPage, decrementPage } = productsSlice.actions;
export default productsSlice.reducer;
