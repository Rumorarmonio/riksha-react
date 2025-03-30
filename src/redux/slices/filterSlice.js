import {createSlice} from '@reduxjs/toolkit'

// TODO: store search value in redux
const initialState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  sortType: {
    name: 'По умолчанию',
    sortProperty: '',
  },
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categiryId = action.payload
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload
    },
    setSort(state, action) {
      state.sortType = action.payload
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
    setFilters(state, action) {
      state.currentPage = Number(action.payload.currentPage)
      state.sortType = action.payload.sortType
      state.categoryId = Number(action.payload.categoryId)
    },
  },
})

export const selectFilter = state => state.filter
export const selectSortType = state => state.filter.sortType
export const selectSearchValue = state => state.filter.searchValue

export const { setCategoryId, setSort, setCurrentPage, setFilters, setSearchValue } = filterSlice.actions
export default filterSlice.reducer
