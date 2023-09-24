import {createSlice} from '@reduxjs/toolkit'

// TODO: store search value in redux
const initialState = {
    categoryId: 0,
    currentPage: 1,
    sortType: {
        name: 'По умолчанию',
        sortProperty: ''
    }
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            console.log('action setCategoryId', action)
            state.categiryId = action.payload
        },
        setSort(state, action) {
            state.sortType = action.payload
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },
        setFilters(state, action) {
            state.currentPage = Number(action.payload.currentPage)
            state.sort = action.payload.sort
            state.categoryId = Number(action.payload.categoryId)
        }
    }
})

export const {setCategoryId, setSort, setCurrentPage, setFilters} = filterSlice.actions
export default filterSlice.reducer
