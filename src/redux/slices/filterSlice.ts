import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Sort } from '../../types/Sort'
import { sortTypes } from '../../assets/data/data'

export interface FilterSliceState {
  searchValue: string,
  categoryId: number,
  currentPage: number,
  sortType: Sort,
}

// TODO: store search value in redux
const initialState: FilterSliceState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  sortType: sortTypes[0],
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>): void {
      state.categoryId = action.payload
    },
    setSearchValue(state, action: PayloadAction<string>): void {
      state.searchValue = action.payload
    },
    setSort(state, action: PayloadAction<Sort>): void {
      state.sortType = action.payload
    },
    setCurrentPage(state, action: PayloadAction<number>): void {
      state.currentPage = action.payload
    },
    setFilters(state, action: PayloadAction<FilterSliceState>): void {
      state.currentPage = Number(action.payload.currentPage)
      state.sortType = action.payload.sortType
      state.categoryId = Number(action.payload.categoryId)
    },
  },
})

export const selectFilter = (state: RootState): FilterSliceState => state.filter
export const selectSortType = (state: RootState): Sort => state.filter.sortType
export const selectSearchValue = (state: RootState): string => state.filter.searchValue

export const { setCategoryId, setSort, setCurrentPage, setFilters, setSearchValue } = filterSlice.actions
export default filterSlice.reducer
