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
  selectedProducts: Product[];
  fetchStatus: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  page: number;
  totalCount: number;
  // modalState: boolean;
}

const initialState: ProductsState = {
  products: [],
  selectedProducts: [],
  fetchStatus: "idle",
  error: null,
  page: 1,
  totalCount: 0,
  // modalState: false,
};

// fetch all products
export const fetchProducts = createAsyncThunk<
  { data: Product[]; totalCount: number },
  number
>("product/fetchProducts", async (page: number) => {
  const response = await axios.get(
    `http://localhost:3000/products?_start=${page * 9 - 9}&_end=${page * 9}
    `,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  console.log(response.data);

  const totalCount = await axios.get(`http://localhost:3000/products`, {
    headers: {
      Accept: "application/json",
    },
  });

  return { data: response.data, totalCount: totalCount.data.length };
});

// add to card
export const addProductInCard = createAsyncThunk(
  "products/addProductInCard",
  async (productId: number, thunkAPI) => {
    const getRes = await axios.get(
      `http://localhost:3000/products/${productId}`
    );

    const currentProduct = getRes.data;
    const updatedInventory = currentProduct.inventory - 1;

    await axios.patch(`http://localhost:3000/products/${productId}`, {
      inventory: updatedInventory,
    });

    await axios.post(`http://localhost:3000/selectedProducts`, getRes.data);

    thunkAPI.dispatch(fetchSelectedProducts());

    return { selectedProduct: getRes.data };
  }
);

export const fetchSelectedProducts = createAsyncThunk(
  "fetchSelectedProducts",
  async () => {
    const getRes = await axios.get(`http://localhost:3000/selectedProducts`);
    console.log(getRes.data);
    return getRes.data;
  }
);

//romove from card
export const removeProductFromCard = createAsyncThunk(
  "products/removeProductFromCard",
  async (productId: number) => {
    const getRes = await axios.get(
      `http://localhost:3000/products/${productId}`
    );
    console.log(getRes.data);

    const currentProduct = getRes.data;
    const updatedInventory = currentProduct.inventory + 1;
    await axios.patch(`http://localhost:3000/products/${productId}`, {
      inventory: updatedInventory,
    });

    await axios.delete(`http://localhost:3000/selectedProducts/${productId}`);

    return getRes.data;
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
    // changeModalState: (state) => {
    //   state.modalState = !state.modalState;
    // },
  },
  extraReducers: (builder) => {
    //fetch all products
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.fetchStatus = "loading";
      })
      .addCase(
        fetchProducts.fulfilled,
        (
          state,
          action: PayloadAction<{ data: Product[]; totalCount: number }>
        ) => {
          state.fetchStatus = "succeeded";
          const { data, totalCount } = action.payload;

          state.products = data;
          state.totalCount = totalCount;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.fetchStatus = "failed";
        state.error = action.error.message || "Error... ";
      });

    // get selected products
    builder.addCase(fetchSelectedProducts.fulfilled, (state, action) => {
      state.selectedProducts = action.payload;
      console.log(state.selectedProducts);
    });

    //remove from card
    builder.addCase(removeProductFromCard.fulfilled, (state, action) => {
      const selectedProduct = action.payload;

      const index = state.selectedProducts.findIndex(
        (p) => p.id === selectedProduct.id
      );
      if (index !== -1) {
        state.selectedProducts.splice(index, 1);
        console.log(state.selectedProducts);
      }
    });
  },
});

export const { incrementPage, decrementPage} =
  productsSlice.actions;
export default productsSlice.reducer;
