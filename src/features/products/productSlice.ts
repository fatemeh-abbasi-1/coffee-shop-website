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
  totalCount: number;
}

const initialState: ProductsState = {
  products: [],
  selectedProducts: [],
  fetchStatus: "idle",
  error: null,
  page: 1,
  totalCount: 0,
};

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
  const totalCount = await axios.get(`http://localhost:3000/products`, {
    headers: {
      Accept: "application/json",
    },
  });
  console.log(totalCount.data.length);
  return { data: response.data, totalCount: totalCount.data.length };
});

export const addProductInCard = createAsyncThunk(
  "products/addProductInCard",
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

    return { selectedProduct: getRes.data, editedData: patchRes.data };
  }
);

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
  },
  extraReducers: (builder) => {
    //fetch
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

    // add to card
    builder.addCase(
      addProductInCard.fulfilled,
      (state, action: PayloadAction<{ selectedProduct: Product }>) => {
        const { selectedProduct } = action.payload;
        state.selectedProducts = [...state.selectedProducts, selectedProduct];
        console.log(state.selectedProducts);
      }
    );

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

export const { incrementPage, decrementPage } = productsSlice.actions;
export default productsSlice.reducer;
