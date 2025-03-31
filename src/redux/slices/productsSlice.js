import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProductsStatus', async (params, thunkAPI) => {
  const {
    sortBy,
    order,
    // TODO: sort by category
    // category,
    search,
    currentPage,
  } = params;

  const { data } = await axios.get(
    `https://64db1b63593f57e435b07477.mockapi.io/items?page=${currentPage}&limit=9&sortBy=${sortBy}&order=${order}${search}`,
  );

  return data;
});

const initialState = {
  products: [],
  status: 'loading', // loading | success | error
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = 'loading';
      state.products = [];
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.status = 'success';
    },
    [fetchProducts.rejected]: (state) => {
      state.status = 'error';
      state.products = [];
    },
  },
});

export const selectProducts = state => state.products;

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
