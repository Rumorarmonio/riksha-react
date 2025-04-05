import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { Product } from '../../types/Product'
import { RootState } from '../store'
import { SortPropertyEnum } from '../../types/Sort'

export type SearchProductsParams = {
  sortBy: SortPropertyEnum;
  order: 'asc' | 'desc';
  // TODO: add category
  // category: string;
  search: string;
  currentPage: number;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface ProductsSliceState {
  products: Product[],
  status: Status,
}

const initialState: ProductsSliceState = {
  products: [],
  status: Status.LOADING,
}

export const fetchProducts = createAsyncThunk<Product[], SearchProductsParams>('products/fetchProductsStatus', async (params: SearchProductsParams) => {
  const {
    sortBy,
    order,
    // TODO: sort by category
    // category,
    search,
    currentPage,
  } = params

  const { data: products } = await axios.get<Product[]>(
    `https://64db1b63593f57e435b07477.mockapi.io/items?page=${currentPage}&limit=9&sortBy=${sortBy}&order=${order}${search}`,
  )

  return products
})

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>): void {
      state.products = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state): void => {
      state.status = Status.LOADING
      state.products = []
    })
    builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>): void => {
      state.status = Status.SUCCESS
      state.products = action.payload
    })
    builder.addCase(fetchProducts.rejected, (state): void => {
      state.status = Status.ERROR
      state.products = []
    })
  },
})

export const selectProducts = (state: RootState): ProductsSliceState => state.products

export const { setProducts } = productSlice.actions
export default productSlice.reducer
