import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import cart from './slices/cartSlice'
import products from './slices/productsSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    products,
    filter,
    cart,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
