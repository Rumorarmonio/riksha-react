import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../types/Product'
import { RootState } from '../store'

interface CartSliceState {
  totalPrice: number,
  items: Product[],
}

const initialState: CartSliceState = {
  totalPrice: 0,
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Product>): void {
      const findItem = state.items.find(item =>
        item.id === action.payload.id,
      )

      if (findItem) {
        findItem.added++
      } else {
        state.items.push({
          ...action.payload,
          added: 1,
        })
      }

      state.totalPrice = state.items.reduce((sum: number, item): number => {
        return (item.price * item.added) + sum
      }, 0)
    },
    minusItem(state, action: PayloadAction<string>): void {
      const item = state.items.find(item =>
        item.id === action.payload,
      )

      if (item) {
        item.added--
      }

      state.totalPrice = state.items.reduce((sum: number, item): number => {
        return (item.price * item.added) + sum
      }, 0)
    },
    removeItem(state, action: PayloadAction<string>): void {
      state.items = state.items.filter(item =>
        item.id !== action.payload,
      )

      state.totalPrice = state.items.reduce((sum: number, item): number => {
        return item.price * item.added + sum
      }, 0)
    },
    clearItems(state: CartSliceState): void {
      state.items = []
      state.totalPrice = 0
    },
  },
})

export const selectCart = (state: RootState): CartSliceState => state.cart
export const selectCartItemById = (id: string) =>
  (state: RootState): Product | undefined => (
    state.cart.items.find((product: Product): boolean =>
      product.id === id,
    )
  )

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions
export default cartSlice.reducer
